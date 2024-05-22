function parseJwt(token) {
   const base64Url = token.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));
 
   return JSON.parse(jsonPayload);
 }
 

 const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YXJvdmlrIiwiaXNzIjoiYXBwIiwiZXhwIjoxNjkyOTA1NjEwLCJpYXQiOjE2OTI5MDM4MTB9.5uxIcXbLA1Ycd9Z1X3iKPIpsLSBmkcgbOYk8UtL29ltIkJo6gGPYcnnpIm47WtSA-IJgddGOdP2QPsGMxUMQhA"
 const decodedPayload = parseJwt(token);
 console.log(decodedPayload);