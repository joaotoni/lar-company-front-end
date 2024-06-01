import { useNavigate } from 'react-router-dom';
import logo from '../../../public/imgs/logo.png';
import { IoPerson } from "react-icons/io5";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='bg-[#47867C] p-4 flex justify-between items-center'>
      <div>
        <img onClick={() => navigate('/')} src={logo} className='w-8/12 cursor-pointer' />
      </div>
      <div className='flex text-white items-center gap-4'>
        <h3>REGISTRA1ONT</h3>
        <IoPerson size={30} className='text-white' />
      </div>
    </header>
  )
}