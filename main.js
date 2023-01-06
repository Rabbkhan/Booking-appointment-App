let Name = document.getElementById('Name');
let Ph = document.getElementById('phone');
let btn = document.querySelector('.btn');

btn.addEventListener('click', e =>{
    e.preventDefault();

localStorage.setItem('Name', Name.value);
localStorage.setItem('Phone', Ph.value);
})