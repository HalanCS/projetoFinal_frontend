/* Declaração de objetos ///////////////////////////// */

    // Janela suspensa
const array_componentes = document.querySelectorAll('.area')
const obj_janela = document.querySelector('#janela')
const obj_uti_comp = document.querySelector('#uti_comp')
const obj_img_comp = document.querySelector('#img_comp')
const obj_nome_comp = document.querySelector('#nome_comp')
const obj_p_fechar = document.querySelector('#p_fechar')

    // Carrossel
const obj_seta_ant_mtb = document.querySelector('#seta_ant_mtb')
const obj_seta_prox_mtb = document.querySelector('#seta_prox_mtb')
const obj_seta_ant_speed = document.querySelector('#seta_ant_speed')
const obj_seta_prox_speed = document.querySelector('#seta_prox_speed')
let card_mtb = 0
let card_speed = 0
const obj_img_sub_mtb = document.querySelector('#img_sub_mtb')
const obj_texto_sub_mtb = document.querySelector('#texto_sub_mtb')
const obj_img_bike_mtb = document.querySelector('#img_bike_mtb')
const obj_img_sub_speed = document.querySelector('#img_sub_speed')
const obj_texto_sub_speed = document.querySelector('#texto_sub_speed')
const obj_img_bike_speed = document.querySelector('#img_bike_speed')

    // Caixa de texto
const obj_descricao_mtb = document.querySelector('#descricao_mtb')
const obj_descricao_speed = document.querySelector('#descricao_speed')
const array_quadro = document.querySelectorAll('.quadro')

    // header flexível
const obj_header = document.querySelector('header')
const obj_titulo = document.querySelector('#titulo')
const obj_menu = document.querySelector('.menu')

/* Declaração de eventos ///////////////////////////// */
    // Janela suspensa
for(const obj_componente of array_componentes){
    if(obj_componente === 0){
        obj_componente.addEventListener('click', function(){funSupsDt(obj_componente)})
    }
    else if(obj_componente === 1){
        obj_componente.addEventListener('click', function(){funFreio(obj_componente)})
    }
    else if(obj_componente === 2){
        obj_componente.addEventListener('click', function(){funSupsTr(obj_componente)})
    }
    else if(obj_componente === 3){
        obj_componente.addEventListener('click', function(){funRelacao(obj_componente)})
    }
    else
        obj_componente.addEventListener('click', function(){funCentral(obj_componente)})
    }

    obj_p_fechar.addEventListener('click', funFechaJanela)

    // Caixa de texto
array_quadro.forEach((quadro, index) =>{
    if(index === 0){
        quadro.addEventListener('click', function(){funDescricaoMtb(this)})
    }
    else if(index === 1){
        quadro.addEventListener('click', function(){funDescricaoSpeed(this)})
    }
})

    // Carrossel
obj_seta_ant_mtb.addEventListener('click', funAntMtb)
obj_seta_prox_mtb.addEventListener('click', funProxMtb)
obj_seta_ant_speed.addEventListener('click', funAntSpeed)
obj_seta_prox_speed.addEventListener('click', funProxSpeed)


/* Declaração de funções ///////////////////////////// */

    // Janela suspensa
