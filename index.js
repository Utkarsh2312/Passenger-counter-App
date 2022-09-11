let counter = 0 ;
let countEL = document.getElementById("count-el") ;

function increment() {
     
    counter += 1 ;
    countEL.innerHTML = counter ;

}

function decrement() {
    
    if(counter>0)
    {
        counter -= 1 ;
    }
    countEL.innerHTML = counter ;

}

let saveEl = document.getElementById("save-el") ;

function save() {
    
    let prev = " " + counter + " - " ;
    saveEl.textContent += prev ;  // Working same as innerHTML
    counter = 0 ;
    countEL.innerHTML = counter ;

}