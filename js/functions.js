//1 функция
const checkingLengthString = function (string,maxLength){
  return string.length<=maxLength;
};
checkingLengthString('Привет Колька',8);

//2 функция
const checkPalindrome = function (string){
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i=normalString.length-1; i>=0;i--){
    reversedString+=normalString[i];
  }
  return reversedString === normalString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

//3 функция
const extractingNumbers = function (string){
  let number = '';
  for (let i=0;i<string.length ;i++){
    if (string[i]==='0'||Number(string[i])){
      number+=string[i];
    }
  }
  if (number===''){
    return NaN;
  }
  return Number(number);
};
extractingNumbers('2023 год');            // 2023
extractingNumbers('ECMAScript 2022');     // 2022
extractingNumbers('1 кефир, 0.5 батона'); // 105
extractingNumbers('агент 007');           // 7
extractingNumbers('а я томат');           // NaN
