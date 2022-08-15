let x=prompt("Enter Number: ");
let y=0;
let input=document.querySelector("#input");
let output=document.querySelector("#output");
let pal=document.querySelector("#pal");
input.innerText=x;
let butin=document.querySelector("#enter");
let ad=document.querySelector("#add")
butin.addEventListener('click',inn);
function inn(){
    x=prompt("Enter Number: ");
    input.innerText=x;
}
ad.addEventListener('click',ink);
function ink(){
    console.log(x);
        let m=parseInt(x);
    	while(m!=0){
    		y+=m%10;
    		m=parseInt(m/10);
    	}
        output.innerText=y;
        y=0;
}
pal.addEventListener('click',palld);
function palld(){
	let m=parseInt(x);
    let n=m;
    let z=0;
    let k=10;
    let l=0;
    let mm=0;
    while(m!=0){
        z++;
        m=parseInt(m/10);
    }
    while(z!=2){
        k*=10; 
        z--;
    }
    while(n!=0){
       l=parseInt(n%10);
       n=parseInt(n/10);
       mm+=(l*k);
       k=parseInt(k/10);
    }
    console.log(mm);
    if(mm==x){
        output.innerText="Yes";
    }
    else{
        output.innerText="No";
    }
}
