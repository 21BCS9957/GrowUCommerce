
function doPost(e) {
  try {
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Log received data for debugging
    console.log('Received data:', data);
    console.log('Monthly Revenue:', data.monthlyRevenue);
    console.log('Website URL:', data.websiteUrl);
    console.log('Budget:', data.budget);
    console.log('About Project:', data.aboutProject);
    
    // Your Google Spreadsheet ID (extracted from your URL)
    const SPREADSHEET_ID = '1l7Ych5VAMQeYiGIcfMMkDRSJ1ufvsS_lL4kz8g3eEts';
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Check if headers exist, if not add them
    const lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      // Add headers if sheet is empty
      sheet.getRange(1, 1, 1, 9).setValues([['Name', 'Email', 'Phone', 'Company', 'Monthly Revenue', 'Website/Social', 'Budget', 'About Project', 'Timestamp']]);
    }
    
    // Add the new row of data
    const newRow = [
      data.name,
      data.email, 
      data.phone,
      data.company,
      data.monthlyRevenue,
      data.websiteUrl,
      data.budget,
      data.aboutProject,
      data.timestamp
    ];
    
    sheet.appendRow(newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (optional, for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Contact form API is working' }))
    .setMimeType(ContentService.MimeType.JSON);
}