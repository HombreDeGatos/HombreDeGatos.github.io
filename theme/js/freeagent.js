/*!
 * Start Bootstrap - Free Agent Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Show a different image every time the Page Loads
// @TODO include these in another file
var images = [
    {
        'url': 'aquileia.jpg',
        'desc': 'Basilica di Santa Maria Assunta, Aquileia, Italy',
        'date': 'June 8, 2013'
    },
    {
        'url': 'beinecke.jpg',
        'desc': 'Beinecke Library, Yale University',
        'date': 'March 24, 2013'
    },
    {
        'url': 'castle.jpg',
        'desc': 'Friuli-Venezia Giulia, Italy',
        'date': 'June 20, 2013'
    },
    {
        'url' : 'croatia.jpg',
        'desc' : 'Novalja, Croatia',
        'date': 'July 29, 2013'
    },
    {
        'url': 'dolomites.jpg',
        'desc': "Dolomiti, L'Italia",
        'date': 'June 20, 2013'
    },
    {
        'url': 'machu.jpg',
        'desc': 'Machu Picchu, Peru',
        'date': 'March 16, 2014'
    },
    {
        'url': 'piran.jpg',
        'desc': 'Piran, Slovenia',
        'date': 'June 15, 2013'
    },
    {
        'url': 'rainforest.jpg',
        'desc': 'Peruvian Rainforest',
        'date': 'March 18, 2013'
    },
    {
        'url': 'sandyhook.jpg',
        'desc': 'Sandy Hook, New Jersey',
        'date': 'May 10, 2013'
    },
    {
        'url': 'venice.jpg',
        'desc': 'Venice, Italy',
        'date': 'June 29, 2013'
    }
];

var idx = Math.floor(Math.random() * images.length);
var image = images[idx];
// I'm {age} years old!".supåplant({ age: 29 }));
image_url = "url('/images/headers/" + image.url + "')";
$("header").css({'background-image':image_url});
$("#desc").text(image.desc + ' - ' + image.date)

// $.getScript('./bg-images.js', function(data, textStatus, jqxhr) {
//     console.log(data)
//     console.log(data.image)
//     console.log(image)
// });

// $("header").css({'background-image':'url('})