const form = document.getElementById('artworkForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);
    fetch('api/artworks/',{
        method:'POST',
        body:data
    }).then(result=>result.json()).then(json=>{
        console.log(json);
    });
})