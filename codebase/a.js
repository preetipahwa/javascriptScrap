let upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
let lower = "qwertyuiopasdfghjklzxcvbnm"

function isUpper(ch){
  for(let i = 0; i<upper.length; i++){
    if (ch==upper[i]) return true
  }
  return false
}
function isLower(ch){
  let ans = true
  for(let i = 0; i<upper.length; i++){
    if (ch==upper[i]) ans = false
  }
  return ans
}
function toUpper(ch){
  for(let i =0; i<lower.length; i++){
    if(ch==lower[i]) return upper[i]
  }
  return ch
}
function toLower(ch){
  for(let i =0; i<upper.length; i++){
    if(ch==upper[i]){
      return lower[i]
    }
  }
  return ch
}
function toggleChar(ch){
  if(isUpper(ch)) return toLower(ch)
  return toUpper(ch)
}
function strToUpper(str){
  ans = ''
  for(let i=0; i<str.length; i++){
    ans += toUpper(str[i])
  }
  return ans
}
function strToLower(str){
  ans = ''
  for(let i=0; i<str.length; i++){
    ans += toLower(str[i])
  }
  return ans
}
function toggleStr(str){
  ans = ''
  for(let i=0;i<str.length;i++){
    ans+=toggleChar(str[i])
  }
  return ans
}
function arrToUpper(arr){
  for(let i=0; i<arr.length; i++){
    arr[i] = strToUpper(arr[i]);
  }
}
function arrToLower(arr){
  for(let i=0; i<arr.length; i++){
    arr[i] = strToLower(arr[i]);
  }
}
function toggleArr(arr){
  for(let i=0;i<arr.length;i++){
    arr[i]=toggleStr(arr[i])
  }
}

let arr1 = ["Sagar","pAHWA","AruN","guPTa"]

arrToUpper(arr1);
console.log(arr1);
arrToLower(arr1);
console.log(arr1);
toggleArr(arr1);
console.log(arr1);