function funCentral(comp){
    let par_ind = 0
    obj_janela.style.display = 'flex'
    if(comp.id == 'susp_dt'){
        par_ind = 0
        obj_img_comp.setAttribute('src', componentes[par_ind]['src'])
        obj_img_comp.setAttribute('alt', componentes[par_ind]['nome'])
        obj_nome_comp.innerHTML = componentes[par_ind]['nome']
        obj_uti_comp.innerHTML = componentes[par_ind]['descricao']
    }
    else if((comp.id == 'freio')){
        par_ind = 1
        obj_img_comp.setAttribute('src', componentes[par_ind]['src'])
        obj_img_comp.setAttribute('alt', componentes[par_ind]['nome'])
        obj_nome_comp.innerHTML = componentes[par_ind]['nome']
        obj_uti_comp.innerHTML = componentes[par_ind]['descricao']
    }
    else if((comp.id == 'susp_tr')){
        par_ind = 2
        obj_img_comp.setAttribute('src', componentes[par_ind]['src'])
        obj_img_comp.setAttribute('alt', componentes[par_ind]['nome'])
        obj_nome_comp.innerHTML = componentes[par_ind]['nome']
        obj_uti_comp.innerHTML = componentes[par_ind]['descricao']
    }
    else if((comp.id == 'relacao')){
        par_ind = 3
        obj_img_comp.setAttribute('src', componentes[par_ind]['src'])
        obj_img_comp.setAttribute('alt', componentes[par_ind]['nome'])
        obj_nome_comp.innerHTML = componentes[par_ind]['nome']
        obj_uti_comp.innerHTML = componentes[par_ind]['descricao']
    }
    else if((comp.id == 'central')){
        par_ind = 4
        obj_img_comp.setAttribute('src', componentes[par_ind]['src'])
        obj_img_comp.setAttribute('alt', componentes[par_ind]['nome'])
        obj_nome_comp.innerHTML = componentes[par_ind]['nome']
        obj_uti_comp.innerHTML = componentes[par_ind]['descricao']
    }
}


function funFechaJanela(){
    obj_janela.style.display = 'none'
}

    // Header flexível    
window.onscroll = function(){
    if(window.scrollY > 100){
        obj_header.classList.add("shrink")
       
    }
    else
    obj_header.classList.remove("shrink")
    
}
    // Caixa de texto
function funDescricaoMtb(quadro){
    const paragrafo = quadro.lastElementChild
    if(paragrafo.style.display == 'none')
        paragrafo.style.display = 'flex'
    else
        paragrafo.style.display = 'none'
}
function funDescricaoSpeed(quadro){
    const paragrafo = quadro.lastElementChild
    if(paragrafo.style.display == 'none')
        paragrafo.style.display = 'flex'
    else
        paragrafo.style.display = 'none'
}
    // Carrossel
function funExibeMTB(par_ind){
    obj_img_sub_mtb.setAttribute('src', mtb[par_ind]['foto_sub'])
    obj_img_sub_mtb.setAttribute('alt', mtb[par_ind]['submodalidade'])
    obj_img_bike_mtb.setAttribute('src', mtb[par_ind]['foto_bike'])
    obj_img_bike_mtb.setAttribute('alt', mtb[par_ind]['submodalidade'])
    obj_texto_sub_mtb.innerHTML = mtb[par_ind]['submodalidade']
    obj_descricao_mtb.innerHTML = mtb[par_ind]['descricao'] // essa parte é para a caixa de texto
    
}
function funExibeSPEED(par_ind){
    obj_img_sub_speed.setAttribute('src', speed[par_ind]['foto_sub'])
    obj_img_sub_speed.setAttribute('alt', speed[par_ind]['submodalidade'])
    obj_img_bike_speed.setAttribute('src', speed[par_ind]['foto_bike'])
    obj_img_bike_speed.setAttribute('alt', speed[par_ind]['submodalidade'])
    obj_texto_sub_speed.innerHTML = speed[par_ind]['submodalidade']
    obj_descricao_speed.innerHTML = speed[par_ind]['descricao'] // essa também é pra caixa de texto
}
function funAntMtb(){
    card_mtb--
    if(card_mtb < 0)
        card_mtb = (mtb.length-1)
    funExibeMTB(card_mtb)
}
function funProxMtb(){
    card_mtb++
    if(card_mtb == mtb.length)
        card_mtb = 0
    funExibeMTB(card_mtb)
}
function funAntSpeed(){
    card_speed--
    if(card_speed < 0)
        card_speed = (speed.length-1)
    funExibeSPEED(card_speed)
}
function funProxSpeed(){
    card_speed++
    if(card_speed == speed.length)
        card_speed = 0
    funExibeSPEED(card_speed)
}
funExibeMTB(0)
funExibeSPEED(0)
