

// let sheep = +prompt("qo'ylar sonni kiriting")
// for (let k = 1; k <= sheep; k++) {
//   if (k === 1) {
//     console.log(k + " qoy");

//   } else {
//     console.log(k + " qoylar");
//   }
// }



let a = +prompt("Kvadratni tomonini  kirirting")
while(isNaN(a) || (a == 0)){
    a = +prompt("Kvadratni tomonini to'g'ri kiriting")
}
let chess = ""        
for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {    
        if (i == j || i == 0 || j == 0 || i == a -1 || j == a -1) {
            chess = chess + "🟫"
        }
        else{
            chess = chess + "⬜"
        }
    }
    console.log(chess);
    chess = ""
    
}
