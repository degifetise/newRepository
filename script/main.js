const navbar = document.getElementById("navbar");
const outdent = document.getElementById("outdent");

outdent.addEventListener("click", () => {
navbar.classList.toggle("navbarDisplay");

if(navbar.classList.contains("navbarDisplay")) {
outdent.innerHTML = `<i class="fas fa-times"></i>`;
}
else{
outdent.innerHTML = `<i class="fas fa-bars"></i>`;
}

});

// pop up value products added



const adeBtn = document.querySelectorAll("#cartBtn");



const counterContainer = document.getElementById("counter");

if(!counterContainer) {
console.log("no this element here");
} else {
adeBtn.forEach((button) => {

button.addEventListener("click", () => {

setTimeout(() => {
let count = parseInt(counterContainer.innerText, 10) || 0;
count++;
counterContainer.innerText = count;

setTimeout(() => {
button.innerText = "Take Your Cart";
}, 1000);
setTimeout(() => {
button.innerText = "Checked Up";
}, 3000)
/*setTimeout(() => {
/*button.innerHTML = '<i class="fas fa-circle-notch fa-spin spinner"></i>';
/*
/*}, 500);*/

button.innerHTML = '<i class="fas fa-circle-notch fa-spin spinner"></i>';

}, 999);

})
});
}





//account parts//
const acc = document.getElementById("account");
const inputBlock = document.getElementById("field");
acc.addEventListener("click", () => {
inputBlock.classList.toggle("showButtons");
});



//to make see image details//
const smallImage = document.querySelectorAll(".small");
const mainImage = document.getElementById("main-image");
const detailBtn = document.querySelectorAll(".imgBtn");

smallImage.forEach((image) => {
image.addEventListener("click", () => {
mainImage.src = image.src;

});

});

//contact form validation//

(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "vu1yffoze79QCdAok",
            });
        })();

  window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_1yjp47o', 'contact_form', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }
