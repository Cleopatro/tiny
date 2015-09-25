// 1. 检查字符串中是否含有重复字符。
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str); // \n: 和第n个分组第一次匹配的字符相匹配。
}

function hasUniqueChars(str){
  return str.split('').every(function(v, i, arr){
    return arr.indexOf(v) == i; // Array.every: 遇到false即返回false；否则遍历整个数组，最后返回true。
  });
}