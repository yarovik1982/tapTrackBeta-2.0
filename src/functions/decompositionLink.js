

export function decompositionLink(link){
   const arr = link.split("/").reverse()
   const id = parseInt(arr[0].split('_').slice(-1).join())
   const beerName = arr[0].split('_').slice(0, -1).join('_')
   const breweryName = arr[1]
   return {id:id, breweryName:breweryName, beerName:beerName}
 }

 export function getIdAtLink(link){
   return parseInt(link.split("_").slice(-1).join())
 }