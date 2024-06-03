import { Dropdown } from 'flowbite-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const isActive = useCallback((thePath: any) => {
    return location.pathname.startsWith(thePath)
  }, [location.pathname])
  return (
    <header className='bg-[#47867C] p-4 flex justify-between items-center mx-5px'>
      <div className='bg-white w-[80px] h-[30px] items-center text-center rounded-md flex justify-center'>
        <Dropdown className='bg-white p-1'
          label='Menu'
          arrowIcon={false}
          inline
        >
          <Dropdown.Item className={`bg-neutral-300 hover:bg-red-500 text-black hover:text-gray dark:text-black mb-1 ${isActive('/clientes') ? 'bg-red text-white dark:text-white' : ''}`}
            onClick={() => navigate('/cadastro-de-pessoa')}>
            Cadastrar Pessoa
          </Dropdown.Item>
          <Dropdown.Item className={`bg-neutral-300 hover:bg-red-500 text-black hover:text-gray dark:text-black mb-1 ${isActive('/clientes') ? 'bg-red text-white dark:text-white' : ''}`}
            onClick={() => navigate('/clientes')}>
            Listar Pessoas Cadastradas
          </Dropdown.Item>
          <Dropdown.Item className={`bg-neutral-300 hover:bg-red-500 text-black hover:text-gray dark:text-black mb-1 ${isActive('/clientes') ? 'bg-red text-white dark:text-white' : ''}`}
            onClick={() => navigate('/cadastro-de-telefone')}>
            Cadastrar telefone
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        <h2 className='font-bold text-white text-[22px]'> REGISTRAT1ONT</h2>
      </div>
      <div className='flex text-white items-center gap-4'>
        <img onClick={() => navigate('/')} src="/imgs/logo.png" className='w-[80px] cursor-pointer' />
      </div>
    </header>
  )
}