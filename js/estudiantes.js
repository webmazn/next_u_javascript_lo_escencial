var objeto = { 
    "estudiantes" : [
        {
            "codigo" : "EST0001",
            "nombre" : "Juan Carlos Perez",
            "nota" : 15
        },
        {
            "codigo" : "EST0002",
            "nombre" : "Maria Luisa Cuculiza",
            "nota" : 18
        },
        {
            "codigo" : "EST0003",
            "nombre" : "Ricaldo Salmon Foley",
            "nota" : 20
        },
        {
            "codigo" : "EST0004",
            "nombre" : "Duilio Jaime Vega",
            "nota" : 11
        },
        {
            "codigo" : "EST0005",
            "nombre" : "Omar Rodriguez Tapia",
            "nota" : 17
        },
        {
            "codigo" : "EST0006",
            "nombre" : "Ivan Potrras Cruz",
            "nota" : 14
        },
        {
            "codigo" : "EST0007",
            "nombre" : "Esteban More Gallegos",
            "nota" : 16
        },
        {
            "codigo" : "EST0008",
            "nombre" : "Julio Paretto Sanchez",
            "nota" : 12
        },
        {
            "codigo" : "EST0009",
            "nombre" : "Jenny Bazan Robles",
            "nota" : 13
        },
        {
            "codigo" : "EST0010",
            "nombre" : "Gerson Obregon Leiva",
            "nota" : 19
        }
]};

var titulo = document.getElementById("titulo"),
    resultado = document.getElementById("resultados"),
    total = objeto.estudiantes.length,
    
MyApp = {
        detalleInicial : function(){
            let html = ''
            for(let i=0; i<total; i++){
                html += `<img src="images/${objeto.estudiantes[i].codigo}.jpg" title="${objeto.estudiantes[i].nombre}" class="faces" />`
            }
            titulo.innerHTML = "Resultados de Evaluación"
            resultado.innerHTML = `Este examen se realizó a un total de <strong>${total} estudiantes</strong>, a continuación seleccione las opciones que desea consultar en el menú superior. <br> ${html}`
        },
        ordernarObjeto : function(param1, param2){
            objeto.estudiantes.sort(function (a, b){
                if(param2=='asc'){ //asc Ascendente
                    return (b[param1] < a[param1])
                }else{ //desc Descendente
                    return (b[param1] > a[param1])
                }
            })  
        },
        listadoEstudiantes : function(campo, orden){
            let html= `<table class="tbl_resultados">
                        <tr>
                            <th width="10%">Foto</th>
                            <th width="20%">Código</th>
                            <th width="50%">Nombre</th>
                            <th width="20%">Nota</th>
                        </tr>`
            this.ordernarObjeto(campo,orden)
            for(let i=0; i<total; i++){
                html += `<tr>
                            <td align="center">
                                <img src="images/${objeto.estudiantes[i].codigo}.jpg" />
                            </td>
                            <td align="center">${objeto.estudiantes[i].codigo}</td>
                            <td align="left">${objeto.estudiantes[i].nombre}</td>
                            <td align="center">${objeto.estudiantes[i].nota}</td>
                        </tr>`
            }
            html += `<tr>
                            <td align="center">-</td>
                            <td align="center">
                                <a href="#" onclick="MyApp.listadoEstudiantes('codigo','asc')">ASC</a> | 
                                <a href="#" onclick="MyApp.listadoEstudiantes('codigo','desc')">DESC</a>
                            </td>
                            <td align="center">
                                <a href="#" onclick="MyApp.listadoEstudiantes('nombre','asc')">ASC</a> | 
                                <a href="#" onclick="MyApp.listadoEstudiantes('nombre','desc')">DESC</a>
                            </td>
                            <td align="center">
                                <a href="#" onclick="MyApp.listadoEstudiantes('nota','asc')">ASC</a> | 
                                <a href="#" onclick="MyApp.listadoEstudiantes('nota','desc')">DESC</a>
                            </td>
                        </tr>
                    </table>`
            titulo.innerHTML = "Listado de Estudiantes"
            resultado.innerHTML = html
        },
        promedioNotas : function(){
            let acumulador=0,
                promedio=0,
                mayores='',
                menores=''
            for(let i=0; i<total; i++){
                acumulador += parseInt(objeto.estudiantes[i].nota)
            }
            promedio = acumulador / total
            promedio = promedio.toFixed()
            this.ordernarObjeto('nota','desc')
            for(let i=0; i<total; i++){
                if(objeto.estudiantes[i].nota>=promedio){
                    mayores += `
                        Foto:<br> <img src="images/${objeto.estudiantes[i].codigo}.jpg" class="foto" /><br>
                        Codigo: <strong>${objeto.estudiantes[i].codigo}</strong><br>
                        Nombre: <strong>${objeto.estudiantes[i].nombre}</strong><br>
                        Nota: <strong>${objeto.estudiantes[i].nota}</strong><hr>`
                }else{
                    menores += `
                        Foto:<br> <img src="images/${objeto.estudiantes[i].codigo}.jpg" class="foto" /><br>
                        Codigo: <strong>${objeto.estudiantes[i].codigo}</strong><br>
                        Nombre: <strong>${objeto.estudiantes[i].nombre}</strong><br>
                        Nota: <strong>${objeto.estudiantes[i].nota}</strong><hr>`
                }
            }
            
            titulo.innerHTML = `Nota Promedio ${promedio}`
            resultado.innerHTML = `<table class="tbl_resultados">
                                        <tr>
                                            <th>Notas Menores al Promedio</th>                                            
                                            <th>Notas Mayores o Igual al Promedio</th>
                                        </tr>
                                        <tr>
                                            <td>${menores}</td>                                            
                                            <td>${mayores}</td>
                                        </tr>
                                    </table>`
        },
        mayorNota : function(){
            let mayor=-Infinity,
                posicion=0
            for(let i=0; i<total; i++){
                if(parseInt(objeto.estudiantes[i].nota)>mayor){
                    mayor=parseInt(objeto.estudiantes[i].nota)
                    posicion=i
                }
            }
            titulo.innerHTML = "Mayor Nota"
            resultado.innerHTML = `
                        Foto:<br> <img src="images/${objeto.estudiantes[posicion].codigo}.jpg" class="foto" /><br>
                        Codigo: <strong>${objeto.estudiantes[posicion].codigo}</strong><br>
                        Nombre: <strong>${objeto.estudiantes[posicion].nombre}</strong><br>
                        Nota: <strong>${mayor}</strong>`
        },
        menorNota : function(){
            let menor=Infinity,
                posicion=0
            for(let i=0; i<total; i++){
                if(parseInt(objeto.estudiantes[i].nota)<menor){
                    menor=parseInt(objeto.estudiantes[i].nota)
                    posicion=i
                }
            }
            titulo.innerHTML = "Menor Nota"
            resultado.innerHTML = `
                        Foto:<br> <img src="images/${objeto.estudiantes[posicion].codigo}.jpg" class="foto" /><br>
                        Codigo: <strong>${objeto.estudiantes[posicion].codigo}</strong><br>
                        Nombre: <strong>${objeto.estudiantes[posicion].nombre}</strong><br>
                        Nota: <strong>${menor}</strong>`
        }   
    }


MyApp.detalleInicial()



















































