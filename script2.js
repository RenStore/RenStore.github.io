const form = document.querySelector('#form');
const notif = document.querySelector('#notif');



form.addEventListener('submit', (e)=>{
    e.preventDefault(); 

    const input1 = form.input1.value;
    const input2 = form.input2.value;
    const input3 = form.input3.value;
    const input4 = form.input4.value;
    const input5 = form.input5.value;

    const pola = /^[a-zA-z]$/;

    if (pola.test(input1)){
        notif.textContent = '';
    }
    else {
        notif.textContent = 'Nama Tidak Valid';
    }
});

