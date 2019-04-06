var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

{
function abrirmenu() {

var x = document.getElementById ("meuNav")
   if (x.className === "menu") {
   	x.className +=  " responsivo";
   }
   else {x.className = "menu"}
} 
}

{var box = document.getElementById('meuModal');

// Get the button that opens the modal
var btn = document.getElementById("meuBt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fechar")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  box.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  box.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == box) {
    box.style.display = "none";
  }
}
}
//Firebase form
{
	var config = {
    apiKey: "AIzaSyDloshJSSsbQrCSloK9s8eL0yvfsNwxflA",
    authDomain: "forms-a195b.firebaseapp.com",
    databaseURL: "https://forms-a195b.firebaseio.com",
    projectId: "forms-a195b",
    storageBucket: "forms-a195b.appspot.com",
    messagingSenderId: "365707829612"
  	};
  	firebase.initializeApp(config);
{	var messagesRef = firebase.database().ref('messages');}
{
	document.getElementById('newContact').addEventListener("submit", submitForm);
}
{	function getInputVal(id){
		return document.getElementById(id).value;
}}
{
	function submitForm(h){
		h.preventDefault();
}}
{	var nome = getInputVal('nome');
        email = getInputVal('email');
        assunto = getInputVal('assunto');
        menagens = getInputVal('mensagens');
}
{	function saveMessage(nome, email, assunto, mensagens){
  	var newMessageRef = messagesRef.push();
  		newMessageRef.set({
    	nome: nome,
    	email:email,
    	assunto:assunto,
    	mensagens:mensagens
  });
{	saveMessage(nome, email, assunto, mensagens);}
{	document.querySelector('.alert').style.display = 'block';}
{ 	setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);}
{	document.getElementById('newContact').reset();}
}}}