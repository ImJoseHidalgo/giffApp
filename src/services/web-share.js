export const webShare = () => {
  if ('share' in navigator) {
    navigator.share({
      title: 'GIFs App',
      text: 'Guarda en tu telefono el GIF que quieras!',
      url: 'https://gif9.netlify.app/',
    })
    .then(()=>{
      alert('Gracias por compartirme! :)')
    })
    .catch(()=>{
      alert('Algo paso, no se pudo compartir la app con exito :0')
    })
  } else {
    alert('Lamentablemente la API de web-share no esta disponible en este navegador :(')
  }
}