document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
        signUpButton.addEventListener('click', function () {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', function () {
            container.classList.remove('right-panel-active');
        });
    } else {
        console.error('Could not find one or more elements in the DOM.');
    }

    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');

    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        signup();
    });

    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        login();
    });
});

function signup() {
    var user = document.getElementById("use").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1 === pass2) {
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass1);

        window.location.href = "login.html";
    } else {
        document.querySelector(".error").style.display = "block";
    }
}

function login() {
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if ((document.getElementById("username").value == storedUsername) && (document.getElementById("password").value == storedPassword)) {
        var loginLink = document.querySelectorAll('.sep');
        loginLink.textContent = 'Logout';
        window.location.href = "index.html";
    } else {
        document.querySelector(".error1").style.display = "block";
    }
}

let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
       document.querySelector('.controls .active').classList.remove('active');
       btn.classList.add('active');
       let src=btn.getAttribute('data-src');
       document.querySelector('#video-slider').src=src;
    
    });
});