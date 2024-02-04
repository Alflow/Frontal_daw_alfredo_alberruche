import Error404 from "./404/Error404.js";
import Home from "./Pages/Home/Home.js";
import Page2 from "./Pages/Page2/Page2.js";



export default function Router(){
   
    
    switch(location.hash){
        case "":         

        case "#home": {
            return Home();
        }
        break;

        case "#aSite2" : {
           return Page2();
        }
        break;

        default : {
            return Error404();
        }
        
    }
}