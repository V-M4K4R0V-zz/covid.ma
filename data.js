const corona_Api = 'https://tram-production.com/covid-api/api.php?fbclid=IwAR0LVs9STV_Du2BNAkzgxD98KkJlqLc1a2TyibZFiS2tTzlZ32r7DKKfxAo'

const gets = document.getElementById('gapi');

const jsonData = () => {
    fetch('https://tram-production.com/covid-api/api.php?fbclid=IwAR0LVs9STV_Du2BNAkzgxD98KkJlqLc1a2TyibZFiS2tTzlZ32r7DKKfxAo').then(response => {
        console.log(response)
    });
};

const sendData = () => {};

gets.addEventListener('click', jsonData);
gets.addEventListener('click', sendData);