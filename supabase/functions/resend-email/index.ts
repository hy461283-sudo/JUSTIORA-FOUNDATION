const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ComplaintData {
  fullName: string;
  email: string;
  phone: string;
  complaintDetails: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log('=== RESEND EMAIL FUNCTION START ===');
    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);

    const { fullName, email, phone, complaintDetails }: ComplaintData = await req.json();

    console.log('Received complaint from:', fullName);

    if (!fullName || !email || !phone || !complaintDetails) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ success: false, message: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      console.error('CRITICAL: RESEND_API_KEY not found in environment');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email service not configured'
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('RESEND_API_KEY found, preparing email...');

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c1810; border-bottom: 2px solid #8b6f47; padding-bottom: 10px;">New Citizen Complaint Submission</h2>

        <div style="background-color: #f5eee0; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${fullName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Submission Time:</strong> ${timestamp}</p>
        </div>

        <div style="margin-top: 20px;">
          <h3 style="color: #2c1810;">Complaint Details:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #8b6f47; white-space: pre-wrap;">${complaintDetails}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This complaint was submitted via the Justiora platform at ${timestamp}</p>
        </div>
      </div>
    `;

    const emailPayload = {
      from: 'Justiora <no-reply@resend.dev>',
      to: ['justicesupport@justiorafoundation.com'],
      reply_to: email,
      subject: 'New Citizen Complaint Received',
      html: emailHtml,
    };

    console.log('Sending email via Resend REST API...');
    console.log('Payload:', JSON.stringify({ ...emailPayload, html: '[HTML CONTENT]' }));

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    console.log('Resend API response status:', resendResponse.status);

    const resendData = await resendResponse.json();
    console.log('Resend API response data:', JSON.stringify(resendData));

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendData);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to send email via Resend',
          error: resendData,
        }),
        {
          status: resendResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('✅ Email sent successfully! ID:', resendData.id);
    console.log('=== RESEND EMAIL FUNCTION SUCCESS ===');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Complaint submitted successfully. Email notification sent.',
        emailId: resendData.id,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('=== RESEND EMAIL FUNCTION ERROR ===');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Internal server error while sending email',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});