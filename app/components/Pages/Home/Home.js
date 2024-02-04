import Profile from "../../Profile/Profile.js";


export default function Home (){
const $home = document.createElement("main");
$home.id = "home";
$home.innerHTML = `<h2> Sección de Home</h2>`;
$home.appendChild(Profile());


return $home;

}