const str = `
010-7722-0437
maxjc@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
d`

// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi

// const regexp = /fox/gi;
// console.log(regexp.test(str));
// console.log(str.replace(regexp, 'FOX'))

// console.log(str.match(/the/gim))
// console.log(str.match(/\.$/gim))

// console.log(str.match(/d$/gm));
// console.log(str.match(/^t/gim));
// console.log(str.match(/h..p/g));
// console.log(str.match(/fox|dog/g));
// console.log(str.match(/https?/g));/
// console.log(str.match(/d{2,}/g));
// console.log(str.match(/\b\w{2,3}\b/g));
// console.log(str.match(/[0-9]{1,}/g));
// console.log(str.match(/\bf\w{1,}/g));
// console.log(str.match(/\d{1,}/g));
// console.log(str.match(/\s/g));
// console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));


