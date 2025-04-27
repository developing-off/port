document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('toggle');
    });
});

function montrerDetails(id) {
    var truc = document.getElementById(id);
    if (truc.style.display == "none") {
      truc.style.display = "block";
    } else {
      truc.style.display = "none";
    }
  }
