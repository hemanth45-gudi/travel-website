    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    })

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1]) 
    })
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