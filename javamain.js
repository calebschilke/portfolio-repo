document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".tab input[type='checkbox']");
    
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function() {
        const content = this.parentElement.querySelector(".experience-content");
        
        if (this.checked) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  });