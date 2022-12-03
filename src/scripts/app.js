const btnRef = document.querySelector( '#showCode');
const codeRef = document.querySelector('.show-code__code');

function toggleText(){
    if (btnRef.innerText === 'POKAŻ KOD'){
btnRef.innerText = 'SCHOWAJ KOD';
    }else {
        btnRef.innerText = 'POKAŻ KOD';
    }
}

btnRef.addEventListener('click', function (){
    toggleText();
    codeRef.classList.toggle('show-code__code--hidden');
});

