let submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', goHome);

function goHome(event){
    event.preventDefault();
    var a = 1
    console.log(typeof(a))
    console.log(a)

    a = "2"
    console.log(typeof(a))
    console.log(a)


    location.href = "index.html";
}
