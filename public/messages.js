(function () {
  var socket = io();
  var messageForm = document.getElementById("msgForm");
  var message = document.getElementById("msg");
  var messages = document.getElementById("messages");
  messageForm.addEventListener("submit", function(ev){
    socket.emit('chat message', message.value);
    message.value = '';
    ev.preventDefault();
  });
  socket.on('chat message', function(msg){
    messages.innerHTML += `<li>${msg}</li>`;
  });
})();
