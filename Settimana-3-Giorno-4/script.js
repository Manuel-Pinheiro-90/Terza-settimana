

const tabellone = document.getElementById('Tabellone');

const creaTabellone = function () {
    for (let i = 1; i < 91; i++) {
        const casella = document.createElement('div');
        casella.textContent = i;
        casella.classList.add('casella')
        tabellone.appendChild(casella)
    }
}
creaTabellone()


const selezionaNumeroCasuale = function () {
const caselleTabellone = document.querySelectorAll('.casella');
const indexCasellaCasuale = Math.floor(Math.random()* caselleTabellone.length);
const casellaCasuale = caselleTabellone[indexCasellaCasuale];
casellaCasuale.classList.add('selezionata')

};

const BottoneEstrazione = document.getElementById('Estrazione');
BottoneEstrazione.addEventListener('click', function(){
    selezionaNumeroCasuale()})






