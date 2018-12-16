
//* 8 урок - Условия


/* if (2*4 == 9) {
    console.log("Verno")
} else {
    console.log("Neverno")
} */

/* let num = 50;
    if (num < 49) {
        console.log("Neverno")
} else if (num > 100) {
        console.log("Slishkom Mnogo")
} else {
    console.log("Verno Zaebis")
};

(num == 50) ? console.log("Verno Zaebis") : console.log("Neverno");

switch (num) {
    case num < 49:
        console.log("Neverno");
        break;
    case num > 100:
         console.log("Mnoga pizdec");
         break;
    case num > 80:
        console.log("Mnoga pizdec tozhe");
        break;
    case 50:
        console.log("Pravilno");
        break;
    default:
        console.log("chto-to poshlo ne tak");
        break;
} */

//* 9 урок - Циклы

let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while(num < 55);

for(let i = 1; i < 8; i++){
    if(i == 6) {
        break
    }
    console.log(i)
}