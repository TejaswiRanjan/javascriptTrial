/* You are creating a program to calculate the sum of numbers.Write a JavaScript program that takes a positive integer as input and used a do-while loop to calculate and print the sum of all numbers from 1 to the given integer.
*/

function calcSum(number){
    let result = 0
    let i = 1
    if(number<0){
        return "The number is negative"
    }else{
        do{
            result = result + i
            i++
        }while(i<=number)
        return result
    }
}
console.log(calcSum(10))