
function login()
{ 
    
   
    var n1= document.getElementById('admi').value 
    var n2= document.getElementById('contra').value 
    var n3= parseInt (document.getElementById('sub').value) 
    
    /*var suma=((n1+n2+n3)/100)*90
    console.log("el resultado es"+suma)
    document.getElementById('resultado_suma').innerHTML=suma
    alert('tienes un descuento del 10%')
    return "El total es: "+suma*/
    
    var usuario1 = "admin";
    var contra = "1234";

    console.log(n1); 
    if (usuario1 == n1) {
        
        result = document.write('usuario correcto');
        if(contra==n2){
            
            window.location.href="productos.html";
        }
        else
            alert("error contreseña")
        
        
     } else
        result = document.write('usuario incorrecto');

}

function total()
{
    const precios = new Array(0, 100, 150, 300);
   
    var n1= document.getElementById('op1').value 
    var n2= document.getElementById('op2').value 
    var n3= document.getElementById('op3').value 
    var c1= parseInt(document.getElementById('cantidad1').value )
    var c2= parseInt(document.getElementById('cantidad2').value) 
    var c3= parseInt (document.getElementById('cantidad3').value) 

   
   
    

    var res = (precios[n1]*c1)+(precios[n2]*c2)+(precios[n3]*c3);

    console.log(res.toString());
    //document.write(res);

    document.getElementById('total1').innerHTML = res.toString();

}



