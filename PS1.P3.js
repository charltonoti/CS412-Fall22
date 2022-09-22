

const decoratorString = (str, func) => {
  return func(str);
};

const cDecorator = (str) => {
  let newStr = str.split('c');
  return newStr;
};

const aDecorator = (str) => {
  let newStr = str.split('a').join('A');
  let obj = {
    originalString: str,
    modifiedString: newStr,
    numberReplaced: str.length - newStr.length,
    length: newStr.length
  };
  return obj;
};

console.log(decoratorString('supercalifragilisticexpialidocious', cDecorator));