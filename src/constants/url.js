export const BASE_URL = 'http://109.201.96.70:8081/api'

export const URL = 'http://taptrack.ru'

function replaceEmpty (str){
   return str.split(' ').join("_")
}

 function generateLink(brewery, beer){
   const url = 'http://taptrack.ru'
   const breweryChank = replaceEmpty(brewery.name)
   const beerChank = replaceEmpty(beer.name)

   return url + '/' + breweryChank + '/' + beerChank
} 

console.log(generateLink({ name: 'Степь и ветер' }, { name: 'гроза и тучи в Москве' }));