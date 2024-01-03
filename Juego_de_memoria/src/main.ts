let array: string[] = ['🐶','🐩','🐕','🐕‍🦺', '🐱','🐄'];




const div_carta = document.getElementById('div_carta');
const carta1 = document.getElementById('1');
const carta2 = document.getElementById('2');

function changeCard1 (){

    if (carta1 && carta1 instanceof HTMLImageElement){
        
        carta1.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png'

        carta1.className = 'animalito rotate'
    } else {
        console.error('No se ha encontrado la imagen de la carta.')
    }
    
}

function changeCard2 (){
    if (carta2 && carta2 instanceof HTMLImageElement){
        carta2.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png'

        carta2.className = 'animalito rotate'
    } else {
        console.error('No se ha encontrado la imagen de la carta.')
    }
}
    

carta1?.addEventListener('click', changeCard1)
carta2?.addEventListener('click', changeCard2)
