// if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda
// o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.


// let x=15;
// if (x>0) {
//     console.log(x+1);
// }else{
//     console.log(x);
// }




// if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar
// manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil
// bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.


// let a=0;
// if (a>0) {
//     a+=1
    
// }else if(a<0){
//     a-=2
    
// }else{
//     a=10;
    
// }
// console.log(a);





// if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini
// aniqlovchi programma tuzilsin.

// let a=-2;
// let b=3;
// let c=-1;
// let musbat=0;
// if(a>0){
//     musbat++;
// }
// if(b>0){
//     musbat++;
// }
// if(c>0){
//     musbat++
// }
// console.log(musbat);





// if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma
// tuzilsin.

// let a=45;
// let b=156;
// let max="";
// if (a>b) {
//     max=a;
// }else{
//     max=b;
// }
// console.log(max);




// if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi
// programma tuzilsin.

// let a=65;
// let b=85;
// let min="";
// let t=""
// if(a>b){
//     min=b;
//     t=2;
// }else{
//     min=a;
//     t=1;
// }
// console.log(`Tartib raqam:${t}, Raqam: ${min}`);






// if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini
// ekranga chiqaruvchi programma tuzilsin

// let a=98;
// let b=27;
// max="";
// min="";
// if(a>b){
//     max=a;
//     min=b
// }else{
//     max=b;
//     min=a;
// }
// console.log(`Max: ${max}, Min: ${min}`);



// if7. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A
// son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

// let A=36;
// let B=114;
// if (A>B) {
//     let temp=A;
//     A=B;
//     B=temp;
// }

// console.log(`A=${A}, B=${B}`);



// if8. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va
// B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni
// o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.


// let A=97;
// let B=97;
// if (A==B) {
//     A=0;
//     B=0;
// }else{
//     A=A+B;
//     B=A;
// }
// console.log(`A=${A}, B=${B}`);



// if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va
// B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B
// ning qiymati ekranga chiqarilsin.


// let A=78;
// let B=45;
// if(A===B){
//     A=0;
//     B=0;
// }else{
//     if(A>B){
//         B=A;
//         A=B;
//     }else{
//         A=B;
//         B=A;
//     }
// }
// console.log(`A=${A}, B=${B}`);




// if10. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin

// let a=-8;
// let b=9;
// let c=-2;
// let min=a;
// if(b<min){
//     min=a;
// }
// if(c<min){
//     min=c;
// }
// console.log(min);



// if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar
// orasidagi son) ni aniqlovchi programma tuzilsin.

// let a=45;
// let b=67;
// let c=97;
// max=a;
// min=a;
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
// console.log(a+b+c-max-min);


// if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini
// ekranga chiqaruvchi programma tuzilsin.

// let a=65;
// let b=97;
// let c=68;
// let max=a;
// let min=a;
// if(b>max){
//     max=b;
// }
// if(c>max){
//     max=c;
// }if(b<min){
//     min=b;
// }
// if(c<min){
//     min=c;
// }
// let middle=a+b+c-max-min;
// console.log(`Max: ${max}, Middle: ${middle}`);




// if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan
// bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning
// qiymatlari ekranga chiqarilsin.

// let A=65;
// let B=23;
// let C=-41;
// if(A<B && B<C){
//     A*=2;
//     B*=2;
//     C*=2;
// }else{
//     A*=-1;
//     B*=-1;
//     C*=-1;
// }
// console.log(`A=${A}, B=${B}, C=${C}`);





// if14. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish
// tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi
// o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqar

// let A=68;
// let B=34;
// let C=28;
// if ((A<B && B<C) || (C<B && B<A)){
//     A*=2;
//     B*=2;
//     C*=2;
// }else{
//     A*=-1;
//     B*=-1;
//     C*=-1;
// }
// console.log(`A=${A}, B=${B}, C=${C}`);





// if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini
// tartib raqami aniqlansin.

// let a=78;
// let b=78;
// let c=48;
// let d=78;
// let tartib="";
// if (a==b && b==c){
//     tartib=4;
// }else if( a==b && b==d){
//     tartib=3;
// }else if(b==d && d==c){
//     tartib=1;
// }else if(a==d && d==c){
//     tartib=2;
// }else{
//     tartib="Shart bajarilmagan!!"
// }
// console.log(tartib);





// if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4

// let x=-45;
// if(x<=0){
//     x*=-1;
// }else if(0<x && x<2){
//     x=x**2;
// }else{
//     x=4;
// }console.log(x);



// if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini
// aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda
// 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar
// ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va
// 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

// let year=1900;
// if(year%4==0 && (year%400==0 || year%100!=0)){
//     console.log("Kabisa yili");
// }else{
//     console.log("Kabisa yili emas");
// }



// if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch
// xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.

// let n=367;
// if(n%2==0){
//     if(0<n && n<10){
//         console.log("Bir xonali juft son");
//     }else if(9<n && n<100){
//         console.log("Ikki xonali juft son");
//     }else if(99<n && n<1000){
//         console.log("Uch xonali juft son");
//     }
// }else{
//     if(0<n && n<10){
//         console.log("Bir xonali toq son");
//     }else if(9<n && n<100){
//         console.log("Ikki xonali toq son");
//     }else if(99<n && n<1000){
//         console.log("Uch xonali toq son");
//     }
// }
















