function setup() {
	chatbot.loadFiles(['bot.rive']);
}

window.onload = setup;

document .querySelector(".openChatBtn") .addEventListener("click", openForm);
document.querySelector(".close").addEventListener("click", closeForm);
function openForm() {
   document.querySelector(".wrapper").style.display = "flex";
   document.querySelector(".openChatBtn").style.display = "none";
}
function closeForm() {
   document.querySelector(".wrapper").style.display = "none";
   document.querySelector(".openChatBtn").style.display = "block";
}
