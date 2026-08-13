// Email Service Configuration for Sourabh Patel Portfolio
export const emailConfig = {
  // Target recipient email address
  toEmail: import.meta.env.VITE_GMAIL_USER || "sourabhpatelamilki2005@gmail.com",

  // Gmail App Password
  gmailAppPassword: import.meta.env.VITE_GMAIL_APP_PASSWORD || "tictclwywqafzpgk",

  // EmailJS Configuration
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gmail",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_portfolio",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "user_public_key",
  },

  // Web3Forms Gateway Key
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_KEY || ""
};

