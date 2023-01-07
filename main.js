let Name = document.getElementById('Name');
let Ph = document.getElementById('phone');
let email = document.getElementById('email');
let btn = document.querySelector('.btn');

btn.addEventListener('click', e =>{
    e.preventDefault();
let username = Name.value;
let Email = email.value;
let  phone = Ph.value;

const obj ={
    username,
    Email,
    phone
}
localStorage.setItem(obj.Email, JSON.stringify(obj));

showUserScreen(obj);
})
function showUserScreen(obj){

    const parentElem = document.getElementById('listItem');
    parentElem.innerHTML = parentElem.innerHTML +`<li>${obj.username} - ${obj.Email} - ${obj.phone} </li> <input type="button" id="delete" value="Delete">`;
    let ID = document.getElementById('delete');
    ID.addEventListener('click', e =>{
           parentElem.remove();
            localStorage.removeItem(obj.Email);
        
    })
    
}

