import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Inicio, AsignarTarea, Calendario, ChatTexto, ColorPicker, Configuracion, Entregas, Kanban, Proyecto, VideoChat, Usuario} from "./pages";
import { useStateContext } from './contexts/Provider';
import './App.css';
import { Switch } from '@syncfusion/ej2/buttons';

export const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter basename="/">
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Settings button (potentially adjust position based on needs) */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar conditional rendering based on activeMenu state */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
            }
          >
            {/* Fixed navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              <Routes>

                {/* Dashboard  */}
                <Route path="/" element={<Inicio />} />

                {/* Paginas */}
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/asignar-tarea" element={<AsignarTarea />} />
                <Route path="/entregas" element={<Entregas />} />
                <Route path="/proyecto" element={<Proyecto />} />
                <Route path="/configuracion" element={<Configuracion />} />
                <Route path="/usuarios" element={<Usuario />} />


                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/chat" element={<ChatTexto />} />
                <Route path="/videoChat" element={<VideoChat />} />
                <Route path="/temas" element={<ColorPicker />} />

                {/* Catch-all route for unmatched paths */}


              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

