function validateCheckSum(idNumber) {
    let oddSum = 0;
    for (let i = 0; i < idNumber.length - 1; i += 2) {
        oddSum += (+idNumber[i]);
    }
    console.log(oddSum);

    let evenPositionsField = 0;
    for (let i = 1; i < idNumber.length; i += 2) {
        evenPositionsField = evenPositionsField * 10 + (+idNumber[i]);
    }
    evenPositionsField *= 2;
    console.log(evenPositionsField);
    let evenPositionsFieldSum = evenPositionsField.toString().split('').reduce((acc, el) => +el + acc, 0);

    console.log(evenPositionsFieldSum);


    let overAllSum = evenPositionsFieldSum + oddSum;
    console.log(idNumber.slice(-1));
    console.log(10 - overAllSum.toString().slice(-1));

    return idNumber.slice(-1) == (10 - overAllSum.toString().slice(-1));
}

console.log(validateCheckSum("7411155106083"));