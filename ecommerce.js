/* Yor are working on an e-commerce platform.Write a JavaScript program that takes the payment method ("credit","debit",or"paypal")as input and uses a switch statement to determine and print the processing fee associated with each payment method.For example,"credit" may have a processing fee of 2%,"debit"1.5% and "paypal"3%.
*/

function ecom(price,charges){

    switch(charges){
        case "credit":
            console.log("your payment is done by credit card and your charges without including the product price is  : "+0.02*price)
            console.log("your total amount including charges is : "+((0.02*price)+price))
            break
        case "debit" :
            console.log("your payment is done by debit card and your charges without including the product price is  : "+0.015*price)
            console.log("your total amount including charges is : "+((0.015*price)+price))
            break
        case "paypal" :
            console.log("your payment is done by paypal card and your charges without including the product price is  : "+0.03*price)
            console.log("your total amount including charges is : "+((0.03*price)+price))
            break
        default :
        console.log("Not Valid Payment Method ")
    }
}
ecom(4000,"paypal")