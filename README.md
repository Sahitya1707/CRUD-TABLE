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
- Declare the file on you router.post like upload.single("img") and the name should be same as how you send the file from frontend. single is for single item.
  -we have to define a function to rename the files otherwise multer renames them to random stuff like that on purpose so when you upload image1.jpg and image1.jpg they both can exist on the server at the same time...

  - Multer will save your file without extension if you just send it directly so you have create a callback function and also declare a path to get the extension of a file. (Another way to get extension is to use MIME)

    - Let us break this code

      - const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, "uploads");
        },
        filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
        },
        });

        - So the disk Staorage has two functions and it defines how a file should be stored in a server.

          - Destination- Determines the directory where uploaded files will be stored. In this case, files will be stored in the "uploads" directory.

        - filename:

          - Defines the name of the uploaded file. The filename is generated using the current timestamp (Date.now()) concatenated with the original file extension obtained from path.extname(file.originalname).

        - What is cb in the above code?
          - The cb function in multer.diskStorage is used to signal the completion of the asynchronous operations involved in handling file storage and naming.Null has been passed indicating no error.
