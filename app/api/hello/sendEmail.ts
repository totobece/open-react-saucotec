import { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Create a transporter using your email provider's settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tobias.bec1704@gmail.com',
        pass: 'newdata2048',
      },
    });
    
    // Set up email data
    const mailOptions = {
      from: 'tobias.bec1704@gmail.com',
      to: 'savaltobias5@gmail.com',
      subject: 'PRESUPUESTOS',
      text: `hola`,
    };
    
    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
