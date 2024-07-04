
function sendContactDetails(){

    const form = document.getElementById('contact-form')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const formData =  new FormData(form)

    data = Object.fromEntries(formData.entries)

    console.log("DForm", data)




});
}



