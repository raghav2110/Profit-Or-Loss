const checkBtn=document.querySelector(".checkBtn");
const inputs = document.querySelectorAll(".input");
const output = document.querySelector(".output");

checkBtn.addEventListener("click", calculate);

function calculate(){

    let costPrice = inputs[0].value;
    let quantity = inputs[1].value;
    let sellingPrice = inputs[2].value;
    var percentage=0;

    if( !isNaN(costPrice) && !isNaN(quantity) && !isNaN(sellingPrice)){
        costPrice = Number(costPrice);
        quantity = Number(quantity);
        sellingPrice = Number(sellingPrice);

        if(costPrice>0 && quantity>0 && sellingPrice>0){
           
            if(costPrice<sellingPrice){
      
                const profit = ((sellingPrice-costPrice)*quantity).toFixed(2);
                percentage=(((sellingPrice-costPrice)*100)/costPrice).toFixed(2);
                output.innerHTML=  `You gained ${percentage}%. Your total profit is ₹${profit}`;
            }
            else{

                const loss = ((costPrice-sellingPrice)*quantity).toFixed(2);
                percentage=(((costPrice-sellingPrice)*100)/costPrice).toFixed(2);
                output.innerHTML=  `You lost ${percentage}%. Your total loss is ₹${loss}`;
            }

        }else{

            output.innerHTML=`Enter values greater than 0`
        }

    }else{

        output.innerHTML="Please enter all the values"
    }
}