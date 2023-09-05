function dataCheckingInInput(word){
    if(word.indexOf('.ru') == -1 && word.indexOf('.com') == -1){
        return(false)
    }
    return(true)
} 

let errorValid = document.getElementsByClassName('error-input')
let inputBlock = document.getElementsByClassName('input-block')
let inputEmail = document.getElementsByClassName('input-email')
for(let i = 0; i < inputBlock.length; i++)
{
    
    inputBlock[i].addEventListener('focus', function(){//сфокусирован на поле (поднимаем span)
        let emailAdressSpan = inputBlock[i].nextElementSibling
        if(inputBlock[i].value.length === 0){ 
            emailAdressSpan.style.top = '5px'
            emailAdressSpan.style.left = '25px'
            emailAdressSpan.style.fontSize = '12px'
        }
    
    })

    inputBlock[i].addEventListener('blur', function(){//фокус с поля уходит (опускаем span)
        let emailAdressSpan = inputBlock[i].nextElementSibling
        if(inputBlock[i].value.length === 0){
            emailAdressSpan.style.top = '16px'
            emailAdressSpan.style.left = '18px'
            emailAdressSpan.style.fontSize = '16px'

            errorValid[i].style.display = 'none'
            inputEmail[i].style.border = 'solid 1px rgba(95, 95, 95, 1)'
            console.log(inputEmail[i])
        }
        else{//валидация email
            if(!dataCheckingInInput(inputBlock[i].value)){
                errorValid[i].style.display = 'flex'
                inputEmail[i].style.border = 'solid 1px rgba(235,56,66,1)'
            }
            else{
                errorValid[i].style.display = 'none'
                inputEmail[i].style.border = 'none'
            }
        }
    
    })

    inputBlock[i].addEventListener('input', function(){//если в поле что то введено (поднимаем span)
        let emailAdressSpan = inputBlock[i].nextElementSibling
        emailAdressSpan.style.top = '5px'
        emailAdressSpan.style.left = '25px'
        emailAdressSpan.style.fontSize = '12px' 
       
        
    })
}