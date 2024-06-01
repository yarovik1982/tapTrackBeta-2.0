function parseJwt(token) {
   const base64Url = token.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));
 
   return JSON.parse(jsonPayload);
 }
 

 const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiaXZhbGl5IiwiaXNzIjoiYXBwIiwiZXhwIjoxNjk4MTI4MjkxLCJpYXQiOjE2OTU1MzYyOTF9.HyR8M79K0QcxbO3pCx6np1wHNNBqqpW_1yuvJexckX4E_DUa5JpGhcOmbezxStyqkfJ7cfWzaqHsHSTVzbwEHw"
 const decodedPayload = parseJwt(token);
 const exp = decodedPayload.exp * 1000
 const iat = decodedPayload.iat * 1000
 const expDate = new Date(exp).toLocaleString() 
 const iatDate = new Date(iat).toLocaleString()
 console.log(iatDate);
 console.log(expDate);
 console.log(decodedPayload);
//  console.log(token.slice(0,token.length));
console.log((decodedPayload.exp - decodedPayload.iat )/ 60 / 60);
// console.log(decodedPayload.exp.toLocaleDateString());



