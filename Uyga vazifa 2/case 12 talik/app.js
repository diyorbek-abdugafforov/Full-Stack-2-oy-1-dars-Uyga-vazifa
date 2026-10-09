// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma
// tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5
// gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// let K=6;
// switch (K) {
//     case 1:
//         console.log("Yomon");
//         break;
//     case 2:
//         console.log("Qoniqarsiz");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;

//     default:
//         console.log("Xato");
//         break;
// }




// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini
// chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")

// let oy=45;
// switch (oy) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Qish");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;

//     default:
//         console.log("Bunday oy mavjud emas");
//         break;
// }





// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma
// tuzilsin.
// let oy=12;
// switch (oy) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 kun");
//         break;
//     case 2:{
//         console.log("28 kun");
//     }
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 kun");
//         break;

//     default:
//         console.log("Bunday oy mavjud emas!!");
//         break;
// }




// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr,
// 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5
// oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning
// uzunligini metrlarda ifodalofchi programma tuz

// let birlik=5;
// let uzunlik=450;
// let metr="";
// switch (birlik) {
//     case 1:
//         metr=uzunlik/10;
//         break;
//     case 2:
//         metr=uzunlik*1000;
//         break;
//     case 3:
//         metr=uzunlik;
//         break;
//     case 4:
//         metr=uzunlik/1000;
//         break;
//     case 5:
//         metr=uzunlik/100;
//         break;

//     default:
//         metr="Bunday birlik dasturda mavjud emas!!!";
//         break;
// }
// console.log(`${metr} metr`);





// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm,
// 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu
// birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma
// tuzilsin.

// let birlik=4;
// let ogirlik=450;
// let kg="";
// switch (birlik) {
//     case 1:
//         kg=ogirlik;
//         break;
//     case 2:
//         kg=ogirlik/10**6;
//         break;
//     case 3:
//         kg=ogirlik/10**3;
//         break;
//     case 4:
//         kg=ogirlik*1000;
//         break;
//     case 5:
//         kg=ogirlik*100;
//         break;

//     default:
//         kg="Bunday birlik dasturda mavjud emas!!!";
//         break;
// }
// console.log(`${kg} kg`);



// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa
// bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin.
// Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

// let D = 45; 
// let M = 2; 
// let oyNomi = "";
// let maxKun = 0;
// switch (M) {
//   case 1:
//     oyNomi = "yanvar";
//     maxKun = 31;
//     break;
//   case 2:
//     oyNomi = "fevral";
//     maxKun = 28; 
//     break;
//   case 3:
//     oyNomi = "mart";
//     maxKun = 31;
//     break;
//   case 4:
//     oyNomi = "aprel";
//     maxKun = 30;
//     break;
//   case 5:
//     oyNomi = "may";
//     maxKun = 31;
//     break;
//   case 6:
//     oyNomi = "iyun";
//     maxKun = 30;
//     break;
//   case 7:
//     oyNomi = "iyul";
//     maxKun = 31;
//     break;
//   case 8:
//     oyNomi = "avgust";
//     maxKun = 31;
//     break;
//   case 9:
//     oyNomi = "sentabr";
//     maxKun = 30;
//     break;
//   case 10:
//     oyNomi = "oktabr";
//     maxKun = 31;
//     break;
//   case 11:
//     oyNomi = "noyabr";
//     maxKun = 30;
//     break;
//   case 12:
//     oyNomi = "dekabr";
//     maxKun = 31;
//     break;
//   default:
//     oyNomi = "";
// }

// if (oyNomi === "") {
//   console.log("Xato: bunday oy mavjud emas (1 dan 12 gacha kiriting)!");
// } else if (D < 1 || D > maxKun) {
//   console.log(`Xato: ${oyNomi} oyida ${maxKun} kun bor, siz kiritgan kun (${D}) xato!`);
// } else {
//   console.log(`${D}-${oyNomi}`);
// }



// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi
// kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// let D = 31; 
// let M = 3;  

// let maxKun = 0;

// switch (M) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     maxKun = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     maxKun = 30;
//     break;
//   case 2:
//     maxKun = 28;
//     break;
//   default:
//     maxKun = 0;
// }

// if (maxKun === 0 || D < 1 || D > maxKun) {
//   console.log("Xato: kiritilgan sana noto'g'ri!");
// } else {
//   if (D < maxKun) {
//     D++;
//   } else {
//     D = 1;
//     if (M === 12) {
//       M = 1;
//     } else {
//       M++;
//     }
//   }


