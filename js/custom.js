$(".js-height-full").height($(window).height());
$(".js-height-parent").each(function () {
  $(this).height($(this).parent().first().height());
});

// Fun Facts
function count($this) {
  var current = parseInt($this.html(), 10);
  current = current + 1; /* Where 50 is increment */

  $this.html(++current);
  if (current > $this.data("count")) {
    $this.html($this.data("count"));
  } else {
    setTimeout(function () {
      count($this);
    }, 50);
  }
}

// original code starts
// $(".stat-timer").each(function() {
//     $(this).data('count', parseInt($(this).html(), 10));
//     $(this).html('0');
//     count($(this));
// });
// original code ends

// Country timer
$(".country-timer").each(function () {
  $(this).data("count", parseInt($(this).html(), 10));
  $(this).html("0");
  count($(this));
});

// City timer
$(".city-timer").each(function () {
  $(this).data("count", parseInt($(this).html(), 10));
  $(this).html("0");
  count($(this));
});

// School timer
$(".school-timer").each(function () {
  $(this).data("count", parseInt($(this).html(), 10));
  $(this).html("2700");
  count($(this));
});

// student timer
// $(".student-timer").each(function () {
//   $(this).data("count", parseInt($(this).html(), 10));
//   $(this).html("19700");
//   count($(this));
// });

$(".header").affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $(".yellow-band").outerHeight(true));
    },
  },
});

$(window).load(function () {
  $("#preloader").on(500).fadeOut();
  $(".preloader").on(600).fadeOut("slow");
});

// READ MORE FUNCTIONALITY

// HOST A REGIONAL BEHES ROUND

function regionalBehesReadMore() {
  let moreText = document.getElementById("regional-behes-round");
  let btnText = document.getElementById("regional-behes-round-read-more-button");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read less";
    moreText.style.display = "block";
  } else {
    btnText.innerHTML = "Read more";
	moreText.style.display = "none";
  }
}

// BECOME A SPONSOR

function becomeSponsorReadMore() {
	let moreText = document.getElementById("become-sponsor");
	let btnText = document.getElementById("become-sponsor-read-more-button");
  
	if (moreText.style.display === "none") {
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "block";
	} else {
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	}
  }

  
// VOLUNTEER WITH BEHES

function volunteerBehesReadMore() {
	let moreText = document.getElementById("volunteer-with-behes");
	let btnText = document.getElementById("volunteer-behes-read-more-button");
  
	if (moreText.style.display === "none") {
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "block";
	} else {
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	}
  }

  
// SPREAD THE WORD

function spreadTheWordReadMore() {
	let moreText = document.getElementById("spread-the-word");
	let btnText = document.getElementById("spread-the-word-read-more-button");
  
	if (moreText.style.display === "none") {
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "block";
	} else {
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	}
  }

  
// THIRD TESTIMONIAL (ANKON)

function ankonTestimonialReadMore() {
	let moreText = document.getElementById("ankon-testimonial-text");
	let btnText = document.getElementById("ankon-testimonial-read-more-button");
  
	if (moreText.style.display === "none") {
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "block";
	} else {
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	}
  }