let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

window.onscroll = () => {
  if (window.innerWidth < 991) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }

  document.querySelectorAll("section").forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll(".header .navbar a").forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// progress baar

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".bar").forEach(function (bar) {
    let percentText = bar.querySelector(".percent").innerText.replace("%", "");
    let fill = bar.querySelector(".progress-fill");
    fill.style.width = percentText + "%";
  });

  // Contact Form Handler with Professional SweetAlert
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const number = document.querySelector('input[name="number"]').value;
      const message = document.querySelector('textarea[name="message"]').value;

      // Show sending message
      Swal.fire({
        title: "⏳ Sending Your Message...",
        html: '<p style="font-size: 18px; color: #666;">Please wait while we process your message</p>',
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        width: "500px",
        didOpen: () => {
          Swal.showLoading();
          const title = document.querySelector(".swal2-title");
          title.style.fontSize = "26px";
          title.style.color = "#000";
        },
      });

      // Simulate sending (remove or replace with actual backend call)
      setTimeout(() => {
        // Reset form after successful submission
        contactForm.reset();
        
        Swal.fire({
          title: "✅ Message Sent Successfully!",
          html: '<p style="font-size: 18px; color: #666; margin: 20px 0;">Thank you for reaching out! I will get back to you as soon as possible.</p>',
          icon: "success",
          confirmButtonColor: "#ffcc0d",
          confirmButtonText: "Great!",
          width: "500px",
          didOpen: () => {
            const title = document.querySelector(".swal2-title");
            title.style.fontSize = "26px";
            title.style.fontWeight = "700";
            title.style.color = "#000";
            
            const confirmBtn = document.querySelector(".swal2-confirm");
            confirmBtn.style.fontSize = "16px";
            confirmBtn.style.padding = "12px 32px";
            confirmBtn.style.fontWeight = "600";
            confirmBtn.style.borderRadius = "6px";
            confirmBtn.style.color = "#000";
          },
        });
      }, 2000);
    });
  }
});

