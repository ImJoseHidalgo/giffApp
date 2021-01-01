export const webShare = (url) => {
  if ('share' in navigator) {
    navigator.share({
      title: 'GIFs App',
      text: url ? 'Mira este Gif: ' : 'Guarda en tu telefono el GIF que quieras!',
      url: url || 'https://gif9.netlify.app/',
    })
    // .then(()=>{
    //   alert('Gracias por compartirme! :)')
    // })
    // .catch(()=>{
    //   alert('Algo paso, no se pudo compartir la app con exito :0')
    // })
  } else {
    alert('Lamentablemente la opcion de compartir no esta disponible en en este navegador :(')
  }
}