const sendToServer = async () => {
   if (avatarEditorRef.value) {
     const canvasData = avatarEditorRef.value.getImageScaled();
     const blob = await new Promise((resolve) => {
       canvasData.toBlob(resolve, 'image/png');
     });
 
     const formData = new FormData();
   //    Первый аргумент - это имя поля для отправки на сервер, второй аргумент - сами данные (Blob), третий аргумент - имя файла (необязательно, но может быть полезно для сервера).
     formData.append('image', blob, 'avatar.png');
 
     try {
       const response = await fetch('/upload', {
         method: 'POST',
         headers:{
            'Authorisation': 'Bearer ' + token,
         },
         body: formData,
       });
 
       if (response.ok) {
         console.log('Изображение успешно отправлено на сервер');
       } else {
         console.error('Ошибка при отправке изображения на сервер');
       }
     } catch (error) {
       console.error('Ошибка сети:', error);
     }
   }
 };
 

 // const save = () => {
//   if (avatarEditorRef.value) {
//     const canvasData = avatarEditorRef.value.getImageScaled();
//     const img = canvasData.toDataURL("image/png");
//     console.log(img);
//   }
// };