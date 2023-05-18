let countEl = document.getElementById ("count-el") // Imported From HTML  
let saveEl = document.getElementById ("save-el") // Imported From HTML

let count = 0  // Count Set To Zero for Every Reset it starts from zero again

function increment () {         // Increment Function Added
        count += 1               //Incrementing
        countEl.textContent = count     // Displaying Final Figures on Screen
}

function save(){                   //Save Function Added for saving the incremented value whenever needed
        let bcc = count + " " + "-"     //Bcc set to count figure space,then "-" and then again the incremented value when save button pressed
        saveEl.textContent += bcc      //Displaying save values to screen 
        countEl.textContent = 0         //initially it will show zero 
        count = 0                       // Count set to zero

        // console.log (bcc)
        // console.log (count)
}



