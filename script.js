function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano){
        alert('Erro! Ano inválida')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //bebe-criança
                img.src = 'imagens/homembebe.png'
                res.innerHTML= `Detectamos uma <strong>${genero} Criança</strong> com <strong>${idade}</strong> anos.`
            }else if(idade < 21){
                //jovem-adolescente
                img.src = 'imagens/homemadolescente.png'
                res.innerHTML= `Detectamos uma <strong>${genero} Adolescente</strong> com <strong>${idade}</strong> anos.`
            }else if(idade < 50){
                //adulto
                img.src = 'imagens/homemadulto.png'
                res.innerHTML= `Detectamos uma <strong>${genero} Adulto</strong> com <strong>${idade}</strong> anos.`
            }else {
               //idoso 
               img.src = 'imagens/homemidoso.png'
               res.innerHTML= `Detectamos um <strong>${genero} Idoso</strong> com <strong>${idade}</strong> anos.`
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //bebe-criança
                img.src = 'imagens/mulherbebe.png'
                res.innerHTML= `Detectamos uma <strong>${genero} Criança</strong> com <strong>${idade}</strong> anos.`
            }else if(idade < 21){
                //jovem-adolescente
                img.src = 'imagens/mulheradolescente.png'
                res.innerHTML= `Detectamos uma <strong>${genero} adolecesnte</strong> com <strong>${idade}</strong> anos.`
            }else if(idade < 50){
                //adulto
                img.src = 'imagens/mulheradulta.png'
                res.innerHTML= `Detectamos uma <strong>${genero} Adulta</strong> com <strong>${idade}</strong> anos.`
            }else {
               //idoso 
               img.src = 'imagens/mulheridosa.png'
               res.innerHTML= `Detectamos uma <strong>${genero} Idosa</strong> com <strong>${idade}</strong> anos.`
            }
        
    }
    
    res.appendChild(img)
}
}