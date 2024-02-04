import AppSPA from './app/App.js'

document.addEventListener('DOMContentLoaded',()=>{
    AppSPA();
})

window.addEventListener("hashchange", ()=>{
    AppSPA();
})