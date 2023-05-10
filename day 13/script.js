//declaring variables
const bill = document.querySelector('#billAmnt');
const percents = document.querySelectorAll('.tipPercent');
const custom =document.querySelector('.custom')
const people = document.querySelector('.noPeople')
let tipAmount = document.querySelector('.tipAmount')
let total = document.querySelector('.total')
let reset = document.querySelector('button')



//add event listener to calculate all the percentages
for(let i =0 ; i<percents.length;i++){
    
    percents[i].addEventListener('click' , (e) => {
    
        //declaring neccesary variables

        let newBill = parseFloat(bill.value)
        let newPercent =  (parseFloat(percents[i].innerText)/100)
        let newPeople =  parseFloat(people.value)
        let totalCalc = parseFloat(newBill * newPercent)

    //add values created to page

       tipAmount.innerText = `N ${(totalCalc /newPeople).toFixed(2)}`
       
    total.innerText =` N ${(newBill/newPeople + totalCalc/newPeople).toFixed(2)}`
        
    })

    
}


// event listener to add custom percent 
custom.addEventListener('click'  ,(e) => {
    if(custom.innerText == 'custom'){

     let customValue = parseFloat(prompt('input percentage'))
     custom.innerHTML =` ${customValue}%`
     
    }

    
    else{
        // sepererate event listener for after cutom value is made
    
    
        custom.addEventListener('click' , (e) => {
    
            let customValue =  parseFloat(custom.innerHTML)
           //declare values needed 
           let   newCustomValue = (customValue /100)
          let newBill = parseFloat(bill.value)
           let newPeople =  parseFloat(people.value)
           let totalCalc = parseFloat(newBill * newCustomValue)
    
          
    // add values calculated to page
          tipAmount.innerText = `N ${ ((newBill * newCustomValue) /newPeople).toFixed(2)}`
    
          total.innerText = `N ${(newBill/newPeople + totalCalc /newPeople).toFixed(2)}`
       })
    
    
    }

    });


reset.addEventListener('click' , (e) => {
    

    location.reload()

})
