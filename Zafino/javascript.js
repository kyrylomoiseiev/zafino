/* document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.stopPropagation();

            const parent = this.parentElement;

            // Close any open dropdowns except the one being clicked
            document.querySelectorAll(".nav-item.open").forEach(openItem => {
                if (openItem !== parent) {
                    openItem.classList.remove("open");
                }
            });

            // Toggle current dropdown
            parent.classList.toggle("open");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".nav-item.open").forEach(openItem => {
            openItem.classList.remove("open");
        });
    });
}); */
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const parentNavItem = this.closest(".nav-item");
  
        // Close all other dropdowns
        document.querySelectorAll(".nav-item").forEach((item) => {
          if (item !== parentNavItem) {
            item.classList.remove("open");
          }
        });
  
        // Toggle this one
        parentNavItem.classList.toggle("open");
      });
    });
  
    // Close dropdown if clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-item")) {
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.classList.remove("open");
        });
      }
    });
  });

document.getElementById('phone-number').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters

    // Allow clearing the field
    if (value.length === 0) {
        e.target.value = "";
        return;
    }

    // Ensure +38 is always at the start but editable
    if (!value.startsWith("38")) {
        value = "38" + value;
    }

    // Remove leading "38" for formatting
    value = value.substring(2);

    let formatted = "+38 ";
    if (value.length > 0) formatted += "(" + value.substring(0, 3);
    if (value.length >= 4) formatted += ") " + value.substring(3, 6);
    if (value.length >= 7) formatted += "-" + value.substring(6, 10);

    e.target.value = formatted;
});

// Clear field on focus if it's empty to show placeholder
document.getElementById('phone-number').addEventListener('focus', function (e) {
    if (e.target.value === "") {
        e.target.placeholder = "+38 (___) _______";
    }
});