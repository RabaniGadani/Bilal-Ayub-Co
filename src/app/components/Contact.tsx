'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    caseType: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WhatsApp phone number in international format, no spaces or +
  const WHATSAPP_NUMBER = '+923052692482';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose WhatsApp message
    const lawAreas: Record<string, string> = {
      civil: 'Civil Law',
      criminal: 'Criminal Law',
      family: 'Family Law',
      property: 'Property Law',
      business: 'Business Law',
      labor: 'Labor Law',
      other: 'Other',
    };

    const messageLines = [
      `*New Legal Inquiry*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      formData.caseType ? `*Area of Law:* ${lawAreas[formData.caseType] || formData.caseType}` : '',
      `*Subject:* ${formData.subject}`,
      `*Message:*`,
      `${formData.message}`,
    ].filter(Boolean);

    const message = encodeURIComponent(messageLines.join('\n'));

    // WhatsApp wa.me link
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Contact Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary py-20 shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
            Get In Touch With Our Legal Experts
          </h1>
          <p className="text-lg sm:text-xl text-slate-100 mx-auto max-w-2xl font-medium opacity-90">
            Our experienced legal team is ready to address your inquiry with discretion, efficiency, and professionalism. Complete the form or use the contact options below.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* FORM */}
            <div className="bg-white rounded-xl p-10 shadow-[0_4px_32px_0_rgba(31,41,55,0.1)] border border-gray-100">
              <h2 className="text-3xl font-semibold text-primary mb-5">
                Contact Form
              </h2>
              <p className="text-gray-600 mb-7">
                Complete your details below and a senior attorney will reach out shortly. All inquiries are strictly confidential.
              </p>
              {submitted && (
                <div className="bg-green-100 text-green-800 px-4 py-2 mb-4 rounded font-semibold shadow">
                  Thank you! We have received your message and will respond soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                      placeholder="+92 305 269 2482"
                    />
                  </div>
                  <div>
                    <label htmlFor="caseType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Area of Law
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      value={formData.caseType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    >
                      <option value="">Select an area</option>
                      <option value="civil">Civil Law</option>
                      <option value="criminal">Criminal Law</option>
                      <option value="family">Family Law</option>
                      <option value="property">Property Law</option>
                      <option value="business">Business Law</option>
                      <option value="labor">Labor Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    placeholder="Inquiry Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    placeholder="Describe your legal matter in detail..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark focus:ring-2 focus:ring-primary transition-all flex items-center justify-center shadow-sm disabled:opacity-60"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {submitted ? "Sending..." : "Send via WhatsApp"}
                </button>
              </form>
            </div>

            {/* CONTACT INFO PANEL */}
            <div className="flex flex-col h-full justify-between space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-primary mb-3">
                  Firm Contact Information
                </h2>
                <div className="bg-white rounded-xl p-7 shadow border border-gray-100 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-700 text-base font-bold">Office Address</div>
                      <div className="text-gray-600 text-sm">
                        Suite No.608,6th floor, Al Ayesha Chamber,
                        Karachi-74200,
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-700 text-base font-bold">Phone</div>
                      <div className="text-gray-600 text-sm">
                        <a href="tel:+923052692482" className="hover:text-primary transition">
                          +92 305 269 2482
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-700 text-base font-bold">Email</div>
                      <div className="text-gray-600 text-sm">
                        <a href="mailto:m.bilalayubbhatti@gmail.com" className="hover:text-primary transition">
                      m.bilalayubbhatti@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-700 text-base font-bold">WhatsApp</div>
                      <div className="text-gray-600 text-sm">
                        <a href="https://wa.me/923052692482" text-green-600 transition">
                        +92 305 269 2482
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* OFFICE HOURS */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                  <h3 className="text-lg font-semibold text-primary mb-3">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Button */}
              <div>
                <div className="bg-primary text-white rounded-xl p-6 flex flex-col items-start shadow border border-primary/15">
                  <span className="uppercase text-xs tracking-widest mb-1 font-bold opacity-80">
                    Emergency Legal Line
                  </span>
                  <div className="text-lg font-bold mb-1">In urgent need of legal help?</div>
                  <div className="opacity-90 mb-3 text-sm">
                    Call our emergency lawyer hotline at any time for fast response.
                  </div>
                  <a
                    href="tel:+923052692482"
                    className="inline-block bg-white text-primary font-bold py-2 px-5 rounded shadow hover:bg-gray-50 hover:text-primary-dark transition"
                  >
                      +92 305 269 2482
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE GOOGLE MAP */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-3">Our Office Location</h2>
            <p className="text-lg text-gray-600 mb-7">
              Visit us at our main branch in Karachi or schedule a consultation.
            </p>
            <div className="mb-4 flex items-center justify-center space-x-2">
              <span className="text-primary font-semibold">
                Suite No.608, 6th floor, Al Ayesha Chamber,<br />
                Karachi-74200,
              </span>
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="w-full aspect-[16/8] rounded-xl shadow overflow-hidden border border-gray-200">
            <iframe
              title="Suite No.608, 6th floor, Al Ayesha Chamber, Karachi-74200"
              src="https://maps.google.com/maps?q=Suite%20No.608,%206th%20floor,%20Al%20Ayesha%20Chamber,%20Karachi-74200&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}






