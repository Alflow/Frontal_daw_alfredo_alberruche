
import Header from './components/Header/Header.js';
import Router from './components/Router.js';


export default function App(){

    const $root = document.getElementById("root");

    $root.innerHTML= "";
    // Importamos header
    $root.appendChild(Header());
    
    $root.appendChild(Router())

    


}

