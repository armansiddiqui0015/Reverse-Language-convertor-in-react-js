let english = 'my full name is arman siddiqui'

let convertor = english.split(' ').map((word) => {
  let wordCovertor = word.split('').reverse().join('')
  return wordCovertor
}).join(' ')
console.log(convertor)
