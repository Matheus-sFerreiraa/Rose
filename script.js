function esconderTodas(){
    secaoBolos.style.display = 'none';
    secaoSalgados.style.display = 'none';
    secaoBisco.style.display = 'none';
}

//Section Salgados

const btnVerSalgados = document.getElementById('verSalg');
const secaoSalgados = document.querySelector('.salgados');

    btnVerSalgados.addEventListener('click', function(event) {
        event.preventDefault();
        esconderTodas();
        secaoSalgados.style.setProperty('display', 'block', 'important');
        secaoSalgados.scrollIntoView({ behavior: 'smooth' });
        });

//Section Bolos

const btnVerBolos = document.getElementById('verBolos')
const secaoBolos = document.querySelector('.bolos')

btnVerBolos.addEventListener('click', function(event) {
    event.preventDefault();
    esconderTodas();
    secaoBolos.style.setProperty('display', 'block', 'important');
    secaoBolos.scrollIntoView({ behavior: 'smooth'});
})

// Section Biscoitos

const btnVerBisco = document.getElementById('verBisco')
const secaoBisco = document.querySelector('.biscoitos')

btnVerBisco.addEventListener('click', function(event){
    event.preventDefault();
    esconderTodas();
    secaoBisco.style.setProperty('display', 'block', 'important')
    secaoBisco.scrollIntoView({ behavior : 'smooth'})
})





console.log("Hello World")

print('Hello World')