let n1;
let n2;

while (!(Number(n1)) || !Number(n2)) {
    n1 = prompt(`Inserisci numero 1`);
    n2 = prompt(`Inserisci numero 2`);
}

if (n1 > n2) {
    console.log(n1);
} else if (n2 > n1) {
    console.log(n2);
    0
} else {
    console.log(`${n1}=${n2}`)
}