

//faccio partire  listner, parte quando la pagina è stata caricata 'DOMContentLoaded'

document.addEventListener('DOMContentLoaded', function () {  
    const moduloTask = document.getElementById('moduloTask');
    const inputTask = document.getElementById('inputTask');
    const listaTask = document.getElementById('listaTask');


    moduloTask.addEventListener('submit', function (event) {
        event.preventDefault();
        const testoTask = inputTask.value.trim(); //trim mi rimuove gli spazzi vuoti
        if (testoTask !== '') { //questo mi controlla che non è vuoto,  se non è vuoto mi aggiunge il task a regola
            aggiungiTask(testoTask);
            inputTask.value = ''; //dopo di che mi si resetta con la valeu ='' ovvero vuoto
        }
    });
//questo mi va a creare gli elementi  li=task oioi maronn
    function aggiungiTask(testo) {
        const elementoTask = document.createElement('li');
        elementoTask.textContent = testo; //ok questo mi passa  il testonella task che in realtà è appunto un nuovo elemento lista
        
//qui inizio a creare il bottone elimina
        const bottoneElimina = document.createElement('button');
const iconaCestino = document.createElement('i');
       
        iconaCestino.classList.add('fas', 'fa-trash-alt') //ho aggiunto l'icona yeeeaaahhh
        bottoneElimina.appendChild(iconaCestino)//appendo l'icona qui
        

        bottoneElimina.classList.add('delete')
        bottoneElimina.addEventListener('click', function () { 
            elementoTask.remove();
            //vado a rimuovere la task ...


        });

         
        elementoTask.addEventListener('click', function () { //quando clicco sopra sblocco il  per la riga css
            elementoTask.classList.toggle('completato');// mi devo ricordare  che toggle toglie e mette la roba 
        });

        elementoTask.appendChild(bottoneElimina); //e cosi butto il bottone nella task creata 
        listaTask.appendChild(elementoTask); //questo mi appende sto bambino alla lista Task su html
    }

    
    
    ///HO SCOPIAZZATO A DESTRA A MANCA CHE SI SAPPIA!!!!!!!
    
});
