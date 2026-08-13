// Email Service Configuration for Sourabh Patel Portfolio
export const emailConfig = {
  // Target recipient email address
  toEmail: "sourabhpatelamilki2005@gmail.com",

  // EmailJS Configuration
  // To connect EmailJS with your Gmail App Password:
  // 1. Create a free account at https://www.emailjs.com/
  // 2. Add Service -> Select Gmail -> Enter your email (sourabhpatelamilki2005@gmail.com) and App Password (tict clwy wqaf zpgk)
  // 3. Create a Email Template
  // 4. Copy your Service ID, Template ID, and Public Key below or in a .env file
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_default",
  },

  // Web3Forms Free Direct Gateway Key (Fallback)
  // Sends form submissions directly to sourabhpatelamilki2005@gmail.com with zero backend setup
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_KEY || "a1b2c3d4-e5f6-7890-abcd-1234567890ab"
};
