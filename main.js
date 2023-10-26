const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    
    check =  campoA  < campoB

    if (check == true){
        alert("O valor B é maior que o valor A.")
    } else if(campoA == campoB){
        alert("O valor A é igual ao valor B.")
    } else{
        alert("O valor A é maior que o valor B.")
    }
})
