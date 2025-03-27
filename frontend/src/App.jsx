import { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de ter o axios instalad
import Navbar from './componentes/navbar';
import './index.css';


function App() {
  const [diretores, setDiretores] = useState([]); // Estado para armazenar diretores
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Função para buscar os diretores do backend
  const fetchDiretores = async () => {
    try {
      const response = await axios.get('http://localhost:3000/diretores');
      setDiretores(response.data); // Armazena os diretores no estado
    } catch (error) {
      console.error('Erro ao buscar diretores:', error);
    }
  };

  // Usando useEffect para chamar a função de fetch assim que o componente for montado
  useEffect(() => {
    fetchDiretores(); // Chama a função para buscar os diretores
  }, []);

  // Função de envio do formulário (para cadastro de diretor)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const diretor = { nome, email, telefone };

    try {
      const response = await axios.post('http://localhost:3000/diretores', diretor);
      console.log('Diretor cadastrado:', response.data);
      setNome('');
      setEmail('');
      setTelefone('');
      fetchDiretores(); // Atualiza a lista de diretores após cadastro
    } catch (error) {
      console.error('Erro ao cadastrar diretor:', error);
    }
  };

  return (
    <div className="bg-black h-screen w-screen">
          <Navbar/>
      {/* Formulário de Cadastro de Diretor */}
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="text-center font-bold text-orange-500 text-2xl py-3">
            Cadastro do diretor
          </h2>

          <div className="py-3">
            <label className="text-orange-500 font-bold">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="h-10 w-screen rounded-full"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="py-3">
            <label className="text-orange-500 font-bold">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="h-10 w-screen rounded-full "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="py-3">
            <label className="text-orange-500 font-bold">Telefone</label>
            <input
              type="tel"
              placeholder="Digite seu telefone"
              className="h-10 w-screen rounded-full"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="flex text-center justify-center pt-10">
            <button
              type="submit"
              className="bg-orange-500 h-14 w-36 rounded-full hover:bg-orange-300 hover:h-16 hover:w-40"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
