import React, {useEffect} from 'react'
import { AiOutlineAim, AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNavigationLine, RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import  avatar from "../data/avatar.jpg"
import {Cart,Chat, Notificacion, PerfilUsuario} from ".";
import { useStateContext } from '../contexts/Provider'; 
import { HandWrittenSignatureSettings } from '@syncfusion/ej2/pdfviewer';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position='BottomCenter'>
       <button type='button' onClick={customFunc} style = {{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'> 
          <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
            {icon}
       </button>
    </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu,setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();

  useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title="Menu" customFunc={handleActiveMenu} color= {currentColor} icon= {<AiOutlineMenu/>} />
        <div className='flex'> 
            <NavButton title="Chat" customFunc={() => handleClick('chat')} color= {currentColor} icon= {<BsChatLeft/>} />  
            <NavButton title="Notificaciones" customFunc={() => handleClick("notificacion")} color= {currentColor} icon= {<RiNotification3Line/>} />
            <TooltipComponent content= "Profile" position='BottomCenter'>
              <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('perfilUsuario')}>
                  <img  className='rounded-full w-8 h-8' src = {avatar} />
                  <p>
                    <span className='text-gray-400  text-14'> Hola, </span>
                    <span className='text-gray-400 font-bold ml-1 text-14'> Alan</span>
                  </p>
                  <MdKeyboardArrowDown className='text-gray-400  text-14'/>

              </div>
            </TooltipComponent>
            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notificacion && <Notificacion />}
            {isClicked.perfilUsuario && <PerfilUsuario />}



        </div>

         
    </div>
  )
}
 export default Navbar;