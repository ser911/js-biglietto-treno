var km = prompt("Quanti km hai intenzione di percorrere?");
km = parseInt(km)
console.log(km)

var ticketprice = (km * 0.21);

var age = prompt("Quanti anni hai?")

if (age < 18 ){
var finalprice = ticketprice / 100 * 80;
}
else if (age > 65 ) {
var finalprice = ticketprice / 100 * 60;

}
else {
   var finalprice = ticketprice;
}

alert(finalprice);
