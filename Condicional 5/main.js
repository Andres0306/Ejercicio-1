var numero1=prompt("Dame un primer número:");
var numero2=prompt("Dame un segundo número:");

if(!isNaN(numero1) && !isNaN(numero2)){
   if(numero1>numero2){
    alert("El número "+ numero1 + " es mayor que "+ numero2);
   } 
   else if(numero2>numero1){
    alert("El número "+ numero2 + " es mayor que "+ numero1);
   }
   else if(numero2===numero1)
   alert("El número "+ numero2 + " es igual que "+ numero1);
}

else{
    alert("Por favor, ingrese dos numeros válidos.");
}