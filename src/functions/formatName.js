export function formatName(str){
   if(typeof str === 'string'){

      return str.toLowerCase().split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
   }else{
      return str
   }
 
 }