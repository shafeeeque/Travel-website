const palce = document.getElementById("Whereto");
const days = document.getElementById("Howmany");
const Form=document.getElementById("Form")

Form.addEventListener('submit', (e) =>{

    let messages = []
    if (Whereto.value === '' || Whereto.value == null){
        alert("please Enter Where to go")
    }
    if (Howmany.value === '' || Howmany.value == null){
        alert("Please Enter HowMany Days")
    }
    e.preventDefault()
})