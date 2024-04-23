document.addEventListener("DOMContentLoaded", function() {
  // Reste de votre code JavaScript ici
  const defaultAdmin = {
    email: "Admin@gmail.com",
    password: "admin123"
  };
  const authenticated = localStorage.getItem("authenticated");




  function checkCredentials(email, password) {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && email === defaultAdmin.email && password === defaultAdmin.password;
  }

  // Event listener for form submission
  document.querySelector(".container form").addEventListener("submit", function(event) {
    event.preventDefault();  

    // Get the entered email and password
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    // Check if the credentials are correct
    if (checkCredentials(email, password)) {
      if (!authenticated) {
        localStorage.setItem("Admin",JSON.stringify(defaultAdmin));
        localStorage.setItem("authenticated", true);
      }      
      window.location.href = 'index.html';
      // Redirect to admin dashboard or perform any other action
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
});

