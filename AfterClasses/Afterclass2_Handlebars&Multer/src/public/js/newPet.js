const petForm = document.getElementById('petForm');


petForm.addEventListener('submit',evt=>{
    evt.preventDefault();
    const formData = new FormData(petForm);
    fetch('/api/pets',{
        method:"POST",
        body:formData,
    }).then(result=>result.json()).then(json=>console.log(json));
})