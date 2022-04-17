import { google } from 'googleapis';

// This is an immediately invoked, anonymous, async function
// This just allows us to use 'await' in the function itself
(async () => {

  // Fill in your Google Sheet ID
  const SHEET_ID = ''

  // Authorize the Google APIs with the right scope
  // This will automatically authenticate using:
  // a) The Service Account from your Cloud Run instance
  // b) The key file at the path defined in the GOOGLE_APPLICATION_CREDENTIALS environment variable
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  // Use the authorization to set up an authenticated instance of the Sheets API
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    valueInputOption: 'USER_ENTERED',
    range: 'A1:A1',   // This is a required property, but it will always write on the first empty line
    requestBody: {
      values: [
        ['Hello', 'World!']
      ]
    }
  });

})();