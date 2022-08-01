const n = 61525843;
let max = 0;
let min = 0;
let suma = 0;
let nArr = 0;
let myFunc = num => Number(num);

let arr = Array.from(String(n), myFunc);
let nuevoArr = [];


for(let i = 0; i <= arr.length - 1; i++) {

    suma = 0;

        for(let k = i - arr[i]; k <= arr[i] + i; k++ ){
           if(k < 0){
            k = 0
           } else if(k > arr.length -1){
             break;
           };
           
           suma+= arr[k];
           
        }
        min = suma - arr[i];
        
        
        nuevoArr.push(min)  
       
    }

  console.log(nuevoArr);
    let menorRangoVista = Math.min(...nuevoArr)
    let indexMenorRangoVista = nuevoArr.indexOf(Math.min(...nuevoArr));
    let mayorRangoVista = Math.max(...nuevoArr);
    let indexMayorRangoVista = nuevoArr.indexOf(Math.max(...nuevoArr));
    console.log('menorRangoVista', indexMenorRangoVista, menorRangoVista);
    console.log('mayorRangoVista', indexMayorRangoVista, mayorRangoVista);

