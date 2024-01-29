/* Write a program that grades students based on their marks .
@ If greater than 90 then A grade
@ If between 70 and 90 then a B grade
@ If between 50 and 70 then a C grade
@ Below 50 then an F grade
*/

let marks = 54

if(marks>=0&&marks<50){
    console.log("Marks = "+marks+" Grade F")
}else if(marks>=50&&marks<=70){
    console.log("Marks = "+marks+" Grade C")
}else if(marks>70&&marks<=90){
    console.log("Marks = "+marks+" Grade B")
}else if(marks>90&&marks<=100){
    console.log("Marks = "+marks+" Grade C")
}else {
    console.log(marks+ " : Not a Valid Marks")
}