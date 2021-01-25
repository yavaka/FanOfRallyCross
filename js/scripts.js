const details = "details";
const gallery = "gallery";
const video = "video";

// After one of the drivers page is loaded, 
// the details button is disabled and the details sub-page is loaded.
$(document).ready(function () {
    document.getElementById("driver-details").style.display = "block";
    document.getElementById("details-btn").disabled = true;
});

// Open drivers overlay
function openDriversOverlay() {
    document.getElementById("drivers").style.height = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}

// Close drivers overlay
function closeDriversOverlay() {
    document.getElementById("drivers").style.height = "0%";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
}

// Show driver details
function showDriverDetails() {
    // invoke hide function and pass details constant
    hide(details);

    // disable the details btn 
    document.getElementById("details-btn").disabled = true;

    // get drivers details sub-page
    var driverDetails = document.getElementById("driver-details");

    // check is the sub-page loaded, if true hide it, if false load it
    if (driverDetails.style.display === "block") {
        driverDetails.style.display = "none";
    }
    else {
        driverDetails.style.display = "block";
    }
}

// Show driver gallery
function showDriverGallery() {
    // invoke hide function and pass gallery constant
    hide(gallery);

    // disable the gallery btn 
    document.getElementById("gallery-btn").disabled = true;

    // get drivers gallery sub-page
    var driverGallery = document.getElementById("driver-gallery");

    // check is the sub-page loaded, if true hide it, if false load it
    if (driverGallery.style.display === "block") {
        driverGallery.style.display = "none";
    }
    else {
        driverGallery.style.display = "block";
    }
}

// Show driver video
function showDriverVideo() {
    // invoke hide function and pass video constant
    hide(video);

    // disable the video btn 
    document.getElementById("video-btn").disabled = true;

    // get drivers video sub-page
    var driverVideo = document.getElementById("driver-video");

    // check is the sub-page loaded, if true hide it, if false load it
    if (driverVideo.style.display === "block") {
        driverVideo.style.display = "none";
    }
    else {
        driverVideo.style.display = "block";
    }
}

// If the parameter is details will hide gallery and video sub-pages, etc for the rest
function hide(current) {
    switch (current) {
        case details:
            hideGallery();
            hideVideo();
            break;

        case gallery:
            hideDetails();
            hideVideo();
            break;

        case video:
            hideDetails();
            hideGallery();
            break;
    }
}

// Hide details sub-page
function hideDetails() {
    // remove disabled attribute of the btn
    if (document.getElementById("details-btn").disabled === true) {
        document.getElementById("details-btn").disabled = false;
    }

    // get drivers details sub-page
    var driverDetails = document.getElementById("driver-details");

    // hide the sub-page if it is rendered
    if (driverDetails.style.display === "block") {
        driverDetails.style.display = "none";
    }
}

// Hide gallery sub-page
function hideGallery() {
    // remove disabled attribute of the btn
    if (document.getElementById("gallery-btn").disabled === true) {
        document.getElementById("gallery-btn").disabled = false;
    }

    // get drivers gallery sub-page
    var driverGallery = document.getElementById("driver-gallery");

    // hide the sub-page if it is rendered
    if (driverGallery.style.display === "block") {
        driverGallery.style.display = "none";
    }
}

// Hide video sub-page
function hideVideo() {
    // remove disabled attribute of the btn
    if (document.getElementById("video-btn").disabled === true) {
        document.getElementById("video-btn").disabled = false;
    }

    // get drivers video sub-page
    var driverVideo = document.getElementById("driver-video");

    // hide the sub-page if it is rendered
    if (driverVideo.style.display === "block") {
        driverVideo.style.display = "none";
    }
}

//Hide hamburger menu on click of an nav-item
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Validation of the contact form
function validateForm() {
    var fullName = document.forms["contact-form"]["full-name"].value;
    var subject = document.forms["contact-form"]["subject"].value;
    if (fullName == "") {
        alert("Name cannot be empty!");
        return false;
    }
    if (subject == "") {
        alert("Subject cannot be empty!");
        return false;
    }
}