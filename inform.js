const button = document.getElementById('myButton');
const messageArea = document.getElementById('messageArea');

// Add a 'click' event listener to the button
button.addEventListener('click', () => {
    // When the button is clicked, change the message area's text
    messageArea.textContent = 'byebye';
})