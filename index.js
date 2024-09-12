const textbox=document.getElementById("textbox");
const tofaherehit=document.getElementById("tofaherehit");
const tocelsuis=document.getElementById("tocelsuis");
const result= document.getElementById("result");
let temp;
function coverter(){
  if(tofaherehit.checked){
    temp =Number(textbox.value);
    temp= temp *9/5 +32;
    result.textContent= temp.toFixed(2) + "°F";

  }

  else if(tocelsuis.checked){
    temp =Number(textbox.value);
    temp= (temp  - 32)*5/9;
    result.textContent= temp.toFixed(2) + "°C";

    
  }
  else{
    result.textContent="select a unit";
  }

}