const submitBtn = document.querySelector(".submit")
const radioButtons = document.querySelectorAll("input[name=rGroup]")
const firstCard= document.querySelector("#first")
const secondCard = document.querySelector("#second")


submitBtn.addEventListener("click", ()=>{
    firstCard.classList.add("hidden")
    secondCard.classList.remove("hidden")
    let selection;
    for (const radioButton of radioButtons) {
        if(radioButton.checked){
        selection = radioButton.value
        break
        }
    }
    const rating = `You selected ${selection} out of 5`
    document.querySelector(".selection").innerHTML =  rating
})