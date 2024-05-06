export function unScroll(){
   const body = document.body
   body.classList.add('unScroll')
}

export function scroll(){
   const body = document.body
   body.classList.remove('unScroll')
}
export function scrollUp(){
   const app = document.getElementById('app');
   app.scrollIntoView({behavior:'smooth',top:0})
}
export function handleScroll() {
   
   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop; 
  
 return scrollPosition > 0
   
 }