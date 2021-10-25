function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'manhã.png 1.jpg'
      
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png 1.jpg'
    
} else {
    img.src = 'noite.png 1.jpg'
}
}

