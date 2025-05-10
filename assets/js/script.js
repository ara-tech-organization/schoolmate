
// Responsive Navbar

document.addEventListener("DOMContentLoaded", ()=> {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", function() {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
});




// Tab Function

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        const tabId = button.getAttribute("data-tab");
        tabButtons.forEach(btn =>{
            btn.classList.remove("active");
        });

        tabContents.forEach(content =>{
            content.classList.remove("active");
        });

        button.classList.add("active");
        document.getElementById(tabId).classList.add("active");
        
    });
});



// FAQ Section

document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
        // Close any currently open FAQ
        document.querySelectorAll(".faq-item").forEach(faq => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        });
  
        // Toggle the clicked FAQ item
        item.classList.toggle("active");
    });
});

