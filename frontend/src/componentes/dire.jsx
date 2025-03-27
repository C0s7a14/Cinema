import Navbar from "./navbar"
import App from "../App"


function Dire (){
    return (
        <div>
         <div>
         <Navbar/>
         </div>
        <h2 className="flex text-orange-500 text-center justify-center font-bold py-4 text-3xl">
          Diretores cadastrados
        </h2>
        <h3 className="text-orange-500 font-bold text-2xl text-center">Nossos diretores</h3>

        <div className="py-4 ">
          {diretores.length > 0 ? (
            <ul className="text-white">
              {diretores.map((diretor) => (
                <li key={diretor.id} className="py-2 border-2 border-orange-500">
                  <strong>{diretor.nome}</strong> - {diretor.email} - {diretor.telefone}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">Nenhum diretor cadastrado.</p>
          )}
        </div>
      </div>

    )
}
export default Dire