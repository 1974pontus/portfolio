const homeBase = document.querySelector('.hem');
const about = document.querySelector('.about');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');



function showAbout() {
    about.style.display = 'block'
    homeBase.style.display = 'none'
    work.style.display = 'none'
    contact.style.display = 'none'
}
function showContact() {
    contact.style.display = 'block'
    about.style.display = 'none'
    homeBase.style.display = 'none'
    work.style.display = 'none'
}
function showWork() {
    work.style.display = 'block'
    about.style.display = 'none'
    homeBase.style.display = 'none'
    contact.style.display = 'none'
}



