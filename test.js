const arr = [
  {"id":1},
  {"id":2},
  {"id":3},
  {"id":4},
]
const func = id => arr.find(item => item.id === id)
console.log(typeof func(2));