function parseJwt(token) {
   const base64Url = token.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));
 
   return JSON.parse(jsonPayload);
 }
 

 const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWRiYWRfbyIsImlzcyI6ImFwcCIsImV4cCI6MTcxNjY0MTAxMywiaWF0IjoxNzE2NjM5ODEzfQ.eqvQ6tAjOR26tZOVT63qe3Pxkus-OqnehUc9K9hvOH-EXvgK-iVchQaG-U7pwUjgf-NGSik_86qCtJZgrh8k3Q"
 const decodedPayload = parseJwt(token);
 console.log(decodedPayload);
//  console.log(token.slice(0,token.length));
console.log((1716641013-1716639813 )/ 60);