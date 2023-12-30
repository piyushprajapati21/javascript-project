const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault(); 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')
    //alert(height+' - ' +weight)
    result.innerHTML = '';
    if(height=='' || height <=0 || isNaN(height))
    {
        result.innerHTML = '<span class="text-danger">Please enter height value..</span>'
    } else if(weight=='' || weight <=0 || isNaN(weight))
    {
        result.innerHTML = '<span class="text-danger">Please enter weight value..</span>'
    }
    else
    {
        const formula = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span class="text-success">${formula}</span>`;
    }
})