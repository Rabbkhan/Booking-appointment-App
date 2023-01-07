let Name = document.getElementById('Name');
let Ph = document.getElementById('phone');
let btn = document.querySelector('.btn');

btn.addEventListener('click', e =>{
    e.preventDefault();
localStorage.setItem('Name', Name.value);
localStorage.setItem('Phone', Ph.value);
})

let details = {

    Name : "Rabbil",
    age: 56
};
let myobj_serialized = JSON.stringify(details);
localStorage.setItem('myobj', myobj_serialized);
