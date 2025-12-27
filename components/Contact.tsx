"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'loading' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'loading' | 'error' = 'loading') => {
    setToast({ message, type });
    if (type === 'success' || type === 'error') {
      setTimeout(() => setToast(null), 4000);
    }
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the errors before submitting", "error");
      return;
    }

    setIsSubmitting(true);
    showToast("Sending message...", "loading");

    try {
      // Using EmailJS with environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your .env.local file.');
      }

      const emailData = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Bhanuprasad',
          reply_to: formData.email,
        },
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        showToast("Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        const errorText = await response.text();
        console.error('EmailJS Error:', response.status, errorText);

        if (response.status === 412) {
          throw new Error('Please reconnect your Gmail account in EmailJS dashboard');
        } else {
          throw new Error(`Failed to send message (${response.status})`);
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      showToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "bhanu100141@gmail.com";

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: contactEmail,
      link: `mailto:${contactEmail}`,
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 9392609951",
      link: "tel:+919392609951",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kadapa, AP, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/bhanu100141",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/bhanu-prasad-vepakayala-117152267",
    },
  ];

  return (
    <section id="contact" className={`py-12 md:py-16 relative overflow-hidden ml-0 lg:ml-20 px-4 md:px-0 transition-colors ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Let's Talk
          </motion.h2>
          <motion.p
            transition={{ delay: 0.1 }}
            className={`text-base ${theme === "dark" ? "text-white/60" : "text-gray-600"}`}
          >
            Got a project? Let's discuss and bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-2 md:space-y-4">
              {/* Mobile - Show only Email and Phone in compact format */}
              <div className="lg:hidden flex flex-col gap-3 mb-6">
                {contactMethods.filter(m => m.title === "Email" || m.title === "Phone").map((method, index) => {
                  const Icon = method.icon;
                  return method.link ? (
                    <a key={index} href={method.link} className="block">
                      <div className={`flex items-center gap-3 text-sm ${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      }`}>
                        <Icon className="text-base flex-shrink-0" />
                        <span>{method.value}</span>
                      </div>
                    </a>
                  ) : null;
                })}
              </div>

              {/* Desktop - Show all contact methods */}
              <div className="hidden lg:block space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all group ${
                        theme === "dark"
                          ? "hover:bg-white/5 border border-transparent hover:border-white/10"
                          : "hover:bg-gray-50 border border-transparent hover:border-gray-200"
                      }`}
                    >
                      <div className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${
                        theme === "dark"
                          ? "bg-white/10 group-hover:bg-white/20"
                          : "bg-black/5 group-hover:bg-black/10"
                      }`}>
                        <Icon className={`text-lg ${theme === "dark" ? "text-white" : "text-black"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${theme === "dark" ? "text-white/50" : "text-gray-500"}`}>
                          {method.title}
                        </p>
                        <p className={`font-medium truncate ${theme === "dark" ? "text-white" : "text-black"}`}>
                          {method.value}
                        </p>
                      </div>
                      <FaArrowRight className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`} />
                    </motion.div>
                  );

                  return method.link ? (
                    <a key={index} href={method.link}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="pt-2 hidden lg:block"
            >
              <h3 className={`text-lg font-bold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                        theme === "dark"
                          ? "bg-white/5 hover:bg-white/10 border border-white/10"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <Icon className={`text-lg ${theme === "dark" ? "text-white" : "text-black"}`} />
                      <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className={`p-6 rounded-2xl shadow-xl ${
              theme === "dark"
                ? "bg-white/5 backdrop-blur-sm border border-white/10"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h3 className={`text-xl font-bold mb-5 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${
                    theme === "dark" ? "text-white/70" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 transition-all outline-none ${
                    errors.name
                      ? theme === "dark"
                        ? "bg-red-500/10 border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20 text-white placeholder-white/30"
                        : "bg-red-50 border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20 text-black placeholder-gray-400"
                      : theme === "dark"
                        ? "bg-white/5 border border-white/10 focus:border-white focus:ring-white/20 text-white placeholder-white/30"
                        : "bg-white border border-gray-300 focus:border-black focus:ring-black/20 text-black placeholder-gray-400"
                  }`}
                  placeholder="Your name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${
                    theme === "dark" ? "text-white/70" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 transition-all outline-none ${
                    errors.email
                      ? theme === "dark"
                        ? "bg-red-500/10 border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20 text-white placeholder-white/30"
                        : "bg-red-50 border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20 text-black placeholder-gray-400"
                      : theme === "dark"
                        ? "bg-white/5 border border-white/10 focus:border-white focus:ring-white/20 text-white placeholder-white/30"
                        : "bg-white border border-gray-300 focus:border-black focus:ring-black/20 text-black placeholder-gray-400"
                  }`}
                  placeholder="your@email.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${
                    theme === "dark" ? "text-white/70" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 transition-all resize-none outline-none ${
                    errors.message
                      ? theme === "dark"
                        ? "bg-red-500/10 border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20 text-white placeholder-white/30"
                        : "bg-red-50 border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20 text-black placeholder-gray-400"
                      : theme === "dark"
                        ? "bg-white/5 border border-white/10 focus:border-white focus:ring-white/20 text-white placeholder-white/30"
                        : "bg-white border border-gray-300 focus:border-black focus:ring-black/20 text-black placeholder-gray-400"
                  }`}
                  placeholder="Your message..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-3.5 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className={`mt-16 text-center text-sm ${theme === "dark" ? "text-white/60" : "text-gray-600"}`}
        >
          <div className={`h-px w-24 mx-auto mb-4 ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
              : "bg-gradient-to-r from-transparent via-black/20 to-transparent"
          }`} />
          <p className="mb-1">Built with 💜 using Next.js & Framer Motion</p>
          <p>© 2024 Bhanuprasad Vepakayala</p>
        </motion.div>
      </div>

      {/* Sonner-style Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.15 } }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed bottom-8 right-8 z-50 max-w-md"
          >
            <div
              className={`flex items-start gap-3 px-4 py-3 rounded-lg shadow-lg border ${
                toast.type === 'error'
                  ? theme === "dark"
                    ? "bg-red-950 border-red-800 text-white"
                    : "bg-red-50 border-red-200 text-red-900"
                  : theme === "dark"
                    ? "bg-zinc-950 border-zinc-800 text-white"
                    : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === 'loading' ? (
                  <svg
                    className="w-5 h-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : toast.type === 'error' ? (
                  <svg
                    className="w-5 h-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Message */}
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  toast.type === 'error'
                    ? theme === "dark" ? "text-red-200" : "text-red-900"
                    : theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {toast.message}
                </p>
              </div>

              {/* Close button */}
              {(toast.type === 'success' || toast.type === 'error') && (
                <button
                  onClick={() => setToast(null)}
                  className={`flex-shrink-0 p-1 rounded hover:bg-opacity-10 transition-colors ${
                    theme === "dark" ? "hover:bg-white" : "hover:bg-black"
                  }`}
                >
                  <svg
                    className="w-4 h-4 opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
