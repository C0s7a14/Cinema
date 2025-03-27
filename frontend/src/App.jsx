import { useState } from 'react';
import './index.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    const diretor = { nome, email, telefone };

    try {
      // Enviar dados para o back-end
      const response = await axios.post('http://localhost:3000/diretores', diretor);
      console.log('Diretor cadastrado:', response.data);
      // Resetar os campos após o cadastro
      setNome('');
      setEmail('');
      setTelefone('');
    } catch (error) {
      console.error('Erro ao cadastrar diretor:', error);
    }
  };

  return (
    <div className='bg-black h-screen w-screen'>
      <div className='grid grid-cols-2 bg-orange-500 w-screen'>
        <img className='w-auto h-24' src="cine.png" alt="Logo" />
        <h1 className='mt-8 font-bold text-2xl text-white'>CineCosta</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <h2 className='text-center font-bold text-orange-500 text-2xl py-3'>Cadastro do diretor</h2>

          <div className='pt-3'>
            <label className='text-orange-500 font-bold'>Nome</label>
            <input
              type="text"
              placeholder='Digite o seu nome'
              className='h-10 w-screen'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className='pt-3'>
            <label className='text-orange-500 font-bold'>E-mail</label>
            <input
              type="email"
              placeholder='Digite seu e-mail'
              className='h-10 w-screen'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='pt-3'>
            <label className='text-orange-500 font-bold'>Telefone</label>
            <input
              type="tel"
              placeholder='Digite seu telefone'
              className='h-10 w-screen'
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className='flex text-center justify-center pt-10'>
            <button type="submit" className='bg-orange-500 h-16 w-40 rounded-full hover:bg-orange-300 hover:h-20 hover:w-44'>
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
