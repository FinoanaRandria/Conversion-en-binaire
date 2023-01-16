
//exercice 1
let button = document.querySelector('.button').addEventListener('click', (e)=>{

    e.preventDefault()

    let input = document.querySelector('.input').value
    
    let decimal = parseInt(input)
    console.log(`input ${decimal}`)
    let binary = decimal.toString(2);
     console.log(binary)
       document.querySelector('.result').innerHTML = binary
       

   console.log(input)
})
