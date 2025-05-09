function fadeInSkills() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".tech-skills-icon").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 4000);
      }
    });
  });
}

function introButtonNavigationClick() {
  // make this more general-purpose eventually
  const buttonHash = {
    // ".projects-button": "#projects",
    // ".experiences-button": "#experience-and-education",
    ".references-button": "#references",
    ".contact-button": "#contact-me",
  };

  for (let key in buttonHash) {
    $(key).click(function () {
      let aTag = $(buttonHash[key]);
      // headerPadding value chosen because it seemed to look best
      let headerPadding = 18;
      $("html,body").animate(
        { scrollTop: aTag.offset().top + headerPadding },
        "slow"
      );
    });
  }
}

function menuNavigation() {
  const menuHash = {
    Home: "#intro",
    "My Story": "#about-me",
    Skills: "#skills",
    Projects: "#projects",
    "Experience & Education": "#experience-and-education",
    References: "#references",
    Contact: "#contact-me"
  };

  $(".menu-options ul li").on("click", function (e) {
    e.preventDefault();
    let navigateTo = $(e.currentTarget).text();
    let aTag = $(menuHash[navigateTo]);
    let headerPadding = 18;
    if (navigateTo === "Home") {
      // if navigating home, provide no padding-top
      $("html,body").animate({ scrollTop: 0 }, "slow");
    } else {
      $("html,body").animate(
        { scrollTop: aTag.offset().top + headerPadding },
        "slow"
      );
    }
  });
}

// TODO: create func where if menu is open, and click is outside menu, close menu

function openMenu() {
  $(".hamburger-menu").click(function () {
    if ($(".menu-options").is(":hidden")) {
      $(".menu-options").slideDown();
    } else {
      $(".menu-options").slideUp();
    }
  });
}

// font-color of 'My Story' section header is originally white
// change to black on scroll so it's visible against white sticky heading
function changeMyStoryColor() {
  $(window).on("scroll", function () {
    var aboutMeHeaderPosition = $("#about-me").offset().top;
    if ($(window).scrollTop() > aboutMeHeaderPosition) {
      $("#about-me h2").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#about-me h2").removeClass("active");
    }
  });
}

function changeReferencesColor() {
  $(window).on("scroll", function () {
    let referencesHeaderPosition = $("#references").offset().top;
    if ($(window).scrollTop() > referencesHeaderPosition) {
      $("#references h2").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#references h2").removeClass("active");
    }
  });
}

$(document).ready(function () {
  // fadeInSkills();
  introButtonNavigationClick();
  // menuNavigation();
  // openMenu();
  // changeMyStoryColor();
  // changeReferencesColor();
});
