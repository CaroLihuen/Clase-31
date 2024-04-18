//primera función suma
/*const suma = (num1, num2)=>{
   if(!num1 || !num2){ return 0}
   if(typeof num1 !== "number" || typeof num2 !== "number") {return null}
}*/

//segunda función suma
/*const suma = (...nums)=>{
    if(nums.length===0) return 0;
    let result = 0;
    for(let i=0;i<nums.length;i++){
        if(typeof nums[i] !== "number"){
            return null;
        }else{result+=nums[i]}
    }
    return result;
}*/

//tercera función suma
const suma = (...nums) => {
    if (nums.length === 0) return 0;
    const hasADifferentType = nums.some(num => typeof num !== "number");
    if (hasADifferentType) return null;
    const result = nums.reduce((prev, current) => prev + current);
    return result;
}

let testPasados = 0;
let testTotales = 4;

//1. La función devuelve null si algún parámetro no es númerico
console.log("Test 1: La función debe devolver null si algún parámetro no es númerico")
let resulTest1 = suma("2", 2)

if (resulTest1 === null) {
    console.log("Test 1 pasado");
    testPasados++;
} else { console.log(`Test 1 no pasado, se recibió ${typeof resulTest1}, pero se esperaba null`) }

//2. La función debe devolver 0 si no se pasó ningun parámetro.
console.log("Test 2: la función debe devolver 0 si no se pasó ningún parámetro")
let resulTest2 = suma()
if (resulTest2 === 0) {
    console.log("Test 2 pasado");
    testPasados++;
} else { console.log(`Test 2 no pasado, se recibió ${resulTest2}, pero se esperaba 0`) }

//3. La función se resuelve si los datos son correctos
console.log("Test 3: la suma debe resolverse correctamente si los datos son correctos")
let resulTest3 = suma(2, 3)
if (resulTest3 === 5) {
    console.log("Test 3 pasado");
    testPasados++;
} else { console.log(`Test 3 no pasado, se recibió ${resulTest3}, pero se esperaba 5`) }

//4. La función se resuelve si se pasan distintos parámetros
console.log("Test 4: la suma debe recibir n parámetros")
let resulTest4 = suma(1, 2, 3, 4, 5)
if (resulTest4 === 15) {
    console.log("Test 4 pasado");
    testPasados++;
} else { console.log(`Test 4 no pasado, se recibió ${resulTest4}, pero se esperaba 15`) }

if (testPasados === testTotales) {
    console.log("Todos los test han sido pasados con éxito");
} else { console.log(`Se han pasado ${testPasados} test de un total de ${testTotales}`); }