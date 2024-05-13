import emailjs from 'emailjs-com';

export const SendEmail  = async (serviceId, templateID,userID,templateparams) => {
  try {
    const response = await emailjs.send(serviceId, templateID, templateparams, userID);
    console.log('Email successfully sent!', response);
    return response
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
}
