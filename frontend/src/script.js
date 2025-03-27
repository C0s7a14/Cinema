let url = 'http://localhost:3000/diretores'


async function insereDado(){
    const inpuy = document.querySelector("#nome").value
    fetch(url,
        {
            method: "POST",
            body:{
                nome: input
            }
        })
}


async function carregaDados(e){

    try{
        const response = await fetch (url);

        const data = await response.json();
        console.log(data);

        const diretores = data;

        const geradorDeDiretor = document.getElementById(diretores)

        geradorDeDiretor.innerHTML = diretores.map((item)=> {
            return `
            <div class ="diretorCine">
            <h2>${item.nome}</h2>
            </div>
            `;
        }).join('');
    }catch(error){
    console.error('erro ao buscar dados: ', error)
    }
}
document.querySelector('#adicionarDiretor').addEventListener('click', insereDado)
document.getElementById('loadDiretores').addEventListener('click', carregaDados);