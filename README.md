This CRUD (Create, Read, Update, Delete) application is a simple web-based tool that enables users to manage data through a user-friendly interface. The application is designed to run on a local server, allowing users to input, view, edit, and delete different data entries in a table format.

- CLIENT FOLDER CONTAINS THE FRONTEND CODE
- BACKEND FOLDER CONTAINS THE BACKEND CODE

- How the backend folder created
  - At first create the app.js which contains you main file like getting express, cors and all those stuffs.
  - Route folder for different routing.
  - Modal folder for making what kind of schema or the data should be passed.
  - .env for encrypting your password

How to use multer

- At first you have to install the multer dependecy.
- Then you have to declare it in you route file.
- you have to decare a path where your file should be posted.
- Declare the file on you router.post like upload.single("img") and the name should be same as how you send the file from frontend. single is for single item
