let Name = document.getElementById('username');
let Ph = document.getElementById('phonenumber');
let email = document.getElementById('email');
let btn = document.querySelector('.btn');

btn.addEventListener('click', e =>{
    e.preventDefault();
let username = Name.value;
let Email = email.value;
let phone = Ph.value;
console.log(btn);

const obj ={
    username,
    Email,
    phone
}
// localStorage.setItem(obj.Email, JSON.stringify(obj));
axios.post('https://crudcrud.com/api/38361136781b4d6699ae4ba73cecbeab/appoitmentData', obj)
.then(res=>{
    showUserScreen(res.data)
    console.log(res)
})
.catch(err=>{
document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong </h4>";
console.error(err)
})




window.addEventListener('DOMContentLoaded', ()=>{
axios.get('https://crudcrud.com/api/38361136781b4d6699ae4ba73cecbeab/appoitmentData')
.then(res=>{
    console.log(res);
    for(var i=0; i<res.data.length; i++){
        showUserScreen(res.data[i]);
    }
})
.catch(err =>{
    console.log(err);
})

})




function showUserScreen(obj){
    

    const parentElem = document.getElementById('listOfitems');

    let childElem = document.createElement('li');
     childElem.textContent = `${obj.username} ${obj.Email}  ${obj.phone}`;
     
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

})