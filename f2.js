document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.body.style.opacity = 1;
    }, 200); 
});


// LOGIN AND SIGNUP FUNCTION:

const existingUsers = [
  { username: 'as', password: 'as' },
  ...(JSON.parse(localStorage.getItem('users')) || [])
];

function login() {
  const username = document.getElementById('logusername').value;
  const password = document.getElementById('logpassword').value;

  const user = existingUsers.find(u => u.username === username && u.password === password);

  if (user) {
      alert('Login successful!');
      window.location.href = 'homepage.html'; 
  } else {
      alert('Invalid username or password');
  }
}


function signup() {
  const username = document.getElementById('signusername').value;
  const password = document.getElementById('signpassword').value;

  if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
  }

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];


  if (existingUsers.some(u => u.username === username)) {
      alert('Username already exists. Please choose a different one.');
      return;
  }

 
  existingUsers.push({ username, password });

 
  localStorage.setItem('users', JSON.stringify(existingUsers));

  alert('Sign up successful!');
  window.location.href = 'login.html'; 
}



