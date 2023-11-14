const form = document.querySelector('#form');
const notif = document.querySelector('#notif');
const notif2 = document.querySelector('#notif2');
const notif3 = document.querySelector('#notif3');
const notifumur = document.querySelector('#notifumur');


//form.addEventListener('submit', (e)=>{
   // e.preventDefault(); 

    const input1 = form.input1.value;
    const input2 = form.input2.value;
    const input3 = form.input3.value;

    const polanama = /^[a-zA-Z ]{1,100000}$/;
    const polaumur = /^[0-9]{1,3}$/;
    const dibawahumur = input2 < 18;
    const diatasumur = input2 < 1;
    const polanomer = /^[0-9]{11,13}$/;

    if(polanama.test(input1)){
        notif.textContent = '';
    }
    else {
        notif.textContent = 'Nama Tidak Valid';
    }
    if (dibawahumur){
        notifumur.textContent = '';
        if(diatasumur){
            notifumur.textContent = ''
        }
        else {
            notifumur.textContent='Maaf anda Dibawah Umur'
        }
    }
    else {
        notifumur.textContent = '';
    }
    if(polaumur.test(input2)){
        notif2.textContent = '';
    }
    else{
        notif2.textContent = 'Umur Tidak Valid';
    }
    if(polanomer.test(input3)){
        notif3.textContent = '';
    }
    else {
        notif3.textContent = 'Nomer Tidak Valid';
    }
});



