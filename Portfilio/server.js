const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const port = 4000;

const app = express();

// Static serve
app.use(express.static(path.join(__dirname)));

// Form body parse
app.use(express.urlencoded({ extended: true }));

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  message: String,
});
const users = mongoose.model("users", userSchema);

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));  
});

// Save form data
app.post("/server", async (req, res) => {
  try {
    const user = new users({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message,
    });

    await user.save();
    console.log("✅ Saved User:", user);

    // SweetAlert Success Popup with Yellow-Black Button
    res.send(`
      <html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
          <style>
            .my-confirm-btn {
              background-color: #ecd348ff !important; 
              color: #000000 !important;            
              border: 2px solid #000000 !important;
              font-weight: bold;
            }
            .my-confirm-btn:hover {
              background-color: #000 !important; 
              color: #FFD700 !important;          
            }
          </style>
        </head>
        <body>
          <script>
            Swal.fire({
              icon: 'success',
              title: 'Success!',
            //   text: 'Form Submission Success ✅',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'my-confirm-btn'
              }
            }).then(() => {
              window.location.href = "/";
            });
          </script>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    // SweetAlert Error Popup with Yellow-Black Button
    res.send(`
      <html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
          <style>
            .my-confirm-btn {
              background-color: #FFD700 !important; /* Yellow */
              color: #000000 !important;            /* Black text */
              border: 2px solid #000000 !important;
              font-weight: bold;
            }
            .my-confirm-btn:hover {
              background-color: #000000 !important; /* Black on hover */
              color: #FFD700 !important;            /* Yellow text */
            }
          </style>
        </head>
        <body>
          <script>
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error saving data ❌',
              confirmButtonText: 'Try Again',
              customClass: {
                confirmButton: 'my-confirm-btn'
              }
            }).then(() => {
              window.location.href = "/";
            });
          </script>
        </body>
      </html>
    `);
  }
});


app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
