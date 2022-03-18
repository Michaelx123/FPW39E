const arr = [1, 2, null, NaN, 0, 0, 6, 7, 8, 12, undefined, 1.2, Infinity, -Infinity,'строка','0',-1.2,-2];

let isEven = 0;
let isOdd = 0;
let isZero = 0;
let isOver = 0;

arr.forEach(function(item, index, array) {
    //console.log(typeof item + ' '+isFinite(item)+' ' +(item ^ 0));
    //На четность проверяю только целые числа, вещественные отношу к иным элементам
    //if (typeof (item) !== "number" || !isFinite(item) || (item ^ 0) !== item){ //Не вижу необходимости проверки на typeof (item) !== "number"
    if (!isFinite(item) || (item ^ 0) !== item){
        isOver++;
    } else if (item == 0) {
        isZero++;        
    } else if (item % 2 ==0) {
        isEven++;
    } else {
        isOdd++;
    }
    })


console.log('Количество четных: '+isEven);
console.log('Количество нечетных: '+isOdd);
console.log('Количество равных нулю: '+isZero);
console.log('Количество иных элементов: '+isOver);