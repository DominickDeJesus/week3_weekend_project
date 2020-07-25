console.log("Yo what up my boy?");
console.log("feeling good fam!");


let id = 0;
let formEl = document.querySelector('form');
let chatboxEl = document.querySelector('#chatbox');
let inputEl = document.querySelector('input');

//console.log(chatboxEl.innerText);

formEl.addEventListener("submit", (event) =>
{   
    event.preventDefault();
    let msg = event.target[0].value;
    let messageEl = document.createElement('div');
    chatboxEl.innerHTML = chatboxEl.innerHTML + getMessageCont(msg);
    event.target[0].value = '';
});


function getMessageCont(msg){
  return `<div class='message'><span>${getTime()}</span><span class='sender'>${getPronoun()}:</span><span>${msg}</span><span class='delete'>❌</span>`
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