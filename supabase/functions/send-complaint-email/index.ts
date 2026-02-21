import { Resend } from "npm:resend@4.0.0";

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
    const { fullName, email, phone, complaintDetails }: ComplaintData = await req.json();

    if (!fullName || !email || !phone || !complaintDetails) {
      console.error('Missing required fields in request');
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
      console.error('CRITICAL: RESEND_API_KEY environment variable is not set');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email service not configured. Please set RESEND_API_KEY in Supabase Edge Function secrets.'
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Initializing Resend client...');
    const resend = new Resend(resendApiKey);

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

    console.log(`Attempting to send email to justicesupport@justiorafoundation.com for complaint from ${fullName}`);

    const emailData = await resend.emails.send({
      from: 'Justiora <no-reply@resend.dev>',
      to: ['justicesupport@justiorafoundation.com'],
      reply_to: email,
      subject: 'New Citizen Complaint Received',
      html: emailHtml,
    });

    console.log('Email sent successfully:', emailData);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Complaint submitted successfully. Email notification sent.',
        emailId: emailData.id
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('ERROR in send-complaint-email function:');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Full error:', error);

    let errorMessage = 'Failed to send complaint email';

    if (error instanceof Error) {
      errorMessage = error.message;

      if (error.message.includes('API key')) {
        errorMessage = 'Invalid email service API key. Please check RESEND_API_KEY configuration.';
      } else if (error.message.includes('domain')) {
        errorMessage = 'Email domain not verified. Please verify your domain with Resend.';
      } else if (error.message.includes('rate limit')) {
        errorMessage = 'Email rate limit exceeded. Please try again later.';
      }
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});