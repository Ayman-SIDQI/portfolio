import React, { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Define types for form and status
type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = {
  submitting: boolean;
  error: string;
  success: boolean;
};

// Type guard for environment variables
const validateEnvVars = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// print the value of serviceId, templateId, and publicKey
  // console.log(serviceId);
  // console.log(templateId);
  // console.log(publicKey);
  
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Missing required EmailJS configuration');
  }

  return { serviceId, templateId, publicKey };
};

const socialLinks = [
  { icon: <Mail />, text: "sidqi.ayman.96@gmail.com", link: "mailto:sidqi.ayman.96@gmail.com" },
  { icon: <Github />, text: "github.com/Ayman-SIDQI", link: "https://github.com/Ayman-SIDQI" },
  { icon: <Linkedin />, text: "linkedin.com/in/vice-asid", link: "https://linkedin.com/in/vice-asid" },
  { icon: <Twitter />, text: "@aymansavage1", link: "https://x.com/aymansavage1" }
] as const;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    error: '',
    success: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, error: '', success: false });

    try {
      const { serviceId, templateId, publicKey } = validateEnvVars();

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        publicKey
      );

      console.log('Success:', result);
      setStatus({
        submitting: false,
        error: '',
        success: true
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error details:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to send message. Please try again.";
        
      setStatus({
        submitting: false,
        error: errorMessage,
        success: false
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="text-xl text-gray-600">
              Have a project in mind? Let's talk about bringing your ideas to life!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {socialLinks.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-600 hover:text-indigo-600 transition-colors">
                      {item.icon}
                      <span>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.text}
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-600 p-8 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Let's Connect!</h3>
                <p>
                  Whether you have a question, project idea, or just want to say hi,
                  I'd love to hear from you!
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {status.error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="p-4 bg-green-50 text-green-600 rounded-lg">
                  Message sent successfully!
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="What should I call you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Where can I reach you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="What's on your mind?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}