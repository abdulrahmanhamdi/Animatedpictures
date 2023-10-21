const panels = document.querySelectorAll('.panel');

let currentPanel = 0;

function movePanels() {
  panels[currentPanel].classList.remove('active');
  
  currentPanel++;
  
  if(currentPanel >= panels.length) {
    currentPanel = 0; 
  }
  
  panels[currentPanel].classList.add('active');
}

setInterval(() => {
  movePanels();
}, 2000); 
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}