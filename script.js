const home = document.querySelector('.hem');
const about = document.querySelector('.about');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');



function showAbout() {
    about.style.display = 'block'
    home.style.display = 'none'
    work.style.display = 'none'
    contact.style.display = 'none'
}
function showContact() {
    contact.style.display = 'block'
    about.style.display = 'none'
    home.style.display = 'none'
    work.style.display = 'none'
}
function showWork() {
    work.style.display = 'block'
    about.style.display = 'none'
    home.style.display = 'none'
    contact.style.display = 'none'
}



