let input=document.querySelector('#inputbox');
let btn=document.querySelector('#button-btn');
let list=document.querySelector('#list');

btn.addEventListener('click',()=>{
    let value=input.value;
    let li=document.createElement("li");
    if(value.trim()!=""){
        li.innerText=value;
        list.appendChild(li);
        input.value="";
    
    let deletebtn=document.createElement('button');
    deletebtn.textContent="Delete";
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click',()=>{
        list.removeChild(li);
    })
    li.appendChild(deletebtn);
    let editbtn=document.createElement('button');
    editbtn.textContent="Edit";
    editbtn.classList.add('edit-btn');
    editbtn.addEventListener('click',()=>{
       input.value=value;
       list.removeChild(li);
    })
    li.appendChild(editbtn);
    }
    else
    alert("Enter Task");
})