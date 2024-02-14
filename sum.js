/*
You are creating a program to calculate the sum of numbers. Write a javascript program that takes a positive integer and uses a do-while loop to calculate and print the sum of all numbers from 1 to the given integer.
*/

var givennum = 5;
var sum = 0;
var i =1;
do{
    sum = sum + i;
    i++;
}while(i<=givennum);

console.log(sum);