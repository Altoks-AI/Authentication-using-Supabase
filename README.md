# Google Authentication using Supabase

1. Create a React / VITE app

```
npm create vite@latest 
cd FolderName
npm install
npm run dev
```

2. Copy Paste the Folders and Files inside the repository.

3. Login to Supabase and create a project

4. Go to Sign-in/Providers and enable Google OAuth

5. Go to Google Cloud Platform and create a project, Complete the OAuth Consent and create a Client Credential .

6. Find the endpoint URL in Supabase Google OAuth and paste in Redirect URL while creating Client Credentials.

7. After saving copy the google clientid and key and paste in Supabase

8. Go to Settings/Data API in Supabase and Find the Project URL and ANON Key and paste them in .env file.

9. Go to URL Configuration in Supabase and Add the Redirect URL of your app 

Example:
```
http://localhost:5173/dashboard
``` 

10. make sure to add the correct Redirect URL, When you push your app to production , make sure to change the Redirect URL to Frontend Server link in Supabase again.

