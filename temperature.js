/* You are building a weather application. Write a JavaScript program that takes the current temperature as input and uses the condition (ternary) operator to determine and print the weather condition.If temperature is above 30'C , the condition is "Hot"; otherwise,it is "Moderate"
*/



function temperature(temperature){
    if(temperature>30){
        return"Hot"
    }else{
        return"Moderate"
    }
}
console.log(temperature(29))