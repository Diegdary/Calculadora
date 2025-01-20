var display= document.getElementById("result");
var result_array=[0];
var last_n=0;
var memory=0;

//add last answer
const add_ans= () => {
    //if the last number is 0 do it.
    if(result_array[result_array.length-1]==0){result_array[result_array.length-1]=memory}
    show()
}

const answer= (num)=>{
    //primer recorrido
    for (let i = 0; i < result_array.length; i++) {
        if(result_array[i]=="x"){
            num=result_array[i-1] * result_array[i+1];
            result_array.splice(i-1, 3, num)
            i--;
        }
        if(result_array[i]=="÷"){
            num=result_array[i-1] / result_array[i+1];
            result_array.splice(i-1, 3, num)
            i--;
        }
    }
    
    //segundo recorrido
    for (let i = 0; i < result_array.length; i++) {
        if(result_array[i]=="+"){
            num=result_array[i-1] + result_array[i+1];
            result_array.splice(i-1, 3, num)
            i--;
        }
        if(result_array[i]=="-"){
            num=result_array[i-1] - result_array[i+1];
            result_array.splice(i-1, 3, num)
            i--;
        }
    }
    //divide 0
    //no se porque wea si la respuesta es por ejemplo 5🖕 la funcion isNaN() lo toma como verdadero xd (pero me sirve).
    if(isNaN(result_array[0]) || result_array[0]=="Infinity"){result_array[0]="🖕"}
    memory=result_array[0];
    show()
}

//add numbers
function set(number){
   last_n = last_n*10+number;
   result_array.splice(result_array.length-1, 1, last_n)
   show();
}

//add symbols
function add_op(string){
    
        result_array.push(string, 0)
        last_n=0;
        show();
    
}

//remove digits
const remove= ()=>{
if(result_array[result_array.length-1]==0){result_array.splice(result_array.length-2,2)}
else{
    result_array.splice(result_array.length-1,1,0)
    last_n=0;
}
show()
}

//show values in display
function show(){
    display.innerHTML=result_array.join(' ');
}


//reset and off.
const reset= () => {
    display.innerHTML="0";
    result_array=[0];
    last_n=0;
}

const off= () => {
    if(display.innerHTML!=""){display.innerHTML=""}
    else{display.innerHTML=0}

    result_array=[0];
    last_n=0;
}