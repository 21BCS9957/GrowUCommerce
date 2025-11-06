// Vercel Serverless Function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, monthlyRevenue, websiteUrl } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !company || !monthlyRevenue || !websiteUrl) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Extract spreadsheet ID from your URL
    const SPREADSHEET_ID = '1l7Ych5VAMQeYiGIcfMMkDRSJ1ufvsS_lL4kz8g3eEts';
    
    // Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyTF4jLco2k4nNXZEwLvyKNqhVulP23JohPu_zbNT1VLVm0z-mpE0-c5pTjCYuVkVeiQQ/exec';

    // Prepare data to send
    const formData = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      monthlyRevenue: monthlyRevenue,
      websiteUrl: websiteUrl,
      timestamp: new Date().toISOString()
    };

    // Log the submission for debugging
    console.log('Submitting form data to Google Sheets:', formData);
    console.log('Monthly Revenue:', monthlyRevenue);
    console.log('Website URL:', websiteUrl);

    // Submit to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form submitted successfully to Google Sheets:', formData);
      return res.status(200).json({ 
        success: true, 
        message: 'Form submitted successfully' 
      });
    } else {
      throw new Error(`Google Script responded with status: ${response.status}`);
    }

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
} 