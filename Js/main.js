var num1= prompt( " Ingrese un numero para ver si es perfecto");
var num2= 0;
for(i=1; i < num1 ; i++){
    if(num1%i==0 ){
        num2=num2+i
    }
}
if(num2==num1){
    document.write("si es perfecto")
}else{
    document.write("No es perfecto")
}
