import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    complaintDetails: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'This field is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'This field is required';
    }

    if (!formData.complaintDetails.trim()) {
      newErrors.complaintDetails = 'This field is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not configured. Please add them to your .env file.');
      }

      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        complaintDetails: formData.complaintDetails,
        to_email: 'justicesupport@justiorafoundation.com'
      };

      console.log('Sending email via EmailJS...');

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          complaintDetails: ''
        });
        setErrors({});

        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Error submitting complaint. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="complaint-form" className="py-16 bg-[#e8dcc8] relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/2nd_image.jpg')",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#2c1810] mb-5" style={{ fontFamily: 'Cinzel, serif' }}>
              Citizen Complaints &<br />Grievance Support
            </h2>
            <p className="text-base text-[#2c1810] leading-relaxed">
              Citizens may submit complaints related to environmental violations, governance non-riality,
              RTI delays, and civic welfare issues for awareness-based guidance.
            </p>
          </div>

          <div className="bg-[#f5eee0] rounded-lg shadow-xl p-8 border border-[#c4b498]">
            <h3 className="text-xl font-bold text-[#2c1810] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>Submit a Complaint</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-2.5 border ${errors.fullName ? 'border-red-500' : 'border-[#c4b498]'} rounded focus:outline-none focus:ring-2 focus:ring-[#8b6f47] bg-white text-sm`}
                />
                {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-[#c4b498]'} rounded focus:outline-none focus:ring-2 focus:ring-[#8b6f47] bg-white text-sm`}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  className={`w-full px-4 py-2.5 border ${errors.phone ? 'border-red-500' : 'border-[#c4b498]'} rounded focus:outline-none focus:ring-2 focus:ring-[#8b6f47] bg-white text-sm`}
                />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Complaint Details"
                  required
                  rows={4}
                  value={formData.complaintDetails}
                  onChange={(e) => {
                    setFormData({ ...formData, complaintDetails: e.target.value });
                    if (errors.complaintDetails) setErrors({ ...errors, complaintDetails: '' });
                  }}
                  className={`w-full px-4 py-2.5 border ${errors.complaintDetails ? 'border-red-500' : 'border-[#c4b498]'} rounded focus:outline-none focus:ring-2 focus:ring-[#8b6f47] bg-white resize-none text-sm`}
                />
                {errors.complaintDetails && <p className="text-red-600 text-xs mt-1">{errors.complaintDetails}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-2.5 bg-[#8b6f47] hover:bg-[#75603d] text-white font-semibold rounded shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-700 text-center font-medium text-sm">Complaint submitted successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-700 text-center font-medium text-sm">{errorMessage || 'Error submitting complaint. Please try again.'}</p>
              )}
              <p className="text-xs text-[#2c1810] text-center mt-3">
                Awareness & guidance only. Submission does not guarantee litigation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
