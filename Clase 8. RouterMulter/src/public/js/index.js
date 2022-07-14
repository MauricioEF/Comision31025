let petForm = document.getElementById('petForm');
let result
const handleSubmit = (evt,form,route) =>{
    evt.preventDefault();
    let formData = new FormData(form);
    // let obj = {};
    // formData.forEach((value,key)=>obj[key]=value);
    // fetch(route,{
    //     method:"POST",
    //     body:JSON.stringify(obj),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then(res=>res.json()).then(json=>result=json);
    fetch(route,{
        method:"POST",
        body:formData
    })
}
petForm.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/pets'))