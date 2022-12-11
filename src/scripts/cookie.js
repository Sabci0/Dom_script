const acceptRef = document.querySelector('[data-js="accept"]');
const cookieBarRef = document.querySelector('[data-js="cookie-bar"]')

function checkCookieAccept(){
    const cookiesAccept = localStorage.getItem('cookies')
    if (!cookiesAccept){
     cookieBarRef.classList.add('active')
    }
}

checkCookieAccept();

acceptRef.addEventListener('click', function (){
    cookieBarRef.classList.remove('active')
    localStorage.setItem('cookies', 'true')


})

