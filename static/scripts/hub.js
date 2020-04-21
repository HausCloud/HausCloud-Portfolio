window.addEventListener('DOMContentLoaded', () => {
  // Register plugins
  gsap.registerPlugin(ScrollToPlugin);

  // Variable declaration
  const sub_window = document.querySelectorAll('.subcontainer');
  let current_view = 0;
  const end_view = sub_window.length - 1;

  // Bind click event to all path and text elements to follow href
  sub_window.forEach((element) => {
    const svg_path = element.querySelector('svg > path');
    const svg_text = element.querySelector('svg > text');
    svg_path.addEventListener('click', () => window.open(svg_path.getAttribute('href'), '_blank'));
    svg_text.addEventListener('click', () => window.open(svg_text.getAttribute('href'), '_blank'));
  });

  // Bind click event to move left in cloud-container
  document.getElementById('leftarrow').addEventListener('click', () => {
    if (current_view > 0) {
      gsap.to('#cloud-container', { duration: 0.5, scrollTo: sub_window[current_view - 1] });
      current_view -= 1;
    }
  });

  // Bind click event to move right in cloud-container
  document.getElementById('rightarrow').addEventListener('click', () => {
    if (current_view < end_view) {
      gsap.to('#cloud-container', { duration: 0.5, scrollTo: sub_window[current_view + 1] });
      current_view += 1;
    }
  });
});
