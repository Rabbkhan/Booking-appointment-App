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
// localStorage.setItem(obj.Email, JSON.stringify(obj));
axios.post('https://crudcrud.com/api/638ed1a414c34c5783ccdb0659765304/appoitmentData', obj)
.then(res=>{
    showUserScreen(res.data)
    console.log(res)
})
.catch(err=>{
    console.error(err)
})

showUserScreen(obj);
})
function showUserScreen(obj){

    const parentElem = document.getElementById('listItem');

    let childElem = document.createElement('li');
     childElem.textContent = obj.username + ' - '  + obj.Email + ' - ' + obj.phone;
     
   parentElem.appendChild(childElem);


   let DeleteButton = document.createElement('input');
   DeleteButton.type = 'button',
   DeleteButton.value = 'Delete'

   DeleteButton.onclick = () =>{
    localStorage.removeItem(obj.Email);
    parentElem.removeChild(childElem);
   }
   let editButton = document.createElement('input');
   editButton.type = 'button',
   editButton.value = 'Edit'

   editButton.onclick = () =>{
    localStorage.removeItem(obj.Email);
    parentElem.removeChild(childElem);

    Name.value = obj.username;
    Ph.value = obj.phone;
    email.value = obj.Email;

   }



    childElem.appendChild(DeleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}

