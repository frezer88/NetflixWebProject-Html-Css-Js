let coll = document.getElementsByClassName('cart-asked-questions')
for(let i = 0; i < coll.length;i++){
    coll[i].addEventListener('click',function(){
        this.classList.toggle('active')
        let content = this.nextElementSibling
        let decor = this.lastElementChild.firstElementChild
        
        if(content.style.maxHeight){
            content.style.maxHeight = null
            content.style.padding = '0 18px'
            decor.style.transform = 'rotate(0deg)'
        }
        else{
            content.style.maxHeight = content.scrollHeight + 'px'
            content.style.padding = '18px'
            decor.style.transform = 'rotate(-45deg)'
        }
    })
}