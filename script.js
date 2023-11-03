const listCard = document.getElementsByClassName("card")

for (let i =0; i<listCard.length; i++){
    listCard[i].addEventListener('mouseover', function(){
        for(let j = i ; j< listCard.length; j++)
        listCard[j].classList.add('active')
    })
}



for (let i =0; i<listCard.length; i++){
    listCard[i].addEventListener('mouseout', function(){
        for(let j = i ; j< listCard.length; j++)
        listCard[j].classList.remove('active')
    })
}