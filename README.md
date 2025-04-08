# WebTechCoursework - Book Review Application

# About the App

The Book Review Application allows users to create a book review with specific details such as title, author, genre, and many more; update the reviews to add newly founded insights or to refine the ratings; and delete reviews they no longer wish to share with others.


# Running the Application Locally

Step 1: Clone the Repository

To clone the repository to your local machine, you will need to have Git installed. Opening Git, go to the directory where you want to clone the repository. If, let's say, you want to clone it to your desktop:

1. On macOS/Linux:
    cd ~/Desktop

2. On Windows:
    cd C:\Users\YourUsername\Desktop

Then, from there, run the following command which will create a folder named WebTechCoursework on your desktop:
git clone https://github.com/00015605/WebTechCoursework

Now, you have the project locally.

Step 2: Install Dependencies

On Visual Studio Code, open terminal and start typing:

1. npm init -y
2. npm i express express-validator pug body-parser nodemon

Once done, go to package.json and write exactly like that under scripts and right below test:
"start": "nodemon app.js"

You can now run the application through typing: npm start


# Application Dependencies List

The application makes use of the following dependencies:

express: web framework for Node.js.
body-parser: middleware to parse incoming request bodies used for handling POST requests.
express-validator: middleware for validating and sanitizing request data.
pug: template engine to render HTML dynamically.
nodemon: a development tool that automatically restarts app when files change.


# Links to Github Repository & Hosted Application

GitHub Public Repository Link: https://github.com/00015605/WebTechCoursework
Render Hosted Application Link: 