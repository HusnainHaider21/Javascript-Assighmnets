document.getElementById("toggle").addEventListener('click',function() {
    let scientificButtons = document.getElementById("scientific-buttons");
  if (scientificButtons.style.display=== "none"){
    scientificButtons.style.display= 'flex'; 
   this.innerText ="<";
    
  }else {
    scientificButtons.style.display= 'none';
    this.innerText='>';
  }
    
})




document.addEventListener("DOMContentLoaded", function() {
  const display = document.querySelector(".input");
  const buttons = document.querySelectorAll(".button");
  const scientificButtons = document.querySelector("#scientific-buttons");
  const toggle = document.getElementById("toggle");
  
  let currentInput = '';
  let result = '';

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = this.textContent;

          if (value === "AC") {
              currentInput = '';
              result = '';
              display.value = '';
          } else if (value === "DE") {
              currentInput = currentInput.slice(0, -1);
              display.value = currentInput;
          } else if (value === "=") {
              try {
                  result = eval(currentInput);
                  display.value = result;
                  currentInput = result;
              } catch (error) {
                  display.value = "Error";
                  currentInput = '';
              }
          } else {
              currentInput += value;
              display.value = currentInput;
          }
      });
  });

  scientificButtons.querySelectorAll(".button").forEach(button => {
      button.addEventListener('click', function() {
          const value = this.textContent;
          let tempInput = parseFloat(currentInput);

          if (!isNaN(tempInput)) {
              if (value === "sin") {
                  result = Math.sin(tempInput);
              } else if (value === "cos") {
                  result = Math.cos(tempInput);
              } else if (value === "tan") {
                  result = Math.tan(tempInput);
              } else if (value === "log") {
                  result = Math.log10(tempInput);
              } else if (value === "ln") {
                  result = Math.log(tempInput);
              } else if (value === "%") {
                  result = tempInput / 100;
              } else if (value === "x^2") {
                  result = Math.pow(tempInput, 2);
              } else if (value === "√") {
                  result = Math.sqrt(tempInput);
              }

              display.value = result;
              currentInput = result;
          }
      });
  });

  toggle.addEventListener('click', function() {
      if (scientificButtons.style.display === "none") {
          scientificButtons.style.display = 'flex';
          this.innerText = "<";
      } else {
          scientificButtons.style.display = 'none';
          this.innerText = '>';
      }
  });
});


