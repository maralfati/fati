let name="fatimo";
let password= 4391;
document.write(`hello ${name=="mari" && password== 1234? "teacher :" :name=="fatima" && password==4321?"my sister": "mom"} ${name}`)
let price=0;
document.write(`the price is ${price || 34} `)
let priceu=0;
document.write(`the price is ${price ?? 34} `)
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
let a=6;
document.write(`${a==10?"hi": a==11 || a<10?"yes":"hello"}`) 
let st ="Elzero Web School"
if(st.length==34){
    document.write("good")
}else{
    document.write( `the length is: ${st.length}`)

}
document.write(`${st[8]=='W'?"letter : W":"no"}`) 
if (st)
