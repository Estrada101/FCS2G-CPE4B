const buttons = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

    // Add click event listeners to the buttons
    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute("href").substring(1);

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the target section
            const targetSection = document.getElementById(targetSectionId);
            targetSection.style.display = "block";
        });
    });