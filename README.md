# bbfullstack


Description

Welcome to my BadBank application. BankBank because it had no security.
Over the past couple weeks I have started adding security using Firebase authentication and authorization. 

This Badbank application was created to make people aware of the different types of securities you can implement
within your website. What could be weak / strong security. Do you even have security? 
How can the customer be protected.

What the application entails: 

- BadBank landing page.
- Create an account.
- Login.
- Deposit.
- Withdraw.
- Balance.
- Data of users that have been registered.

Dependencies:

- npm init.
- npm install cors.
- npm install express.
- npm install mongodb.
- npm install lowdb.
- npm i firebase.

Using Firebase:
- Create an account.
- Click on "Go to console", on the top right corner.
- Create a project.
- Enter your project name and create your project.
- Head over to Project overview and then select project settings.
- Add a web application but clicking on the blue </> button.
- Register you app and add your apps name.
- You will then be provided with you apps information (firbaseConfig)
<img width="300" height="300" alt="Screen Shot 2022-06-23 at 11 06 06" src="https://user-images.githubusercontent.com/84048634/175356907-95839b23-a8bc-4e86-ac30-019ad2c6baf3.png">
- If you go to project settings and scroll down the page you will be able to access your firebaseConfig information.
- When using Firebase you can login by using "firebase login" in your terminal.

Using authentication and authorization from Firebase:
- Click on the authentication tab.
- Click on "Set up sing-in method".
- Enable Email/Password.
- Enable google.

Backend authentication and authorization from Firebase:
- Project settings.
- Go into service accounts.
- Generate a new private key
- (If wanting to use a generated private key you will need to update your FirebaseConfig information as it changes when generating a key)
 
[NEVER SHARE YOUR PRIVATE KEY]

Installation Guidelines:

- Fork repository.
- Clone the forked repository and open in Github desktop. 
- Add your code.
- Commit and Push (Give an update description).

The database I have used is Atlas MongoDB and my website is deployed through Heroku.

License MIT License Copyright (c) 2020 John Williams Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