// Project data with detailed information
const projectData = {
  1: {
    title:
      "Kohler Elite Konnect – Website Recovery,  HTML Email & API Integration",
    image: "images/Screenshot-2025.png",
    description:
      "Developed a points-based loyalty and redemption platform for the Kohler Gracious living Club (KGLC). This project involved a complete website recovery and strategic integration of an API to manage the core functionalities of the program: member points, rewards, and the redemption process. I also created a series of automated HTML emailers to keep users informed about their point balances and new offers. The final product was a seamless, secure, and fully automated digital solution that enhanced user engagement and drove customer loyalty.",
    link: "https://kohlerelitekonnect.com",
  },
  2: {
    title: "Merino Emeraldz – UI Enhancements & Website Maintenance",
    image: "images/Screenshot-6.png",
    description:
      "Implemented UI/UX improvements across multiple pages for better responsiveness and visual appeal. Handled website maintenance tasks, including resolving bugs and layout issues. Ensured consistent branding and seamless user navigation across desktop and mobile views. Worked closely with the design team to transform Figma layouts into functional front-end code. Maintained code cleanliness and optimized site speed for a smooth user experience.",
    link: "https://merinoemeraldz.com",
  },
  3: {
    title: "Captain Steel – New UI Design & Backoffice Development",
    image: "images/captain.png",
    description:
      "Built and improved the admin control panel for managing page content, sections, and dynamic data. Delivered a modern, professional UI aligned with Captain Steel's branding. Streamlined internal management with a custom backoffice solution. Enabled seamless real-time data updates through API integration. Integrated RESTful APIs to sync backend data with the website and admin panel. Worked on secure and efficient data handling between the database and front-facing interfaces.",
    link: "https://captainsteel.vritto.com/CSRHS6BP/page/",
  },
  4: {
    title: "Merino eMERaldz Prime Dynamic Application Page",
    image: "images/m-prime.webp",
    description:
      "Developed a brand-new App page from scratch as per client requirements. Fetched dynamic content from MySQL database using PHP to populate the new page. Implemented a modular code structure for reusability and maintainability. The new page is now part of the live Merino Prime App, improving user engagement and content visibility. Successfully met client expectations in both design and performance.",
    link: "https://play.google.com/store/apps/details?id=com.merino.merinoprime&pcampaignid=web_share",
  },
  5: {
    title: "Grow Mark a Modern Real Estate Solution",
    image: "images/screenshot-3.png",
    description:
      "Grow Mark is a modern, dynamic real estate landing page developed to effectively showcase property listings and related services. The design focuses on responsiveness, ensuring smooth performance across all devices, and offers a secure login system for agents and clients. With a sleek layout and intuitive navigation, the platform enhances user experience for both buyers and sellers in the real estate market.",
    link: "#",
  },
  6: {
    title: "E-shoper Online Shopping Platform with Razorpay Integration",
    image: "images/screenshoot-4.png",
    description:
      "Developed a robust and dynamic e-commerce platform, eShoper, leveraging the power of Laravel, tailored for seamless online shopping experiences. The platform features a user-friendly interface, allowing customers to browse and purchase products effortlessly. Integrated Razorpay for secure payment processing, ensuring safe transactions. The design is fully responsive, providing an optimal shopping experience across all devices. eShoper is built with scalability in mind, ready to accommodate future growth and additional features.",
    link: "#",
  },
  7: {
    title: "Personal Financial Budget Analysis",
    image: "images/Screenshot-5.png",
    description:
      "Designed a comprehensive financial tracking tool to help individuals manage their income, expenses, and savings goals.Income & Expense Tracking: Log and categorize transactions with ease. Budget Planning: Set monthly or annual budgets and monitor progress.Spending Analysis: Generate detailed reports and visual graphs to analyze spending patterns across categories like groceries, utilities, and entertainment.",
    link: "#",
  },
  8: {
    title: "Hotel & Resort Website landing design & Services",
    image: "images/Screenshot-1.png",
    description:
      "Crafted an elegant and user-friendly landing page for a luxury Hotel & Resort, ensuring a premium look and seamless browsing experience.Responsive Design: Optimized for flawless viewing on desktop, tablet, and mobile devices.Dynamic Services Section: Highlighted key offerings such as room categories, spa treatments, fine dining, and booking facilities.Visual Appeal: Used high-quality imagery and refined typography to reflect the brand’s upscale identity.",
    link: "#",
  },
  9: {
    title: "Dentist Website Landing Design",
    image: "images/screenshoot.png",
    description:
      "Designed a modern, responsive, and user-friendly landing page tailored for dental clinics.Goal: Create a layout that conveys trust, professionalism, and a welcoming environment to attract new patients while offering convenience for existing ones.Responsive Design: Optimized for seamless browsing across desktop, tablet, and mobile devices.Visual Focus: Clean, calm color palette and high-quality imagery to enhance credibility and comfort.",
    link: "#",
  },
  10: {
    title: "Tour & Travel Website Landing Design & Services",
    image: "images/Screenshot-2.png",
    description:
      "Designed an engaging, user-focused landing page for a tour and travel agency, crafted to inspire wanderlust while simplifying trip planning.Goal: Combine aesthetic appeal with functional design to attract travelers and increase conversions.Responsive Design: Optimized for seamless browsing on desktop, tablet, and mobile devices.Key Highlights: High-quality travel imagery, interactive trip options, and clear booking CTAs.",
    link: "#",
  },
  11: {
    title: "Ship & Loaves – Loyalty Program",
    image: "images/Screenshot-2.png",
    description:
      "Developed a comprehensive loyalty program for Ship & Loaves, aimed at enhancing customer retention and engagement. Key Features: Points-based rewards system, personalized offers, and seamless integration with existing platforms. User Experience: Designed intuitive interfaces for both customers and administrators, ensuring ease of use and accessibility.Automated points tracking & redemption system.Real-time calculation of points based on bill amount and time slot.Admin dashboard for managing offers, tracking customers, and generating reports.Integrated email/SMS notifications for registration, earned points, and redemption.",
    link: "https://sipandloaves.vritto.com/SALC85TD/controlpanel/",
  },
  12: {
    title: "Baba Pota – Loyalty Program",
    image: "https://suhail-portfolio-site.vercel.app/images/baba_pota.jpg",
    description:
      "Onboarding Registration Link for new customers with instant bonus points on signup. Points Allocation System based on bill value and time slots (Normal Hours & Happy Hours). Redemption Rules allowing customers to redeem points on eligible bills.Integrated email/SMS notifications for registration, earned points, and redemption. Admin Dashboard for managing offers, tracking customer activity, and generating reports.",
    link: "http://babapota.vritto.com/BP3HVOGY/controlpanel",
  },
  13: {
    title: "Sandoz – Loyalty Program",
    image: "https://suhail-portfolio-site.vercel.app/images/sandoz.jpg",
    description:
      "Built a loyalty management system for Sandoz to increase customer retention and engagement. The program was customized to client requirements, offering seamless onboarding, reward points allocation, and redemption processes. Key Features: User-friendly registration process with instant bonus points.Points allocation based on bill amounts and specific time slots.Redemption options for eligible bills.Admin dashboard for managing offers, tracking customer activity, and generating reports.Email/SMS notifications for user actions.",
    link: "https://sandoz.vritto.com/SRUFAV9D/controlpanel/",
  },
  14: {
    title: "Kohler Gracious living Club – A Complete Loyalty Program Solution",
    image: "images/kglc_pic.png",
    description:
      "Developed and rebuilt a comprehensive loyalty program website for the Kohler Gracious living Club. This project involved transitioning the existing website to a robust CMS-based platform for seamless content management. To power the core loyalty functionalities—such as user points and rewards—we successfully integrated a powerful API. Additionally, we designed and developed attractive, customized HTML email templates to keep users informed and engaged. The project successfully delivered a fully functional and manageable digital solution that enhanced user engagement and brand loyalty.",
    link: "https://sa.kohlergraciouslivingclub.com/KGSA5MF1/page/",
  },

   15: {
    title: "GlobalAssets HomePage",
    image: "images/homepage.png",
    description:
        "The Global Assiste homepage features a modern, clean, and user-friendly design that highlights the brand’s services and values. With clear navigation, an engaging hero section, and strong call-to-action elements, the layout ensures a smooth user experience and works seamlessly across desktop, tablet, and mobile devices.",
    link: "https://global-assist-homepage-eor5.vercel.app/",
  },
};

