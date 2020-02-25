window.addEventListener('load', function() {
    /* Typed.js for title */
    let options = {
	strings: ['Software Engineer', 'Avid Gamer', 'Eternal Student', 'Lofi Addict', 'Anime Lover'],
	typeSpeed: 60,
	backspeed: 40,
	loop: true
    };
    
    // let overlayDisplay = document.getElementById('overlay')
    new Typed('#anttitle div h2', options);

    /* Register plugin ScrolTo plugin for GSAP */
    gsap.registerPlugin(ScrollToPlugin);

    /* Smooth scroll for navbar */
    document.querySelector('#typicalbackground #navbar ul li:first-child a').addEventListener('click', function(e) {
	e.preventDefault();
	gsap.to(document.body, {duration: 0.8, scrollTo: {y: '#about', autoKill: false }})
    });

    document.querySelector('#typicalbackground #navbar ul li:nth-child(3)').addEventListener('click', function(e) {
	e.preventDefault();
	gsap.to(document.body, {duration: 0.8, scrollTo: {y: '#projects', autoKill: false }})
    });

    document.querySelector('#typicalbackground #navbar ul li:last-child').addEventListener('click', function(e) {
	e.preventDefault();
	gsap.to(document.body, {duration: 0.8, scrollTo: {y: '#contact', autoKill: false }})
    });

    /* Face in title */
    gsap.from('#anttitle', {duration: 1.5, opacity: 0});

    /* Nav bar float in with staff */
    gsap.from('.navitem', {duration: 0.8, opacity: 0, y: -70, stagger: 0.25});
    

    /* Add listener event for each project to open overlay on click */
    let projects = document.querySelectorAll('#projects > div > div > a')


    /* Iterate over each project element and display overlay on click */
    projects.forEach(function(item, index) {
    	item.addEventListener('click', function(e) {
    	    e.preventDefault();
	    gsap.to('#overlay', {duration: 2, display: 'block', opacity: 1})
    	});
    });    

    /* Open link for resume button */
    document.getElementById('resume').addEventListener('click', function (e) {
	e.preventDefault();
    	window.open('https://drive.google.com/file/d/16qjoK5VtbUFIY5rNf1kiAyE6-qCxTdks/view?usp=sharing', '_blank');
    });
    
    /* Open links for contact section */
    document.querySelector('#hclinkedin').addEventListener('click', function (e) {
	e.preventDefault();
    	window.open('https://www.linkedin.com/in/hauscloud', '_blank');
    });
    document.querySelector('#hcgithub').addEventListener('click', function (e) {
	e.preventDefault();
    	window.open('https://www.github.com/hauscloud', '_blank');
    });
    document.querySelector('#hctweet').addEventListener('click', function (e) {
	e.preventDefault();
    	window.open('https://www.twitter.com/hauscloud', '_blank');
    });

});
