/* You're creating a basic login system.Make a login function with two things: a username and a password. Chech if username is "admin" and the password is "12345".If they're both correct, show "Login Succesful"; if not "Invalid credentials"
*/

function loginSystem(name,password){
    if(name=="admin"&&password==12345){
    return "Login Successful"
    }else{
        return "Invalid credentials"
    }
}
console.log(loginSystem("admin",12345))


