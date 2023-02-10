let previewContainer = document.querySelector('.events-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.container-slider .event').forEach(event =>{
    event.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = event.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name ==  target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      previewContainer.style.display = 'none';
    };
});