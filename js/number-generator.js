  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let lot1 = Math.floor(Math.random() * 70) + 1;
  let lot2 = Math.floor(Math.random() * 70) + 1;
  let lot3 = Math.floor(Math.random() * 70) + 1;
  let lot4 = Math.floor(Math.random() * 70) + 1;
  let lot5 = Math.floor(Math.random() * 70) + 1;
  let pBall = Math.floor(Math.random() * 25) + 1;
  const guesses = document.querySelector('.guesses');
  const res1 = document.querySelector('.result#res1');
  const res2 = document.querySelector('.result#res2');
  const res3 = document.querySelector('.result#res3');
  const res4 = document.querySelector('.result#res4');
  const res5 = document.querySelector('.result#res5');
  const res6 = document.querySelector('.result#res6');
  const lowOrHi = document.querySelector('.lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
//  const guessField = document.querySelector(".guessField");
  const num1 = document.querySelector("input[name='num1']");
  const num2 = document.querySelector("input[name='num2']");
  const num3 = document.querySelector("input[name='num3']");
  const num4 = document.querySelector("input[name='num4']");
  const num5 = document.querySelector("input[name='num5']");
  const num6 = document.querySelector("input[name='num6']");
  let guessCount = 1;
  let resetButton;

  function checkGuess() {
//    let userGuess = Number(guessField.value);
    let guess1 = Number(num1.value)
    let guess2 = Number(num2.value)
    let guess3 = Number(num3.value)
    let guess4 = Number(num4.value)
    let guess5 = Number(num5.value)
    let guess6 = Number(num6.value)

    res1.textContent = lot1;
    res2.textContent = lot2;
    res3.textContent = lot3;
    res4.textContent = lot4;
    res5.textContent = lot5;
    res6.textContent = pBall;

//    Check each number
    
    setGameOver();
  }

  guessSubmit.addEventListener('click', checkGuess);

  function setGameOver() {
//    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.className = 'w3-button w3-black w3-text-white'
    resetButton.textContent = 'Reset';
    document.getElementById("reset").appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    num1.disabled = false;
    guessSubmit.disabled = false;
    num1.value = '';
    num2.value = '';
    num3.value = '';
    num4.value = '';
    num5.value = '';
    num6.value = '';
    num1.focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
