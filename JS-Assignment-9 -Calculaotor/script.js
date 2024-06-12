document.getElementById("toggle").addEventListener('click',function() {
    let scientificButtons = document.getElementById("scientific-buttons");
  if (scientificButtons.style.display=== "none") {
    scientificButtons.style.display= 'flex';
    this.innerText ="<";
    
  }else {
    scientificButtons.style.display= 'none';
    this.innerText='>';
  }
    
})