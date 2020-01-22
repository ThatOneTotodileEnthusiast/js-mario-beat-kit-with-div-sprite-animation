
const spriteSheetStartX = 1;
const spriteSheetStartY = 16;
const spriteChangeForwardX = 2;
const spriteChangeBackX = 2;
let marioSwitcher = 0;
let base = {
  'left': '-1px',
  'top': '-16px'
}

let newPos = {
  'left': '-1px',
  'top': '-16px'
}
let startDate = new Date();


function playSound(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);



  // Add mario walking animation
  const mario = document.querySelector('.marioSprite')
  // console.log(mario);
  _tmp = window.getComputedStyle(mario, null).backgroundPosition.trim().split(/\s+/),
    positions = {
      'left': _tmp[0],
      'top': _tmp[1]
    };

  // console.log(`Positions: ${positions.left}, ${positions.top}`);
  // console.log(positions);
  // console.log(base);
  // console.log(positions.left === base.left);







  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
    
  if (!audio) {


    console.log("Positions Position: " + positions.left);
    console.log("newPos Position: " + newPos.left);
    console.log("base Position: " + base.left);

    if (newPos.left === positions.left && positions.left !== base.left) {
      mario.style.backgroundPosition = "-1px -16px";
      newPos.left = base.left;
      console.log("HI");
      
      return
    }
    else {
      if (e.keyCode === 37) {
        mario.style.backgroundPosition = "-19px -16px";
        newPos.left = "-19px";
      } else if (e.keyCode === 38) {
        mario.style.backgroundPosition = "-37px -16px";
        newPos.left = "-37px";
      }
    }
    console.log(newPos.left);


    
  
    // newPos.left = positions.left;
    return

  }; // Stop function running altogether

  audio.currentTime = 0; // Rewinds to start
  audio.play();
  this.console.log(key);
  key.classList.add('playing');





}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skipe if its not a transform

  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', (e) => {

  let endDate = new Date();
  let seconds = (endDate.getTime() - startDate.getTime()) / 1000;

  if (seconds >= 0.2) {
    startDate = endDate;
    playSound(e);
    // console.log(e.keyCode);
    // 37 < , 38 ^, 39 > , 40 down
  }
});
