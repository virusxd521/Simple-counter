let counter_div = document.getElementsByClassName("enter-number");
let counter_id = document.getElementById("value");
let counter_value_to_number = parseInt(counter_id.textContent);
let inc_button = document.getElementById("inc");
let reset_button = document.getElementById("reset");
let dec_button = document.getElementById("dec");


inc_button.addEventListener("click", item => {
    counter_value_to_number += 1;
    counter_id.textContent = counter_value_to_number;
    return console.log(counter_id.textContent);
})


dec_button.addEventListener("click", item =>{
    if(counter_value_to_number <= 0){
        return   alert("The value cannot be negative");
    } else{
        counter_value_to_number -= 1;
        counter_id.textContent = counter_value_to_number;
        return console.log(counter_id.textContent);
    }
})


reset_button.addEventListener("click", item => {
    counter_value_to_number = 0;
    counter_id.textContent = counter_value_to_number;
    return console.log(counter_id.textContent);
})