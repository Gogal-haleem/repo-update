let selectedcurrency="";

const amount=document.querySelector(".user-amount");
const displayAmount=document.querySelector(".display-amount");
const  converter=document.querySelector(".container");
const user_enter=document.querySelector(".box-1");
const user_get=document.querySelector(".box-2");
const id_pak=document.querySelector("#rupees");
const id_INR=document.querySelector("#indian");
const id_US= document.querySelector("#dollar");
const id_getPKR=document.querySelector("#converted_to_rupees");
const id_getINR=document.querySelector("#converted_to_indian");
const id_getUS=document.querySelector("#converted_to_dollar");

let input=0;




user_enter.addEventListener("click",(e)=>{

      input=parseFloat(amount.value);
        
      if(e.target==id_pak){  
   console.log("You want to convert pakistani rupees");
     amount.value=input+"PKR";
     selectedcurrency="PKR";
   

      }

      else if(e.target==id_INR){
        
           amount.value=input+"INR";
           selectedcurrency="INR";
      }

      else if(e.target==id_US){
     
           amount.value=input+"USD";
           selectedcurrency="USD";
      }
   
})




user_get.addEventListener("click",(e)=>{
  input=parseFloat(amount.value);
      
        
      if(e.target==id_getPKR){  
   console.log("Your amount is  converted to PKR");
    if(selectedcurrency=="USD"){
        displayAmount.innerText=parseFloat(input*278).toFixed(2)
    }
    else if(selectedcurrency=="INR"){
        displayAmount.innerText=parseFloat(input*2.91).toFixed(2);
    }

   else {
        displayAmount.innerText=parseFloat(input*1).toFixed(2);
    }
      }

      else if(e.target==id_getINR){
        console.log("Your amount is  converted to INR");
        if(selectedcurrency=="USD"){
            displayAmount.innerText=parseFloat(input*95.63).toFixed(2);
        }
        else if(selectedcurrency=="INR"){
         displayAmount.innerText=parseFloat(input*1).toFixed(2);   
        }
        else {
            displayAmount.innerText=parseFloat(input*0.34).toFixed(2);
        }
      }

      else if(e.target==id_getUS){
        console.log("Your amount is  converted to USD");

        if(selectedcurrency=="USD"){
            displayAmount.innerText=parseFloat(input*1).toFixed(2);
        }

        else if(selectedcurrency=="INR"){
            displayAmount.innerText=parseFloat(input*0.0105).toFixed(2);
        }
        else{
            displayAmount.innerText=parseFloat(input*0.0036).toFixed(2);
        }
      }
    })
    

