// Open Login
function loginUser() {
    document.getElementById("loginModal").classList.remove("hidden");
}

// Login
function submitLogin() {

    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (name === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", name);

    document.getElementById("loginBtn").innerHTML =
        "Welcome " + name;

    document.getElementById("loginModal").classList.add("hidden");

    alert("Login Successful");
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
window.onload = function () {

    let user = localStorage.getItem("username");

    if (user) {
        document.getElementById("loginBtn").innerHTML =
            "Welcome " + user;
    }

}
function loginUser() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("message");

      if (email === "" || password === "") {
        message.innerHTML = "Please enter all fields";
        message.className = "text-red-500 text-center mt-4 font-semibold";
      } else {
        message.innerHTML = "Login Successful!";
        message.className = "text-green-500 text-center mt-4 font-semibold";
      }
    }