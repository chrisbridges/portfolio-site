function typed () {
  const options = {
  strings: ['programmer', 'leader', 'musician', 'marketer', 'mentor', 'analyst', 'problem solver'],
  typeSpeed: 50,
  showCursor: true,
  backDelay: 1000,
  smartBackspace: false
}
  const typed = new Typed("#i-am-a-list", options);
}

function fadeInSkills () {
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    /* Check the location of each desired element */
    $('.tech-skills-icon').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity':'1'},4000);  
      }
    }); 
  });
}

function scrollToSkills () {
  $('.scroll-down-chevron').click(function(){
    var aTag = $("#skills");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  });
}

let experiences = [
  'Agriculture',
  'music composition',
  'statistical analysis',
  'Monte Carlo simulations',
  'scientific research',
  'Personal tutoring',
  'Public speaking',
  'Media buying',
  'Content Creation',
  'Paid Search Advertising',
  'Film production',
  'mentorship',
  'International Advertising',
  'Group instruction',
  'Individual Selling',
  'Marketing',
  'App Installment Campaigns',
  'Social Media Advertising',
  'Web Development',
  'Project Management',
  'QA Testing',
  'Excel',
  'Customer Service',
  'Information Technology',
  'Copy Writing',
  'Campaign Budgeting',
  'Product Launches',
  'Documentation Writing',
  'Business Strategy',
  'Entrepreneurship',
  'A/B Testing',
  'Event Planning',
  'Creative Writing',
  'Design',
  'Operations',
  'Growth Hacking',
  'Game Theory',
  'sales'];

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {

  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function appendExperiencesOnScroll () {
  const shuffledBills = shuffle(experiences);

  for (let i = 0; i < shuffledBills.length; i++) {
    $('.experience-in-list').append(`<li class="experience-in-list-item">${shuffledBills[i].toLowerCase()}<span class="bullet">&bull;</span></li>`);
  }
}

function openMenu () {
  $('.hamburger-menu').click(function () {
    if ($('.menu-options').is(':hidden')) {
      $('.menu-options').slideDown();
    } else {
      $('.menu-options').slideUp();
    }
  });
}

$(document).ready(function () {
  // typed();
  fadeInSkills();
  scrollToSkills();
  appendExperiencesOnScroll();
  openMenu();
});