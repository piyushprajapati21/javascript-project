const btns = document.querySelectorAll('.embed-responsive-item');
const body = document.querySelector("body") 
btns.forEach( (btn) => { 
    body.classList.remove(btn.id); 
    btn.addEventListener('click', function(e) {  
        btns.forEach( (btnD) => { 
            body.classList.remove(btnD.id); 
        });
        body.classList.add(e.target.id);  
    })
})