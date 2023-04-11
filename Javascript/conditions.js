//if else conditions
// let age=17;
// if(age>=20){
//     console.log("you are adult");
// }else{
//     console.log("you are not adult");
// }
// if else ladder conditions
const umar=24;
if(umar <=10){
    console.log("you are balak");
}
else if( umar >=20 ){
    console.log(" you are in the age of harami");
}
else if(umar >=28){
    console.log("Biyah karoo");
}
else{
    console.log("you are responsible person");
}
//switch case 

let user='admin';
switch (user){
    case "admin":
        console.log("welcome to admin page");
        break;
        case "mentor":
        console.log("welcome to dashboard");
        break;
        case "student":
        console.log("welcome to your page give acesss");
        break;
        default:
            console.log("you  are visitor please visit again");
}
//ternary operators and conditions
//? true : false
let raining=true;
raining ? console.log("It is rainig") : console.log("It is not raining");
//example two
let userlogin=false;
userlogin ? console.log("logout") : console.log("login");
//date and maths 
//date 
const now =new Date ();
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getDay());
const PI= Math.PI;
console.log(PI);
console.log(Math.round(PI));
//min and max
console.log(Math.min(1,2,3,4,5,6,7));
console.log(Math.max(1,2,3,4,5,6,7));
//random
console.log(Math.random(43));
console.log(Math.pow(9,9));
console.log(Math.log(2));   