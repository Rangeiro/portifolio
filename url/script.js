



const home =document.getElementById(`home`)
const sobre =document.getElementById(`sobre`)
const serviços =document.getElementById(`serviços`)
const portifolio =document.getElementById(`portifolio`)
const contactos =document.getElementById(`contactos`)

let btn1 = document.getElementById(`btn1`)
let btn2 = document.getElementById(`btn2`)
let btn3 = document.getElementById(`btn3`)
let btn4 = document.getElementById(`btn4`)
let btn5 = document.getElementById(`btn5`)

let home_btn =document.getElementById(`home_btn`)
let sobre_btn =document.getElementById(`sobre_btn`)
let serviços_btn =document.getElementById(`serviços_btn`)
let portifolio_btn =document.getElementById(`portifolio_btn`)
let contactos_btn =document.getElementById(`contactos_btn`)

let idioma_ul = document.getElementsByClassName(`idioma`) 
let port = document.getElementById(`port`)
let eng = document.getElementById(`eng`)



function ajustar(){

    let home_size =home.getBoundingClientRect()
    let sobre_size =sobre.getBoundingClientRect()
    let serviços_size =serviços.getBoundingClientRect()
    let portifolio_size =portifolio.getBoundingClientRect()
    let contactos_size =contactos.getBoundingClientRect()


    if(home_size.top <= 0 < home_size.bottom){

        home_btn.style.color = `#418e82`
        sobre_btn.style.color = `#ffffff`
        serviços_btn.style.color = `#ffffff`
        portifolio_btn.style.color = `#ffffff`
        contactos_btn.style.color = `#ffffff`
        
        btn5.style.background = `transparent`
        
        btn1.style.border = `2px solid #418e82`
        btn2.style.border = `2px solid #418e82`
        btn3.style.border = `2px solid #418e82`
        btn4.style.border = `2px solid #418e82`
        btn5.style.border = `2px solid #418e82`
        
        port.style.background = `#418e82`
        port.style.border = `2px solid #418e82`
        eng.style.border = `2px solid #418e82`
        logo.style.border = `2px solid #418e81`
        
    }
    else if( sobre_size.top <= 0 < sobre_size.bottom){

        home_btn.style.color = `#ffffff`
        sobre_btn.style.color = `#35bdd6`
        serviços_btn.style.color = `#ffffff`
        portifolio_btn.style.color = `#ffffff`
        contactos_btn.style.color = `#ffffff`
        
        btn5.style.background = `transparent`


        
        btn1.style.border = `2px solid #35bdd6`
        btn2.style.border = `2px solid #35bdd6`
        btn3.style.border = `2px solid #35bdd6`
        btn4.style.border = `2px solid #35bdd6`
        btn5.style.border = `2px solid #35bdd6`
        
        port.style.background = `#35bdd6`
        port.style.border = `2px solid #35bdd6`
        eng.style.border = `2px solid #35bdd6`
        logo.style.border = `2px solid #35bdd6`
        
    }
    else if( serviços_size.top <= 0 < serviços_size.bottom){
        
        home_btn.style.color = `#ffffff`
        sobre_btn.style.color = `#ffffff`
        serviços_btn.style.color = `#FF725E`
        portifolio_btn.style.color = `#ffffff`
        contactos_btn.style.color = `#ffffff`
        
        btn5.style.background = `transparent`

        btn1.style.border = `2px solid #FF725E`
        btn2.style.border = `2px solid #FF725E`
        btn3.style.border = `2px solid #FF725E`
        btn4.style.border = `2px solid #FF725E`
        btn5.style.border = `2px solid #FF725E`
        
        port.style.background = `#FF725E`
        port.style.border = `2px solid #FF725E`
        eng.style.border = `2px solid #FF725E`
        logo.style.border = `2px solid #FF725E`
        
    }
    else if( portifolio_size.top <= 0 < portifolio_size.bottom){
        
        home_btn.style.color = `#ffffff`
        sobre_btn.style.color = `#ffffff`
        serviços_btn.style.color = `#ffffff`
        portifolio_btn.style.color = `#438BDD`
        contactos_btn.style.color = `#ffffff`
        
        btn5.style.background = `transparent`

        btn1.style.border = `2px solid #438BDD`
        btn2.style.border = `2px solid #438BDD`
        btn3.style.border = `2px solid #438BDD`
        btn4.style.border = `2px solid #438BDD`
        btn5.style.border = `2px solid #438BDD`

        port.style.background = `#438bdd`
        port.style.border = `2px solid #438bdd`
        eng.style.border = `2px solid #438bdd`
        eng.style.color = `#ffffff`
        logo.style.border = `2px solid #438bdd`
        logo.style.color = `#ffffff`
        
    }
    else if( contactos_size.top <= 0 < contactos_size.bottom){
        
        home_btn.style.color = `#445963`
        sobre_btn.style.color = `#445963`
        serviços_btn.style.color = `#445963`
        portifolio_btn.style.color = `#445963`
        contactos_btn.style.color = `#445963`

        btn5.style.background = `#f5f5f5`

        btn1.style.border = `2px solid #445963`
        btn2.style.border = `2px solid #445963`
        btn3.style.border = `2px solid #445963`
        btn4.style.border = `2px solid #445963`
        btn5.style.border = `2px solid #445963`

        port.style.background = `#445963`
        port.style.border = `2px solid #445963`
        eng.style.border = `2px solid #445963`
        eng.style.color = `#445963`
        logo.style.border = `2px solid #445963`
        logo.style.color = `#444963`
        
    }
    
}