//   let oyNomi = "";
//   switch (M) {
//     case 1:  oyNomi = "yanvar"; break;
//     case 2:  oyNomi = "fevral"; break;
//     case 3:  oyNomi = "mart"; break;
//     case 4:  oyNomi = "aprel"; break;
//     case 5:  oyNomi = "may"; break;
//     case 6:  oyNomi = "iyun"; break;
//     case 7:  oyNomi = "iyul"; break;
//     case 8:  oyNomi = "avgust"; break;
//     case 9:  oyNomi = "sentabr"; break;
//     case 10: oyNomi = "oktabr"; break;
//     case 11: oyNomi = "noyabr"; break;
//     case 12: oyNomi = "dekabr"; break;
//   }

//   console.log(`Keyingi sana: ${D}-${oyNomi} (D = ${D}, M = ${M})`);
// }



// Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq,
// "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril,
// 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda
// bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.


// let Y = "j"; 
// let K = 1;   

// let yangiYonalish = Y;

// switch (K) {
//   case 0:
//     yangiYonalish = Y;
//     break;

//   case 1: 
//     switch (Y) {
//       case "s": yangiYonalish = "g"; break;
//       case "g": yangiYonalish = "j"; break;
//       case "j": yangiYonalish = "q"; break;
//       case "q": yangiYonalish = "s"; break;
//       default: yangiYonalish = null;
//     }
//     break;

//   case 2: 
//     switch (Y) {
//       case "s": yangiYonalish = "q"; break;
//       case "q": yangiYonalish = "j"; break;
//       case "j": yangiYonalish = "g"; break;
//       case "g": yangiYonalish = "s"; break;
//       default: yangiYonalish = null;
//     }
//     break;

//   default:
//     yangiYonalish = null;
// }

// let natijaMatni = "";
// switch (yangiYonalish) {
//   case "s": natijaMatni = "Shimol"; break;
//   case "j": natijaMatni = "Janub"; break;
//   case "q": natijaMatni = "Sharq"; break;
//   case "g": natijaMatni = "G'arb"; break;
//   default: natijaMatni = "Noto'g'ri qiymat kiritildi!";
// }

// console.log(`Yangi yo'nalish: ${natijaMatni} (${yangiYonalish})`);







// Case9. O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik
// kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama,
// 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta
// turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqarib
// beruvchi programma tuzilsin.

// let N = 14; 
// let M = 4;  

// let qiymatNomi = "";
// let turNomi = "";


// switch (N) {
//   case 6:  qiymatNomi = "olti"; break;
//   case 7:  qiymatNomi = "yetti"; break;
//   case 8:  qiymatNomi = "sakkiz"; break;
//   case 9:  qiymatNomi = "to'qqiz"; break;
//   case 10: qiymatNomi = "o'n"; break;
//   case 11: qiymatNomi = "valet"; break;
//   case 12: qiymatNomi = "dama"; break;
//   case 13: qiymatNomi = "qirol"; break;
//   case 14: qiymatNomi = "tuz"; break;
//   default: qiymatNomi = "";
// }


// switch (M) {
//   case 1: turNomi = "g'isht"; break;
//   case 2: turNomi = "olma"; break;
//   case 3: turNomi = "chillak"; break;
//   case 4: turNomi = "qarg'a"; break;
//   default: turNomi = "";
// }

// if (qiymatNomi !== "" && turNomi !== "") {
//   console.log(`${qiymatNomi} ${turNomi}`);
// } else {
//   console.log("Xato: N (6-14) yoki M (1-4) oraliqda kiritilishi kerak!");
// }





// Case10. O`quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son
// kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata
// masala", "o`n uchta masala" va h.k.)

// let n = 23; 

// if (n >= 10 && n <= 40) {
//   let birlik = n % 10;
//   let onlik = (n - birlik) / 10; 

//   let onlikNomi = "";
//   let birlikNomi = "";

//   switch (onlik) {
//     case 1: onlikNomi = "o'n"; break;
//     case 2: onlikNomi = "yigirma"; break;
//     case 3: onlikNomi = "o'ttiz"; break;
//     case 4: onlikNomi = "qirq"; break;
//   }

//   switch (birlik) {
//     case 1: birlikNomi = "bitta"; break;
//     case 2: birlikNomi = "ikkita"; break;
//     case 3: birlikNomi = "uchta"; break;
//     case 4: birlikNomi = "to'rtta"; break;
//     case 5: birlikNomi = "beshta"; break;
//     case 6: birlikNomi = "oltita"; break;
//     case 7: birlikNomi = "yettita"; break;
//     case 8: birlikNomi = "sakkizta"; break;
//     case 9: birlikNomi = "to'qqizta"; break;
//     default: birlikNomi = "";
//   }


