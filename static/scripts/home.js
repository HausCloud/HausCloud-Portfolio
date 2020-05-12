window.addEventListener('DOMContentLoaded', function () {
    /* Typed.js for title */
    var options = {
	strings: ['Software Engineer', 'Eternal Student', 'Gamer', 'Lofi Addict', 'Anime Lover'],
	typeSpeed: 60,
	backspeed: 40,
	loop: true,
    };
    var obj = {
	0: ['Command interpreter', 'APR 2019', 'Coursework to broaden understanding of how shells work. Concepts covered are env, built-ins, signals, system calls, string parsing, and errno.'],
	1: ['Wish upon a star web application', 'SEP 2019 - NOV 2019', 'Developed to counteract the trend of other wishing apps where you make a wish and it disappears into the void. Get insight into the wants of others from all around the world. Help fill a desolate universe with fun, hopes, dreams, ..'], 2: ['AWS EB SSL setup scripts', 'May 2020', 'Lack of easy solution readily available on the net. There is a lot of questions and only unclear and/or thorough explanations regarding adding SSL for EB.']
    };

    var project_links = ['https://github.com/HausCloud/C-Shell', 'https://github.com/HausCloud/Hopeful-Cosmos', 'https://github.com/HausCloud/AWS-ElasticBeanstalk-SSL'];

    new Typed('#anttitle div h2', options);

    /* Register plugin ScrolTo plugin for GSAP */
    gsap.registerPlugin(ScrollToPlugin);

    /* Fade in title */
    gsap.from('#anttitle', { duration: 1.5, opacity: 0 });

    /* Float navbar in with stagger effect */
    gsap.from('.navitem', {
	duration: 0.8, opacity: 0, y: -70, stagger: 0.25,
    });

    /* Smooth scroll for navbar */
    document.querySelector('#typicalbackground #navbar ul li:first-child a').addEventListener('click', function (e) {
	e.preventDefault();
	gsap.to(document.body, { duration: 0.8, scrollTo: { y: '#about', autoKill: false } });
    });

    document.querySelector('#typicalbackground #navbar ul li:nth-child(3)').addEventListener('click', function (e) {
	e.preventDefault();
	gsap.to(document.body, { duration: 0.8, scrollTo: { y: '#projects', autoKill: false } });
    });

    document.querySelector('#typicalbackground #navbar ul li:last-child').addEventListener('click', function (e) {
	e.preventDefault();
	gsap.to(document.body, { duration: 0.8, scrollTo: { y: '#contact', autoKill: false } });
    });


    /* Grab all projects */
    var projects = document.querySelectorAll('#projects > div > div > a');

    /* Assign each project an attribute with a corresponding index */
    for (i=0; i<projects.length;++i) {
	projects[i].setAttribute('proj_num', i);
    }

    /* Bind click event to display overlay with corresponding info */
    for (j=0; j<projects.length;++j) {
	projects[j].addEventListener('click', function (e) {
	    e.preventDefault();
	    document.querySelector('#projectinfo div:first-child p').innerHTML = obj[this.getAttribute('proj_num')][0];
	    document.querySelector('#projectinfo div:nth-child(2) p').innerHTML = obj[this.getAttribute('proj_num')][1];
	    document.querySelector('#projectinfo div:last-child p').innerHTML = obj[this.getAttribute('proj_num')][2];
	    document.getElementById('overlay').setAttribute('proj_num', this.getAttribute('proj_num'));
	    gsap.to('#overlay', { duration: 0.4, display: 'block', opacity: 1 });
	});
    }

    // Bind click event to hide overlay
    document.querySelector('#overlaymenu div:last-child a').addEventListener('click', function (e) {
	gsap.to('#overlay', { duration: 0.4, display: 'none', opacity: 0 });
    });

    document.querySelector('#overlaymenu div:first-child a').addEventListener('click', function (e) {
	window.open(project_links[document.getElementById('overlay').getAttribute('proj_num')], '_blank');
    });

    /* Open link for resume button */
    document.getElementById('resume').addEventListener('click', function (e) {
	e.preventDefault();
	window.open('https://drive.google.com/file/d/1jOq4mHXe9_4V4WvPUUQnVGX_UK9r6fIg/view?usp=sharing', '_blank');
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