function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const project = projectData[projectId];

  if (project) {
    // Populate modal content
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalDescription").textContent =
      project.description;
    //   project link
    document.getElementById("modalLink").href = project.link;

    // Show modal
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside content
document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Prevent modal close when clicking inside modal content
document
  .querySelector(".modal-content")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

// dark and light mode
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Default to dark theme on first visit, otherwise respect saved choice
const savedTheme = localStorage.getItem("theme");

if (savedTheme !== "light") {
  body.classList.add("dark-mode");
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Light mode icon
} else {
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Dark mode icon
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to light
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Switch to dark
    localStorage.setItem("theme", "light");
  }
});

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-out-cubic",
});

// Download button click handler
const downloadBtn = document.getElementById("downloadBtn");
const previewBtn = document.getElementById("previewBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
  // Let the browser handle the download naturally
  showMessage("Resume download started! 📄", "success");

  // Optional: Track download event
  console.log("Resume download initiated");
  });
}

// Preview button click handler
if (previewBtn) {
  previewBtn.addEventListener("click", function (e) {
  showMessage("Opening resume preview... 👀", "success");
  });
}

// Function to show status messages
function showMessage(message, type) {
  const statusDiv = document.getElementById("statusMessage");
  statusDiv.innerHTML = message;
  statusDiv.className = `status-message ${type}`;
  statusDiv.style.display = "block";

  // Hide message after 3 seconds
  setTimeout(() => {
    statusDiv.style.display = "none";
  }, 3000);
}

// Optional: Check if file exists (for debugging)
function checkFileExists() {
  fetch("images/Suhail_Resume.pdf", { method: "HEAD" })
    .then((response) => {
      if (response.ok) {
        console.log("✅ Resume file found");
      } else {
        console.log("❌ Resume file not found");
        showMessage("Resume file not found! Please check the path.", "error");
      }
    })
    .catch((error) => {
      console.log("⚠️ Could not verify file:", error);
    });
}

// Enhanced download with fallback
function enhancedDownload() {
  const link = document.createElement("a");
  link.href = "images/Suhail_Resume.pdf";
  link.download = "Suhail_Resume.pdf";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showMessage("Download started! 🚀", "success");
}

// Alternative method if needed
function forceDownload() {
  fetch("images/Suhail_Resume.pdf")
    .then((response) => {
      if (!response.ok) {
        throw new Error("File not found");
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Suhail_Resume.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
      showMessage("Resume downloaded successfully! ✅", "success");
    })
    .catch((error) => {
      console.error("Download failed:", error);
      showMessage("Download failed! Please try again.", "error");
    });
}



if (typeof window === "undefined") {
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML + CSS
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', 
  database: process.env.DB_NAME || 'portfolio-php'
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// POST route for form submission
app.post('/contact', (req, res) => {

  const { name, email, number, message } = req.body;

  const query = `
    INSERT INTO messages (name, email, number, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, email, number, message], (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database Error"
      });
    }

    res.json({
      success: true,
      message: "Message Sent Successfully!"
    });

  });

});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
}


















