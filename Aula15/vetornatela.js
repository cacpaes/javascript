let valores = [8,1,7,4,2,9]
valores.sort()
console.log(valores)
/* 
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])     Maneira BURRA de fazer!
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])


for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
// Maneira mais simples 
for(let pos in valores) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}