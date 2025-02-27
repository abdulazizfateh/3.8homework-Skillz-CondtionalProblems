// // CONDITIONALS -> IF / ELSE    

// function task1(inputA) {
//     if (inputA > 0) {
//         console.log(inputA + 1);
//     } else {
//         console.log(inputA);
//     }
// }
// task1(1);



// function task2(inputA) {
//     if (inputA > 0) {
//         inputA++;
//     } else if (inputA === 0) {
//         console.log("Son 0 ga teng");
//     } else {
//         inputA--;
//         inputA--;
//     }
//     console.log(inputA);
// }
// task2(-1);



// function task3(inputA) {
//     if (inputA > 0) {
//         inputA++;
//     } else if (inputA === 0) {
//         inputA = 10;
//     } else {
//         inputA--;
//         inputA--;
//     }
//     console.log(inputA);
// }
// task3(1);



// function task4(inputA, inputB, inputC) {
//     let positive = 0;
//     if (inputA > 0) {
//         positive++;
//     }
//     if (inputB > 0) {
//         positive++;
//     }
//     if (inputC > 0) {
//         positive++;
//     }
//     console.log(`Siz kiritgan sonlardan ${positive} tasi musbat`);
// }
// task4(1, -2, 3);



// function task5(inputA, inputB, inputC) {
//     let positive = 0;
//     let negative = 0;
//     let neutral = 0;

//     if (inputA > 0) {
//         positive++;
//     } else if (inputA === 0) {
//         neutral++;
//     } else {
//         negative++;
//     }

//     if (inputB > 0) {
//         positive++;
//     } else if (inputB === 0) {
//         neutral++;
//     } else {
//         negative++;
//     }

//     if (inputC > 0) {
//         positive++;
//     } else if (inputC === 0) {
//         neutral++;
//     } else {
//         negative++;
//     }

//     if (neutral === 0) {
//         console.log(`Musbat sonlar: ${positive} ta`);
//         console.log(`Manfiy sonlar: ${negative} ta`);
//     } else if (positive === 0) {
//         console.log(`Manfiy sonlar: ${negative} ta`);
//         console.log(`0 ga teng sonlar: ${neutral} ta`)
//     } else if (negative === 0) {
//         console.log(`Musbat sonlar: ${positive} ta`);
//         console.log(`0 ga teng sonlar: ${neutral} ta`)
//     } else {
//         console.log(`Musbat sonlar: ${positive} ta`);
//         console.log(`Manfiy sonlar: ${negative} ta`);
//         console.log(`0 ga teng sonlar: ${neutral} ta`)
//     }

// }
// task5(-1, 0, 1);



// function task6(inputA, inputB) {
//     if (inputA > inputB) {
//         console.log(inputA);
//     } else if (inputA == inputB) {
//         console.log(`${inputA} = ${inputB} ga teng`);
//     } else {
//         console.log(inputB);
//     }
// }
// task6(1, 2);



// function task7(inputA, inputB) {
//     if (inputA > inputB) {
//         console.log(`Birinchi kiritilgan son, ya'ni ${inputA} katta`);
//     } else if (inputA === inputB) {
//         console.log(`${inputA} = ${inputB}`);
//     } else {
//         console.log(`Ikkinchi kiritilgan son, ya'ni ${inputB} katta`);
//     }
// }
// task7(11, 12);



// function task8(inputA, inputB) {
//     if (inputA > inputB) {
//         console.log(`Katta son: ${inputA}`);
//         console.log(`Kichik son: ${inputB}`);
//     } else {
//         console.log(`Katta son: ${inputB}`);
//         console.log(`Kichik son: ${inputA}`);
//     }
// }
// task8(11, 12);



// function task9(inputA, inputB, c) {
//     if (inputA > inputB) {
//         c = inputA;
//         inputA = inputB;
//         inputB = c;
//     }
//     console.log(`A son: ${inputA}`)
//     console.log(`B son: ${inputB}`)
// }
// task9(30, 20);



// function task10(inputA, inputB, c) {
//     if (inputA !== inputB) {
//         c = inputA;
//         inputA += inputB; // inputA = inputA + inputB
//         inputB += c; // inputB = inputB + c
//     } else {
//         inputA = 0;
//         inputB = 0;
//     }
//     console.log(`A = ${inputA}`);
//     console.log(`B = ${inputB}`);
// }
// task10(10, 20);