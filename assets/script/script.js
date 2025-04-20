// Wait until the page content is fully loaded
window.addEventListener("load", function() {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
  
    // Show the main content
    document.querySelector(".content").style.display = "block";
  });

// Toggle sidebar expansion on hover or click
const sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.add('expanded');
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('expanded');
});

//Home_Services_Cards
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const text1 = document.querySelector('.card1Text');
const text2 = document.querySelector('.card2Text');
const text3 = document.querySelector('.card3Text');
const text4 = document.querySelector('.card4Text');
const link1 = document.querySelector('.card1Link');
const link2 = document.querySelector('.card2Link');
const link3 = document.querySelector('.card3Link');
const link4 = document.querySelector('.card4Link');

card1.addEventListener('mouse')