
var xmark = document.getElementById(`xmark`)
var bars = document.getElementById(`bars`)
var nav = document.getElementById(`nav`)


function navbar(n){
            

    if( n === `abrir`){
        nav.style.display = `flex`
        bars.style.display = `none`
        xmark.style.display = `block`

    }
    
}

function fechar(){

    alert(`cheguei`)

    nav.style.display = `none`
    xmark.style.display = `none`
    bars.style.display = `block`
}