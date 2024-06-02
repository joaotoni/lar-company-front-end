import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='bg-[#47867C] p-4 flex justify-between items-center'>
      <div>
        <h3>REGISTRA1ONT</h3>
      </div>
      <div className='flex text-white items-center gap-4'>
        <img onClick={() => navigate('/home')} src="/logo.png" className='w-8/12 cursor-pointer' />
      </div>
    </header>
  )
}