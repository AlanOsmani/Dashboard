import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar, ThemeSettings} from "./components";
import {Inicio, AsignarTarea, Calendario, ChatTexto, ColorPicker, Configuracion, Entregas,Kanban, Proyecto, VideoChat} from "./pages";
import { useStateContext } from './contexts/Provider';
import './App.css';


export const App = () => {
  const {activeMenu} =  useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}> 
            <TooltipComponent content="Settings" position= "Top">
                <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{background: 'blue',
                borderRadius: '50%'}} >
                  <FiSettings />
                </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark: secondary-dark-bg">
              <Sidebar />
            </div>
            
          )}
          <div className={
              `dark:bg-main-bg bg-main-bg min-h-screen  w-full  ${activeMenu ? 'md:ml-72' : 'flex-2'}`

          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard (Panel) */}
              <Route path='/' element = {<Inicio />} />
              <Route path='/Inicio ' element = {<Inicio />} />
 
              {/* Pagina */}
              <Route path='/Asignar-Tarea' element= {<AsignarTarea />} />
              <Route path='/Entregas' element= {<Entregas />} />
              <Route path='/Proyecto' element= {<Proyecto />} />
              <Route path='/Configuracion' element= {<Configuracion />} />

              {/* Apps */}
              <Route path='/Kanban' element= {<Kanban />} />
              <Route path='/Calendario' element= {<Calendario />} />
              <Route path='/Chat' element= {<ChatTexto />} />
              <Route path='/VideoChat' element= {<VideoChat />} />              
              <Route path='/Color-picker' element= {<ColorPicker />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
