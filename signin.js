let submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', goHome);

function goHome(event){
    event.preventDefault();
    location.href = "index.html";
}
