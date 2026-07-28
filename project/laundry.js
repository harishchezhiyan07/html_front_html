const slider = document.getElementById("slider");
    const dots = document.querySelectorAll(".dot");

    let current = 0;
    const totalSlides = 3;

    function updateSlider() {
      slider.style.transform = `translateX(-${current * 100}%)`;

      dots.forEach((dot, index) => {
        dot.classList.remove("bg-white");
        dot.classList.add("bg-gray-400");

        if (index === current) {
          dot.classList.remove("bg-gray-400");
          dot.classList.add("bg-white");
        }
      });
    }

    function nextSlide() {
      current = (current + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      current = (current - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function goSlide(index) {
      current = index;
      updateSlider();
    }

    // Auto Slide
    setInterval(nextSlide, 3000);

// Login

function loginUser() {
  const button = document.getElementById("loginBtn");
  const message = document.getElementById("message");

  // Disable button
  button.disabled = true;
  button.innerText = "Logging in...";

  // Show login process
  message.innerText = "Login process started...";

  // Simulate login
  setTimeout(() => {
    message.innerText = "✅ Login Successful!";
    button.innerText = "Login";
    button.disabled = false;
  }, 3000);
}

// Open Booking
function bookService() {

    let user = localStorage.getItem("username");

    if (user == null) {
        alert("Please Login First");
        return;
    }

    document.getElementById("bookingModal").classList.remove("hidden");
}

// Confirm Booking
function confirmBooking() {

    let customer = document.getElementById("customer").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let quantity = document.getElementById("quantity").value;

    let booking = {
        customer,
        phone,
        service,
        quantity
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    document.getElementById("bookingModal").classList.add("hidden");

    alert("Booking Confirmed Successfully");
}

// Auto Login

function loginUser() {
  const button = document.getElementById("loginBtn");
  const message = document.getElementById("message");

  // Disable button
  button.disabled = true;
  button.innerText = "Logging in...";

  // Show login process
  message.innerText = "Login process started...";

  // Simulate login
  setTimeout(() => {
    message.innerText = "✅ Login Successful!";
    button.innerText = "Login";
    button.disabled = false;
  }, 3000);
}

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        pickupDate: document.getElementById("date").value,
        pickupTime: document.getElementById("time").value,
        service: document.getElementById("service").value,
        instruction: document.getElementById("instruction").value,
    };

    console.log("Booking Details:");
    console.log(bookingData);

    bookingForm.reset();
});