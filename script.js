let icon = document.getElementById('icon')
let nav_bar = document.getElementById('nav-bar')


function hamburger(){
    nav_bar.style.display = 'none'
    icon.style.display = 'block'
    
    if(nav_bar.style.display == 'none'){
        nav_bar.style.display = 'flex'
        icon.style.display = 'none'
    }
}
function repor(){
    nav_bar.style.display = 'none'
    icon.style.display = 'block'
}