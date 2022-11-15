// task: to do scroll progress-bar and button for scrolling to start screen

const scrollTopButton = document.querySelector('.scroll-top-button');

window.addEventListener('scroll', () => {
  const progressBarThumb = document.querySelector('.progress-bar span');
  const scrollCurrentPos = document.documentElement.scrollTop;

  const totalDocumentHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
  );

  const windowHeight = document.documentElement.clientHeight;
  const height = totalDocumentHeight - windowHeight;

  progressBarThumb.style.width = `${scrollCurrentPos / height * 100}%`

  // scroll button is visible from 2nd screen
  scrollTopButton.style.visibility = scrollCurrentPos >= windowHeight ? 'visible' : 'hidden';
})

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})
