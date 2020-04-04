const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const selection = document.getElementById(sel);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        results.innerHTML = "Please provide a valid height";      
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else { 
        if(sel.value === "sedentary"){
            const pro = (weight/2.2*0.8).toFixed(2);
            //display the results
            results.innerHTML = "Require " + `<span>${pro}</span>` + " grams of protein daily.";
        }else if(sel.value === "endurance"){
            const pro = (weight/2.2*1.4).toFixed(2);
            //display the results
            results.innerHTML = "Require " + `<span>${pro}</span>` + " grams of protein daily.";
        }else if(sel.value === "strength"){
            const pro = (weight/2.2*1.8).toFixed(2);
            //display the results
            results.innerHTML = "Require " + `<span>${pro}</span>` + " grams of protein daily.";
        }
        
    }      


});  

