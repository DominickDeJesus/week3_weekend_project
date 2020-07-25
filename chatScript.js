//message tag id
let id = 0;

//html nodes
let formEl = document.querySelector('form');
let chatboxEl = document.querySelector('#chatbox');
let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
//api request
let apiURL = `https://api.icndb.com/jokes/random`;

/* Event handlers */
//when enter is hit add message
/**Listens for submit or enter to put message in chatbox*/
formEl.addEventListener("submit", (event) =>
{   
    event.preventDefault();
    let msg = event.target[0].value;
    chatboxEl.innerHTML = chatboxEl.innerHTML + getMessageCont(msg);
    setScrollBottom();
    event.target[0].value = '';
});

/**Listens for delete buttom to bit hit, then removes message*/
buttonEl.addEventListener('click', event => {
    fetch(apiURL).then(response => {return response.json()}
    ).then(function addJoke(data){
        event.preventDefault();
        chatboxEl.innerHTML = chatboxEl.innerHTML + getMessageCont(data.value.joke);
        setScrollBottom();
      })
})


/* Utillity funtions */


function delEl(elId){
    document.getElementById(`${elId}`).remove();
}

/** Creates the inner HTML content to be placed in the message div tag
 * @param {*} msg The input message from the users.
 * @returns A string containing html content.
 */
function getMessageCont(msg){
    id++;
  return `<div class='message' id='${id}'><span>${getTime()
  }</span><span class='sender'>${getPronoun()
  }:</span><span>${msg}</span><span class='delete' onclick='delEl(${id
  })'>×</span>`
}
  

/**Sets the view to the bottom of the scroll box */
function setScrollBottom(){
  chatboxEl.scrollTop = chatboxEl.scrollHeight - chatboxEl.clientHeight;
}

/**Get time in the form of hr:min.
 * @returns a string representing the time. 
 */
function getTime(){
  let options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeStyle: 'short'
  };
  let time = new Date().toLocaleTimeString('en-US', options);
  return time.substring(0, time.length - 2);
}

/**Get a random pronoun of either Me, Myself, or I. 
 * @returns a string of the pronoun. 
 */
function getPronoun(){
   let pronouns = ['Me', 'Myself', 'I'];
   return pronouns[Math.round((Math.random()*2))];
}