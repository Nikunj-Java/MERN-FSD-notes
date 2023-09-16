
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyPressed = key.textContent;
    console.log(`Key pressed: ${keyPressed}`);
     //add your functionality here
  });
});


  /*this code is contributed by Nikunj Soni*/