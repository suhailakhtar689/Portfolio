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
});

// Project data with detailed information
const projectData = {
  1: {
    title:
      "Kohler Elite Konnect – Website Recovery,  HTML Email & API Integration",
    image: "images/Screenshot-2025.png",
    description:
      "Resolved critical crash issues, restoring website uptime and performance. Created custom responsive HTML emailers for client communication and newsletters. Integrated third-party APIs to automate form submissions and lead capture. Optimized backend code for smoother performance and faster page loads. Supported marketing and sales teams by delivering fast fixes and automation.",
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
    image:
      "images/m-prime.webp",
    description:
      "Developed a brand-new App page from scratch as per client requirements. Fetched dynamic content from MySQL database using PHP to populate the new page. Implemented a modular code structure for reusability and maintainability. The new page is now part of the live Merino Prime App, improving user engagement and content visibility. Successfully met client expectations in both design and performance.",
    link: "https://play.google.com/store/apps/details?id=com.merino.merinoprime&pcampaignid=web_share",
  },
  5: {
    title: "Grow Mark a Modern Real Estate Solution",
    image:
      "images/screenshot-3.png",
    description:
"Grow Mark is a modern, dynamic real estate landing page developed to effectively showcase property listings and related services. The design focuses on responsiveness, ensuring smooth performance across all devices, and offers a secure login system for agents and clients. With a sleek layout and intuitive navigation, the platform enhances user experience for both buyers and sellers in the real estate market.",
    link: "#",
  },
  6: {
    title: "E-shoper Online Shopping Platform with Razorpay Integration",
    image:
      "images/screenshoot-4.png",
    description:
               "Developed a robust and dynamic e-commerce platform, eShoper, leveraging the power of Laravel, tailored for seamless online shopping experiences. The platform features a user-friendly interface, allowing customers to browse and purchase products effortlessly. Integrated Razorpay for secure payment processing, ensuring safe transactions. The design is fully responsive, providing an optimal shopping experience across all devices. eShoper is built with scalability in mind, ready to accommodate future growth and additional features.",
    link: "#",
  },
  7: {
    title: "Personal Financial Budget Analysis",
    image:
      "images/Screenshot-5.png",
    description:
      "Designed a comprehensive financial tracking tool to help individuals manage their income, expenses, and savings goals.Income & Expense Tracking: Log and categorize transactions with ease. Budget Planning: Set monthly or annual budgets and monitor progress.Spending Analysis: Generate detailed reports and visual graphs to analyze spending patterns across categories like groceries, utilities, and entertainment.",
    link: "#",
  },
  8: {
    title: "Hotel & Resort Website landing design & Services",
    image:
      "images/Screenshot-1.png",
    description:
"Crafted an elegant and user-friendly landing page for a luxury Hotel & Resort, ensuring a premium look and seamless browsing experience.Responsive Design: Optimized for flawless viewing on desktop, tablet, and mobile devices.Dynamic Services Section: Highlighted key offerings such as room categories, spa treatments, fine dining, and booking facilities.Visual Appeal: Used high-quality imagery and refined typography to reflect the brand’s upscale identity.",
    link: "#",
  },
  9: {
    title: "Dentist Website Landing Design",
    image:
      "images/screenshoot.png",
    description:
"Designed a modern, responsive, and user-friendly landing page tailored for dental clinics.Goal: Create a layout that conveys trust, professionalism, and a welcoming environment to attract new patients while offering convenience for existing ones.Responsive Design: Optimized for seamless browsing across desktop, tablet, and mobile devices.Visual Focus: Clean, calm color palette and high-quality imagery to enhance credibility and comfort.",
    link: "#",
  },
  10: {
    title: "Tour & Travel Website Landing Design & Services",
    image:
      "images/Screenshot-2.png",
    description:
"Designed an engaging, user-focused landing page for a tour and travel agency, crafted to inspire wanderlust while simplifying trip planning.Goal: Combine aesthetic appeal with functional design to attract travelers and increase conversions.Responsive Design: Optimized for seamless browsing on desktop, tablet, and mobile devices.Key Highlights: High-quality travel imagery, interactive trip options, and clear booking CTAs.",
    link: "#",
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



  //  dark and light mode toggle

//   let themeBtn = document.querySelector("#theme-btn");

// themeBtn.onclick = () => {
//   document.body.classList.toggle("dark-mode");

//   // Change icon sun/moon
//   if (document.body.classList.contains("dark-mode")) {
//     themeBtn.classList.remove("fa-moon");
//     themeBtn.classList.add("fa-sun");
//   } else {
//     themeBtn.classList.remove("fa-sun");
//     themeBtn.classList.add("fa-moon");
//   }

//   // Save mode in localStorage
//   localStorage.setItem(
//     "theme",
//     document.body.classList.contains("dark-mode") ? "dark" : "light"
//   );
// };

// // On page load, check saved theme
// window.onload = () => {
//   if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark-mode");
//     themeBtn.classList.remove("fa-moon");
//     themeBtn.classList.add("fa-sun");
//   }
// };


// dark and light mode 
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
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
            easing: 'ease-out-cubic'
        });

        // Download button click handler
        document.getElementById('downloadBtn').addEventListener('click', function(e) {
            // Let the browser handle the download naturally
            showMessage('Resume download started! 📄', 'success');
            
            // Optional: Track download event
            console.log('Resume download initiated');
            
            // Optional: Google Analytics tracking
            // gtag('event', 'download', {
            //     'event_category': 'resume',
            //     'event_label': 'pdf_download'
            // });
        });

        // Preview button click handler
        document.getElementById('previewBtn').addEventListener('click', function(e) {
            showMessage('Opening resume preview... 👀', 'success');
        });

        // Function to show status messages
        function showMessage(message, type) {
            const statusDiv = document.getElementById('statusMessage');
            statusDiv.innerHTML = message;
            statusDiv.className = `status-message ${type}`;
            statusDiv.style.display = 'block';
            
            // Hide message after 3 seconds
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 3000);
        }

        // Optional: Check if file exists (for debugging)
        function checkFileExists() {
            fetch('images/resume.pdf', { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        console.log('✅ Resume file found');
                    } else {
                        console.log('❌ Resume file not found');
                        showMessage('Resume file not found! Please check the path.', 'error');
                    }
                })
                .catch(error => {
                    console.log('⚠️ Could not verify file:', error);
                });
        }


        // Enhanced download with fallback
        function enhancedDownload() {
            const link = document.createElement('a');
            link.href = 'images/Suhail_Resume_Web_Dev.docx';
            link.download = 'My_Resume.pdf';
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showMessage('Download started! 🚀', 'success');
        }

        // Alternative method if needed
        function forceDownload() {
            fetch('images/resume.pdf')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('File not found');
                    }
                    return response.blob();
                })
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Resume.pdf';
                    link.click();
                    window.URL.revokeObjectURL(url);
                    showMessage('Resume downloaded successfully! ✅', 'success');
                })
                .catch(error => {
                    console.error('Download failed:', error);
                    showMessage('Download failed! Please try again.', 'error');
                });
        }

