# Campus Companion 

## Overview
- Campus Companion is an application developed using **React Native (Expo + TypeScript)** that assists freshmen of the **College of Science & Technology (CST)** in easily accessing key information about the campus. The app includes the following features:

**Home Screen** containing the navigation buttons for each page.
- **Contacts Screen** – list of significant contacts (Dean’s Office, IT, Library, and so forth) with clickable options for calling or email.
- **Contact Details Screen** – detailed contact information with clickable links for making calls and sending emails.
- **Weekly Schedule** – schedule of classes from Monday through Friday.
- **Noticeboard** – announcements of the college in responsive font size.
- **Campus Map** – significant locations in the campus (Academic Block, Library, Cafeteria, and so forth).

- Its uses navigation base on stack and bottomtabs.

## Steps to Install and Run
#### Prerequisites
- Node.js 
- Expo Go

1. Clone the repository
- git clone https://github.com/choden12/Assignment1_SWE.git

2. Install dependencies
- npm install

3. Start the expo development 
- npx expo start 

4. Run on a device 
- Scan the QR code with Expo GO 
- The app will load and run automatically.

## Known Issues and limitation
- Offline support – At present, the app uses all information obtained from local arrays. Neither offline cache nor an API call has been made.

- Platform-based styling – While Platform.select contactItem works fine, there have been instances where shadow elevation does not work perfectly on very old Android phones (API < 21).

- Orientation management – The Home screen is designed for orientation management, while other screens continue in the vertical scroll position. Support for orientation management may be introduced in future updates.

## Deployment
- This project is deployed in github https://github.com/choden12/Assignment1_SWE.git

