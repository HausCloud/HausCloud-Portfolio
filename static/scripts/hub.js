window.addEventListener('DOMContentLoaded', function () {
    // Register plugins
    gsap.registerPlugin(ScrollToPlugin);

    // Variable declaration
    var sub_window = document.querySelectorAll('.subcontainer');
    var current_view = 0;
    var end_view = sub_window.length - 1;

    // Bind click event to all path and text elements to follow href
    for (i = 0; i < sub_window.length; ++i) {
        let svg_path = sub_window[i].querySelector('svg > path');
        let svg_text = sub_window[i].querySelector('svg > text');
        svg_path.addEventListener('click', function () { window.open(svg_path.getAttribute('href'), '_blank'); });
        svg_text.addEventListener('click', function () { window.open(svg_text.getAttribute('href'), '_blank'); });
    }

    // Bind click event to move left in cloud-container
    document.getElementById('leftarrow').addEventListener('click', function () {
        if (current_view > 0) {
            gsap.to('#cloud-container', { duration: 0.5, scrollTo: sub_window[current_view - 1] });
            current_view -= 1;
        }
    });

    // Bind click event to move right in cloud-container
    document.getElementById('rightarrow').addEventListener('click', function () {
        if (current_view < end_view) {
            gsap.to('#cloud-container', { duration: 0.5, scrollTo: sub_window[current_view + 1] });
            current_view += 1;
        }
    });
});
