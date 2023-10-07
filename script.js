/* ---------------------- codigo completo de translate ---------------------- */

function toggleDiv() {
    var div = document.getElementById("google_translate_element");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";

        navbar.style.display = 'none';
    } else {
        div.style.display = "none";


        navbar.style.display = 'block';
        location.reload();
        desaparecerYReaparecer();
    }
}

/* ----------------------------------Start video --------------------------------- */

function videoUrl(hmmmmmm) {
    document.getElementById("slider").src = hmmmmmm;
}


const videoPlayer = document.getElementById('videoPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const muteUnmuteButton = document.getElementById('muteUnmuteButton');

function toggleVideo(videoSource) {
    videoPlayer.src = videoSource;
    videoPlayer.load();
    videoPlayer.play();

    const thumbnail = document.querySelector('.videos .navigation img');
    thumbnail.src = thumbnailSource;
}

function playPauseVideo() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
}

function muteUnmuteVideo() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteUnmuteButton.textContent = 'Mute';
    } else {
        videoPlayer.muted = true;
        muteUnmuteButton.textContent = 'Unmute';
    }
}

/* ----------------------------------End video --------------------------------- */

//  Logica FORM

const btn = document.getElementById('button');
const messageBox = document.getElementById('messageBox');
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_vt6rvmg';
        const templateID = 'template_djsoldn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                showMessage('Email sent!', false);
                this.reset();
            }, (err) => {
                btn.value = 'Send Email';
                showMessage(JSON.stringify(err), true);
            });
    });

function showMessage(message, isError) {
    messageBox.textContent = message;
    messageBox.classList.remove(isError ? 'success' : 'error');
    messageBox.classList.add(isError ? 'error' : 'success');
    messageBox.style.display = 'block';

    setTimeout(function () {
        messageBox.style.display = 'none';
    }, 4000);
};
//FIN   EMAIL form


/* ---------------------------- LOGICA TESTIMONIO --------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
});
/* ---------------------------- FIN LOGICA TESTIMONIO --------------------------- */

/* ----------------------------- BMI CALCULATOR ----------------------------- */
function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

    const bmr = gender === "male" ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) :
        447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

    const dailyCalories = bmr * activity;
    const bmi = weight / ((height / 100) ** 2);

    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal (Healthy) Weight";
    } else {
        bmiCategory = "Overweight";
    }

    document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${bmiCategory}<br>Estimated Daily Calories Needed: ${dailyCalories.toFixed(2)} kcal`;
}


function resetForm() {
    document.getElementById("gender").value = "Select";
    document.getElementById("activity").value = "Select";
    document.getElementById("result").innerHTML = "";

}


/* ---------------------------- FIN BMI CALULATOR --------------------------- */

