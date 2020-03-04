document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frmestadistico");
  form.addEventListener("submit", event=>{
    
      event.preventDefault();
      var opt=document.getElementById("list").value;  
      var txtserie=document.querySelector("#txtserien").value;
      txtserie.split(",");
      
      if(opt=="media"){
       media(txtserie);
      }
      else if(opt=="mediaArm"){
         mediaArmonica(txtserie);

      }else if(opt=="mediana"){
        mediana(txtserie);
        

      }else if(opt=="moda"){
         Moda(txtserie);

        
      }
      else if(opt=="desviacionE"){
        estandar(txtserie);
      }
  });
});

//MEDIA ARITMETICA
function media(serie=[]){
  //obtener los datos del input separados por coma con el metodo split("")
  let txtserie=document.querySelector("#txtserien").value;
 let separador=",",
  arreglo=txtserie.split(separador);
  let suma=0;
 //recorre cada uno de los elementos dentro del arreglo y los suma cada uno
  arreglo.forEach(function(index) {
     suma+=parseFloat(index);
   console.log(suma);
  });
  let  $resp=document.querySelector("#lblresp");
  //imprime la salida
  $resp.innerHTML=`La Media es:  ${(suma/arreglo.length)}`;   
  
  

}

//MEDIA ARMONICA
function mediaArmonica(serie=[]){
  let numeros=document.querySelector("#txtserien").value,
   ndatos=0, datos=0,
  arreglo=numeros.split(",");
   let suma=0;
  
  //1 dividido entre cada elemento del arreglo
  
  for(let i=0;i<arreglo.length;i++){
    datos= 1/arreglo[i];
    suma+=datos;
    console.log(parseFloat(datos));
  }

  let  $respu=document.querySelector("#lblresp");
  $respu.innerHTML=`La Media Armonica es:  ${(arreglo.length/suma)}`;
}

//mediana
function mediana(serie=[]){
  let numeros=document.querySelector("#txtserien").value,
  arreglon=numeros.split(",").sort(compareNumbers);

  let  $resp=document.querySelector("#lblresp");
  let medianapar=0,meidanainpar;
  let indice=0;
 
  if(arreglon.length%2==0){
    indice=Math.round(arreglon.length/2);

  medianapar=(indice + 1  + (indice/2));
  $resp.innerHTML=`La Mediana es:  ${(medianapar)}`;
  }else{
    indice=Math.round(arreglon.length/2);

    meidanainpar=arreglon[indice-1];
    $resp.innerHTML=`La Mediana es:  ${(meidanainpar)}`;
  }


  
  


  
}
function compareNumbers(a, b) {
  return a - b;
}

//MODA
function Moda(serie=[]){
  let datos=document.getElementById("txtserien").value;
  let array=datos.split(",").sort(compareNumbers);
  let repetidos = [];
  let=mayorrepetido=[];
 let temporal = [];
  
  array.forEach((value,index)=>{
    temporal = Object.assign([],array); //Copiado de elemento
    temporal.splice(index,1); //Se elimina el elemnto q se compara
    /**
     * Se busca en temporal el elemento, y en repetido para 
     * ver si esta ingresado al array. indexOf returna
     * -1 si el elemento no se encuetra
     **/
    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1) {   
        repetidos.push(value); 
      }  
      
  });
  let $respu=document.getElementById("lblresp")
  console.log(mayorrepetido);
  $respu.innerHTML=`La Moda es: ${(repetidos)}`;
  
 
}




//ESTANDAR 
function estandar(serie=[]){
  var numeros=document.querySelector("#txtserien").value;
   var arreglo=numeros.split(",");
  var sumacuadradodivN=0,sumaN=0;
  //recorre cada dato del arregloy le multiplica total de datos por el cuadrado de cada uno mientras los suma y los asigna a la variable 
   arreglo.forEach(function(elementos) {
    sumacuadradodivN+=arreglo.length *Math.pow(elementos,2); 
    console.log("sumacuadradiduvN ", sumacuadradodivN);
    
      
});

let sumadatos=0,sumacuadradaa;
//suma todos los datos del arreglo
arreglo.forEach(function(indexs){
  sumadatos+=parseFloat(indexs); 
  console.log("sumadatos ",sumadatos);
});
//sele saca el cuadrado a la suma
sumacuadradaa=Math.pow(sumadatos,2);


  console.log("suma cuadrado",sumacuadradodivN,"div ",sumacuadradaa);
  //el dividendo: el length del arreglo multiplicado por el length menos uno
  let div=arreglo.length*(arreglo.length-1);
  console.log(div);
  

  //la variable que contiene la primera operacion le resta la segunda
  let desviacionestandar=sumacuadradodivN-sumacuadradaa;
  //se saca la desviacion estandar dividiendo el resultado de la resta entre el resultado del dividendo
  let desviacionfinal=desviacionestandar/div;

     $respu=document.querySelector("#lblresp");
   $respu.innerHTML=`La Desviacion Estandar es:  ${(desviacionfinal )} y La Tipica es: ${(Math.sqrt(desviacionfinal,2))} `;


}





function selectbox(){
  var selectvalue=document.getElementById("list").value;
  console.log(selectvalue);
     

}