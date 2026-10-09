// if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda
// 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin

// let son=+prompt("Son kiritng:")
// if (son>=0){
//     son+=1
//     console.log(son);
//     alert(son)
// }else{
//     son-=2
//     console.log(son);
//     alert(son)
    
// }





// if2. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son
// borligini aniqlovchi programma tuzilsin.

// let a = +prompt("1-sonni kiriting: ");
// let b = +prompt("2-sonni kiriting: ");
// let c = +prompt("3-sonni kiriting: ");

// let musbat = 0;
// let manfiy = 0;

// if (a > 0) {
//   musbat++;
// } else if (a < 0) {
//   manfiy++;
// }

// if (b > 0) {
//   musbat++;
// } else if (b < 0) {
//   manfiy++;
// }

// if (c > 0) {
//   musbat++;
// } else if (c < 0) {
//   manfiy++;
// }

// console.log(`Musbat sonlar: ${musbat}\nManfiy sonlar: ${manfiy}`);
// alert(`Musbat sonlar: ${musbat}\nManfiy sonlar: ${manfiy}`);




// if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga
// chiqaruvchi programma tuzilsin.

// let a = +prompt("1-sonni kiriting: ");
// let b = +prompt("2-sonni kiriting: ");
// let c = +prompt("3-sonni kiriting: ");

// max=a
// min=a
// if(b>max){
//     max=b;
// }
// if(c>max){
//     max=c;
// }

// if(b<min){
//     min=b;
// }
// if(c<min){
//     min=c;
// }
// console.log(`Min: ${min}\nMax: ${max}`);
// alert(`Max: ${max}\nMin: ${min}`)





// if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini
// tartib raqami aniqlansin.


// let a = +prompt("1-sonni kiriting: ");
// let b = +prompt("2-sonni kiriting: ");
// let c = +prompt("3-sonni kiriting: ");
// if (a==b){
//     alert(`Farqli son: ${c}, Tartibi: ${3}`);
//     console.log(`Farqli son: ${c}, Tartibi: ${3}`);
    
// }
// if(b==c){
//     alert(`Farqli son: ${a}, Tartibi: ${1}`);
//     console.log(`Farqli son: ${a}, Tartibi: ${1}`);
// }
// if(a==c){
//     alert(`Farqli son: ${b}, Tartibi: ${2}`);
//     console.log(`Farqli son: ${b}, Tartibi: ${2}`);
// }





// if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x < -2 yoki x > 2 bo’lsa 2 * x
// aks holda -3 * x;


// let x=15
// if (x<-2 || x>2) {
//     console.log(2*x);
   
// }else{
//     console.log(-3*x);
// }





// if6. Butun son berilgan. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy
// juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.

// let a=15

// if(a==0){
//     console.log("Nol")   
// }
// else if(a>0){
//     if(a%2==0){
//         console.log("musbat juft");
//     }
//     else{
//         console.log("musbat toq son");
//     }
// }else{
//     if (a%2==0) {
//         console.log("manfiy juft");
        
//     }else{
//         console.log("manfiy toq");
        
//     }
// }




// case1

// let x=4;
// switch (x) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("Bunday hafta kuni mavjud emas");
//         break;
// }






// case 2
// 1-Qo'shish 2-Ayirma 3-Ko'paytiriish 4-Bo'lish

// let A=4;
// let B=8;
// let amal=5;

// switch (amal) {
//     case 1:
//         console.log(A+B);
//         break;
//     case 2:
//         console.log(A-B);
//         break;
//     case 3:
//         console.log(A*B);
//         break;
//     case 4:
//         console.log(A/B);
//         break;
//     default:
//         console.log("Bunday amal mavjud emas");
        
//         break;
// }







// case 3

// let age = 60;

// if (20<=age && age<70) {
//     let onlik = "";
// switch (Math.floor(age / 10)) {
//     case 1: onlik = "O'n"; break;
//     case 2: onlik = "Yigirma"; break;
//     case 3: onlik = "O'ttiz"; break;
//     case 4: onlik = "Qirq"; break;
//     case 5: onlik = "Ellik"; break;
//     case 6: onlik = "Oltmish"; break;
//     default: onlik = ""; break;
// }

// let birlik = "";
// switch (age % 10) {
//     case 0: birlik = ""; break;
//     case 1: birlik = "bir"; break;
//     case 2: birlik = "ikki"; break;
//     case 3: birlik = "uch"; break;
//     case 4: birlik = "to'rt"; break;
//     case 5: birlik = "besh"; break;
//     case 6: birlik = "olti"; break;
//     case 7: birlik = "yetti"; break;
//     case 8: birlik = "sakkiz"; break;
//     case 9: birlik = "to'qqiz"; break;
// }
// console.log(`${onlik} ${birlik} yosh`);


// }
// else{
//     console.log("Dasturga qo'shilmagan");
    
// }









