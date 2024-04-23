var newS=document.querySelector("#friend")
var net=document.querySelector("button")
var flag=0;
document.querySelector("#add").addEventListener("click",function(){
    if(flag == 0){
    newS.innerHTML="Friend"
    newS.style.color="green"
    net.innerHTML="Remove"
    flag=1;
    }else{
        newS.innerHTML="Stranger"
    newS.style.color="red"
    net.innerHTML="Add"
    flag=0;
    }
})
