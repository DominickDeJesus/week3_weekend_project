let id = 0;
let formEl = document.querySelector('form');
let chatboxEl = document.querySelector('#chatbox');
let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
let apiURL = `https://api.icndb.com/jokes/random`;

formEl.addEventListener("submit", (event) =>
{   
    event.preventDefault();
    let msg = event.target[0].value;
    chatboxEl.innerHTML = chatboxEl.innerHTML + getMessageCont(msg);
    event.target[0].value = '';
});

buttonEl.addEventListener('click', event => {
    fetch(apiURL).then(response => {return response.json()}
    ).then(function addJoke(data){
        event.preventDefault();
        chatboxEl.innerHTML = chatboxEl.innerHTML + getMessageCont(data.value.joke);
    }
    )
})

function delEl(elId){
    document.getElementById(`${elId}`).remove();
}

function getMessageCont(msg){
    id++;
  return `<div class='message' id='${id}'><span>${getTime()}</span><span class='sender'>${getPronoun()}:</span><span>${msg}</span><span class='delete' onclick='delEl(${id})'>❌</span>`
  }
 
function getTime(){
  let options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeStyle: 'short'
  };
  return new Date().toLocaleTimeString('en-US', options);
}

function getPronoun(){
   let pronouns = ['Me', 'Myself', 'I'];
   return pronouns[Math.round((Math.random()*2))];
 }