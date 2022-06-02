function addingEventListener() {
    const input = document.getElementById('button');

input.addEventListener('click', clickAlert);

}

function clickAlert() {
    alert('I was clicked!');
  }

addingEventListener();