//   let natija = "";
//   if (birlik === 0) {
//     natija = `${onlikNomi}ta masala`;
//   } else {
//     natija = `${onlikNomi} ${birlikNomi} masala`;
//   }

//   console.log(natija);
// } else {
//   console.log("Xato: Faqat 10 dan 40 gacha bo'lgan son kiriting!");
// }






// Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma
// tuzilsin. (masalan: 123- "bir yuz yigirma uch").


// let n = 123;

// if (n >= 100 && n <= 999) {
//   let birlik = n % 10;
//   let onlik = ((n % 100) - birlik) / 10;
//   let yuzlik = (n - (n % 100)) / 100;

//   let yuzlikNomi = "";
//   let onlikNomi = "";
//   let birlikNomi = "";


//   switch (yuzlik) {
//     case 1: yuzlikNomi = "bir yuz"; break;
//     case 2: yuzlikNomi = "ikki yuz"; break;
//     case 3: yuzlikNomi = "uch yuz"; break;
//     case 4: yuzlikNomi = "to'rt yuz"; break;
//     case 5: yuzlikNomi = "besh yuz"; break;
//     case 6: yuzlikNomi = "olti yuz"; break;
//     case 7: yuzlikNomi = "yetti yuz"; break;
//     case 8: yuzlikNomi = "sakkiz yuz"; break;
//     case 9: yuzlikNomi = "to'qqiz yuz"; break;
//   }


//   switch (onlik) {
//     case 1: onlikNomi = "o'n"; break;
//     case 2: onlikNomi = "yigirma"; break;
//     case 3: onlikNomi = "o'ttiz"; break;
//     case 4: onlikNomi = "qirq"; break;
//     case 5: onlikNomi = "ellik"; break;
//     case 6: onlikNomi = "oltmish"; break;
//     case 7: onlikNomi = "yetmish"; break;
//     case 8: onlikNomi = "sakson"; break;
//     case 9: onlikNomi = "to'qson"; break;
//     default: onlikNomi = "";
//   }


//   switch (birlik) {
//     case 1: birlikNomi = "bir"; break;
//     case 2: birlikNomi = "ikki"; break;
//     case 3: birlikNomi = "uch"; break;
//     case 4: birlikNomi = "to'rt"; break;
//     case 5: birlikNomi = "besh"; break;
//     case 6: birlikNomi = "olti"; break;
//     case 7: birlikNomi = "yetti"; break;
//     case 8: birlikNomi = "sakkiz"; break;
//     case 9: birlikNomi = "to'qqiz"; break;
//     default: birlikNomi = ""; 
//   }

//   let natija = yuzlikNomi;
//   if (onlikNomi !== "") natija += " " + onlikNomi;
//   if (birlikNomi !== "") natija += " " + birlikNomi;

//   console.log(natija);
// } else {
//   console.log("Xato: 100 dan 999 gacha bo'lgan son kiriting!");
// }





// Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang
// (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon,
// ajdar, ilon, ot, qo`y, maymun, tovuq, it va to’ngizlardan) nomlarining
// kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini
// aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".

// let yil = 2024; 


// let farq = (yil - 1984) % 60;
// if (farq < 0) {
//   farq += 60; 
// }

// let hayvonQoldiq = farq % 12;
// let rangQoldiq = ((farq - hayvonQoldiq) / 12) % 5; 

// let rangNomi = "";
// let hayvonNomi = "";


// switch (rangQoldiq) {
//   case 0: rangNomi = "yashil"; break;
//   case 1: rangNomi = "qizil"; break;
//   case 2: rangNomi = "sariq"; break;
//   case 3: rangNomi = "oq"; break;
//   case 4: rangNomi = "qora"; break;
// }


// switch (hayvonQoldiq) {
//   case 0:  hayvonNomi = "sichqon"; break;
//   case 1:  hayvonNomi = "sigir"; break;
//   case 2:  hayvonNomi = "yo'lbars"; break;
//   case 3:  hayvonNomi = "quyon"; break;
//   case 4:  hayvonNomi = "ajdar"; break;
//   case 5:  hayvonNomi = "ilon"; break;
//   case 6:  hayvonNomi = "ot"; break;
//   case 7:  hayvonNomi = "qo'y"; break;
//   case 8:  hayvonNomi = "maymun"; break;
//   case 9:  hayvonNomi = "tovuq"; break;
//   case 10: hayvonNomi = "it"; break;
//   case 11: hayvonNomi = "to'ng'iz"; break;
// }

// console.log(`${rangNomi} ${hayvonNomi} yili`);






