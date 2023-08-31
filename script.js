// Cibler les elements
let changer = document.querySelector('#changer');
let form = document.querySelector('#form');
let input = document.querySelector('input');
let button = document.querySelector('#button');

//Au click sur <changer> je fait apparaitre le bloc de dialogue pour choisir une ville
changer.addEventListener('click', () => {
    form.style.display = 'block';

})

// Evenement permettant qu'à la soumission du form la ville choisie apparait ainsi que sa temperatur actuelle 

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

// Je récupère ici la ville    
    let villeChoisie = input.value;
    console.log(villeChoisie);

    // J'utilise la valeur de villeChoisie dans notre requête apiMeteo .

    const apiMeteo = 'https://api.openweathermap.org/data/2.5/weather?q=' + villeChoisie + '&appid=400c80f8890ab1a410282142cf30aecc&units=metric';

    let requete = new XMLHttpRequest();
    requete.open('GET', apiMeteo);
    requete.responseType = 'json';
    requete.send();


    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                // Si j'ai bien une réponse 200 , je peux mettre à jour le DOM avec la ville choisie ainsi que sa température actuelle 
                let reponse = requete.response;
                let temp = reponse.main.temp;
                document.querySelector('#temperature_label').textContent = temp;
                document.querySelector('#ville').textContent = villeChoisie;
                console.log(temp);
            }
        }
    }

});



