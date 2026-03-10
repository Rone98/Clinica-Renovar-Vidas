function enviarMensagem(event) {
    event.preventDefault()

    const nome = document.getElementById('campo-nome').value
    const mensagem = document.getElementById('campo-mensagem').value
    const telefone = '5561981592670'

    const texto = `Olá me chamo ${nome} ,venho do site na internet   ${mensagem}`
    const mformatada = encodeURIComponent(texto)

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mformatada}`

    console.log(url)


    window.open(url, '_blank')
}