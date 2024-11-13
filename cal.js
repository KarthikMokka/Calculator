let res=""
let buttons=document.querySelectorAll(".btn")
let display=document.querySelector('#screen')
Array.from(buttons).forEach((button)=>
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            try {
                res = eval(res); 
                display.value = res;
            } catch {
                display.value = 'Error';
            }
        }
        else if(e.target.innerHTML=='⌫'){
                           res = res.slice(0, -1);
                display.value = res;
            
    }
        else if(e.target.innerHTML == 'AC'){
            res=""
            display.value=res;

        }
        else if(e.target.innerHTML=='sin'){
            display.value = Math.sin(parseFloat(display.value) * (Math.PI / 180)).toFixed(5);

            res = display.value;
}       else if(e.target.innerHTML=='cos')
    {
        display.value=Math.cos(display.value*(Math.PI/180));
        display.value = Math.cos(parseFloat(display.value) * (Math.PI / 180)).toFixed(5);
        res = display.value;
    }
    else if(e.target.innerHTML=='tan'){
    display.value = Math.tan(parseFloat(display.value) * (Math.PI / 180)).toFixed(5);  
    res = display.value;
}       
else if(e.target.innerHTML=='x²'){
    display.value=Math.pow(display.value,2);
    res = display.value;
}
else if(e.target.innerHTML=='√'){
    display.value=Math.sqrt(display.value)
    res = display.value;

}   
else if(e.target.innerHTML=='log'){
    display.value=Math.log(display.value)
    res = display.value;
} 
else if(e.target.innerHTML=='π'){
    res += Math.PI;
    display.value = res;
}

else if(e.target.innerHTML=='e'){
    res += Math.E;
    display.value = res;
}
else if(e.target.innerHTML=='x!'){
    var i, num, f;
    f=1
    num=display.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    display.value=f;
    res = display.value;
}
else {
    if (e.target.innerHTML == 'x') {
        res += '*';  
    } 
    else if (e.target.innerHTML == '÷') {
        res += '/';  
    } 
    else {
        res += e.target.innerHTML;  
    }
    display.value = res; 
}
    }
)
)