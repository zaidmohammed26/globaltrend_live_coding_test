//str1=abcde   str2=ace

function longestSubsequence(str1, str2) {
  let i = 0,
    j = 0,
    result = 0,
    k = 0;
  while (i < str1.length) {
    if (j === str2.length) {
      j = k;
      i++;
    }
    while (j < str2.length) {
      if (str2[j] === str1[i]) {
        i++;
        k = j;
        result++;
      } else {
        j++;
      }
    }
    if (i === str1.length) {
      return result;
    }
  }
  return result;
}

console.log(longestSubsequence("ace", "abcdee"));
