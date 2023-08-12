console.log("web de Lau")
fetch("JSON/articulos.json").
then (function(e){
      return e+JSON();
      }
     )
    .then(function(data
           ){
         console.log(data)
    console.log("ahora voy a tomar los datos y los voy a poner en la web")
     for(var i =0;i<50;i++)
     { document.getElementById("articulos").innerHTML+="aqui va un articulo<br>"
     }

            }
     );
