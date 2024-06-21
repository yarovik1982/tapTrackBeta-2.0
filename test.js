
function formatName(name){
  const str = name.toLowerCase()

  return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
}
console.log(formatName('Gbd NNNN'));