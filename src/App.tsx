import { useState } from 'react';
import AddingProduct from './components/AddingProduct';
import ShoppingCart from './components/ShoppingCart';
import SwitchButton from './components/SwitchButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col justify-center w-screen h-screen px-12 gap-8 dark:bg-zinc-800 transition-colors duration-200 ease-in-out dark:text-yellow-50 font-poppins">
        <div className="flex justify-between items-center h-[20%]">
          <h1 className="text-3xl font-bold py-8">Tienda - El topo</h1>
          <SwitchButton onChange={toggleDarkMode} />
        </div>
        <div className="h-[10%]">
          <AddingProduct />
        </div>
        <div className="h-[70%]">
          <ShoppingCart/>
        </div>
      </div>
    </div>
  )
}

export default App
