import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = new FormData(formRef.current);
  
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
    };
  
    try {
      const response = await fetch('https://atul-dev-portfolio.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        console.error('Error sending email:', await response.text());
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-24 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">atulsborse7@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+91 7588402863</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-xl">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <CheckCircle className="text-green-400" size={48} />
                <p className="text-white text-lg">Message sent successfully!</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
