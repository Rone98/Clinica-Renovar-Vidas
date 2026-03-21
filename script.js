function enviarMensagem(event) {
    event.preventDefault()

    const nome = document.getElementById('campo-nome').value
    const mensagem = document.getElementById('campo-mensagem').value
    const telefone = '5561981592670'

    const texto = `Olá me chamo ${nome}, venho do site ${mensagem}`
    const mformatada = encodeURIComponent(texto)

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mformatada}`

    
    gtag_report_conversion(url)
}

const slides = document.querySelectorAll(".fotos div");

let index = 0;

setInterval(() => {


    slides.forEach(slide => {
        slide.classList.remove("item-ativo");
        slide.classList.add("item");
    });


    index++;

    if (index >= slides.length) {
        index = 0;
    }


    slides[index].classList.remove("item");
    slides[index].classList.add("item-ativo");

}, 3000);



    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-18029486789/SEU_CODIGO_AQUI',
          'event_callback': callback
      });
      return false;
    }
    