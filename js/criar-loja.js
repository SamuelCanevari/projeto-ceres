const urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const estado = document.getElementById("input-estado");
const cidade = document.getElementById("input-cidade");


window.addEventListener('load', async ()=>{
    const request = await fetch(urlEstados);
    const response = await request.json();
    
    const options = document.createElement("optgroup");
    options.setAttribute('label', 'Estados');
    
    var arrayEstados = [];
    response.forEach(function(uf){
        arrayEstados.push(uf.nome);
    })
    var arrayEstadosOrdenados = arrayEstados.sort();
    
    arrayEstadosOrdenados.forEach(function(nome){
        response.forEach(function(uf){
            if(uf.nome == nome){
                options.innerHTML += "<option value='"+uf.sigla+"'>"+nome+"</option>"
            }
        })
    })
    estado.append(options);
})

estado.addEventListener('change', async function(){
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estado.value+'/municipios';
    const request = await fetch(urlCidades);
    const response = await request.json();

    const options = document.createElement("optgroup");
    options.setAttribute('label', 'Cidades');

    var arrayCidades = [];
    response.forEach(function(cidade){
        arrayCidades.push(cidade.nome);
    })

    var arrayCidadesOrdenadas = arrayCidades.sort();
    cidade.innerHTML = ""
    cidade.innerHTML = "<option value='' disabled selected>- Selecione -</option>"

    arrayCidadesOrdenadas.forEach(function(cidade){
        options.innerHTML += "<option>"+cidade+"</option>"
    })

    cidade.append(options)
})




