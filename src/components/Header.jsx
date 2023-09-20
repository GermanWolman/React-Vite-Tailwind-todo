import { useEffect, useState } from 'react';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const initialDarkMode = document.documentElement.className.includes('dark');
//const initialDarkMode = localStorage.getItem('theme') === true; //es lo mismo

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialDarkMode);
    // cada vez que necesitemos actualizar un codigo que esté en el useState podemos usar useEffect

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark'); // agrega al html la calse dark
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]); // aca le puedo indicar entre corchetes que cosa es lo que se actualiza
    //si lo dejo vacío [] sólo se actualiza una vez...
    return (
        <header className="container mx-auto px-4">
            <div className="flex justify-between">
                <h1 className="pt-8 text-3xl font-semibold uppercase tracking-[0.3em] text-white ">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
