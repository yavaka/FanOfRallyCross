const details = "details";
const gallery = "gallery";
const video = "video";

$(document).ready(function () {
    document.getElementById("driver-details").style.display = "block";
    document.getElementById("details-btn").disabled = true;
});

function openDriversOverlay() {
    document.getElementById("drivers").style.height = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}

function closeDriversOverlay() {
    document.getElementById("drivers").style.height = "0%";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
}

function showDriverDetails() {
    hide(details);

    document.getElementById("details-btn").disabled = true;

    var driverDetails = document.getElementById("driver-details");

    if (driverDetails.style.display === "block") {
        driverDetails.style.display = "none";
    }
    else {
        driverDetails.style.display = "block";
    }
}

function showDriverGallery() {
    hide(gallery);

    document.getElementById("gallery-btn").disabled = true;

    var driverGallery = document.getElementById("driver-gallery");

    if (driverGallery.style.display === "block") {
        driverGallery.style.display = "none";
    }
    else {
        driverGallery.style.display = "block";
    }
}

function showDriverVideo() {
    hide(video);

    document.getElementById("video-btn").disabled = true;

    var driverVideo = document.getElementById("driver-video");

    if (driverVideo.style.display === "block") {
        driverVideo.style.display = "none";
    }
    else {
        driverVideo.style.display = "block";
    }
}

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

function hideDetails() {
    if (document.getElementById("details-btn").disabled === true) {
        document.getElementById("details-btn").disabled = false;
    }

    var driverDetails = document.getElementById("driver-details");

    if (driverDetails.style.display === "block") {
        driverDetails.style.display = "none";
    }
}

function hideGallery() {
    if (document.getElementById("gallery-btn").disabled === true) {
        document.getElementById("gallery-btn").disabled = false;
    }

    var driverGallery = document.getElementById("driver-gallery");

    if (driverGallery.style.display === "block") {
        driverGallery.style.display = "none";
    }
}

function hideVideo() {
    if (document.getElementById("video-btn").disabled === true) {
        document.getElementById("video-btn").disabled = false;
    }

    var driverVideo = document.getElementById("driver-video");

    if (driverVideo.style.display === "block") {
        driverVideo.style.display = "none";
    }
}

//Hide hamburger menu on click of an nav-item
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

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