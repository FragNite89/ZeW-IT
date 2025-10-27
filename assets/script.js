function loginUser(event) {
  event.preventDefault();
  const uname = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const userType = document.getElementById('usertype').value;
  if (uname && pass) {
    if (userType === 'admin') {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'user.html';
    }
  } else {
    alert('Please fill all details!');
  }
}

function addEcoPoints() {
  const points = parseInt(document.getElementById('eco-points-input').value, 10) || 0;
  let balance = parseInt(document.getElementById('eco-balance').innerText, 10) || 0;
  balance += points;
  document.getElementById('eco-balance').innerText = balance;
  document.getElementById('eco-points-input').value = '';
}

function redeemEcoPoints() {
  const points = parseInt(document.getElementById('redeem-points-input').value, 10) || 0;
  let balance = parseInt(document.getElementById('eco-balance').innerText, 10) || 0;
  if (points > balance) {
    alert('Insufficient balance!');
  } else {
    balance -= points;
    document.getElementById('eco-balance').innerText = balance;
    document.getElementById('redeem-points-input').value = '';
    alert('Eco-Points Redeemed!');
  }
}

// Hamburger menu toggle logic
function toggleNavMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}
document.addEventListener('click', function(event) {
  const menu = document.getElementById('navMenu');
  const navToggle = document.querySelector('.nav-toggle');
  if (menu && navToggle && !menu.contains(event.target) && !navToggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});
