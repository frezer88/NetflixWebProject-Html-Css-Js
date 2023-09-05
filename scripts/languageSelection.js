let selectLanguageButton = document.getElementsByClassName('choice-lang-button')
let choiceLanguage = document.getElementsByClassName('choice-lang')
let intermediateData

for(let i = 0; i < selectLanguageButton.length; i++){
    selectLanguageButton[i].addEventListener('click', function() {
        
        if(selectLanguageButton[i].lastElementChild.children[0].style.transform == 'rotate(180deg)'){
            selectLanguageButton[i].lastElementChild.children[0].style.transform = 'rotate(0deg)'
        }
        else{
            selectLanguageButton[i].lastElementChild.children[0].style.transform = 'rotate(180deg)'
        }

        let listLanguage =  selectLanguageButton[i].nextSibling.nextSibling
        if(listLanguage.classList.toggle('active-select-lang'))//если меню открывается
        {
            let selectLang = listLanguage.children//li элементы
            for(let j = 0; j < selectLang.length; j++){
                selectLang[j].addEventListener('click', function() {
                    if(selectLang[j].innerHTML.trim() == "Russian"){
                        intermediateData = selectLang[j].innerHTML.trim()
                        selectLang[j].innerHTML = choiceLanguage[i].innerHTML.trim()
                        choiceLanguage[i].innerHTML = intermediateData
                    }
                    else if(selectLang[j].innerHTML.trim() == "Spanish"){
                        intermediateData = selectLang[j].innerHTML.trim()
                        selectLang[j].innerHTML = choiceLanguage[i].innerHTML.trim()
                        choiceLanguage[i].innerHTML = intermediateData
                    }
                    else if(selectLang[j].innerHTML.trim() == "English"){
                        intermediateData = selectLang[j].innerHTML.trim()
                        selectLang[j].innerHTML = choiceLanguage[i].innerHTML.trim()
                        choiceLanguage[i].innerHTML = intermediateData
                    }
                })
            }
        }

    })
}