let ob=document.querySelectorAll("button");
let oj=document.getElementById("m1");
let string=" ";
ob.forEach((btn)=>{
  
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="AC"){
        string=" ";
        oj.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1)
            oj.value=string;
        }
        else if(e.target.innerHTML=="="){
            string=eval(string);
            oj.value=string;
        }
        else{
        string += e.target.innerHTML;
        oj.value=string;
        
        }
})
})