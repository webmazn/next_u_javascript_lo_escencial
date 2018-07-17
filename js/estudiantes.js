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
            "nombre" : "Ricardo More Gallegos",
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
        listadoEstudiantes : function(){
            let html= `<table class="tbl_resultados">
                        <tr>
                            <th width="20%">Código</th>
                            <th width="60%">Nombre</th>
                            <th width="20%">Nota</th>
                        </tr>`
            for(let i=0; i<total; i++){
                html += `<tr>
                            <td align="center">${objeto.estudiantes[i].codigo}</td>
                            <td align="left">${objeto.estudiantes[i].nombre}</td>
                            <td align="center">${objeto.estudiantes[i].nota}</td>
                        </tr>`
            }
            html += `</table>`
            titulo.innerHTML = "Listado de Estudiantes"
            resultado.innerHTML = html
        },
        promedioNotas : function(){
            let acumulador=0,
                promedio=0
            for(let i=0; i<total; i++){
                acumulador += parseInt(objeto.estudiantes[i].nota)
            }
            promedio = acumulador / total
            titulo.innerHTML = "Nota Promedio"
            resultado.innerHTML = `Nota: <strong>${promedio}</strong>`
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
                        Codigo: <strong>${objeto.estudiantes[posicion].codigo}</strong><br>
                        Nombre: <strong>${objeto.estudiantes[posicion].nombre}</strong><br>
                        Nota: <strong>${menor}</strong>`
        }   
    }


MyApp.listadoEstudiantes()



















































