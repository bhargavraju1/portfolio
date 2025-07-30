const ContactMessage = require('../models/contactMessage');

const submitContactForm = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, subject, message } = req.body.formData;


    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { submitContactForm };
