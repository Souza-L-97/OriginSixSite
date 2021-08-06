// alert('eu existo')
//char - string
//"um texto aqui"

//number
//12345

//boolean true of false
//true
//false

//estruturar dados {}
//{
//  name:'carro';
//cor:'vermelho';
//correr:function() {

//}
//}
//var vs const -- a var muda valor, a const nao;

//function dandoumnomeafuncao() {}

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//console.log(toggle) mostrar quantos toggles achou no html no console

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, fechar todo o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da pagina qnd der scroll //
const header = document.querySelector('#header')
const navheight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navheight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //menor que a altura do header//
  }
}

// slider carousel //
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//scroll reveal//
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand, #footer .social`,
  { interval: 100 }
)
/* botao back to top show toggle TESTE 


const header = document.querySelector('#header')
const navheight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navheight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //menor que a altura do header//
  }
})

*/

/* botao back to top show toggle  */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 460) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*ativar link ativo dos botoes do menu quando em modo 1200px*/
const sections = document.querySelectorAll('main section[id]')
function ActiveMenuAtCUrrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* também dá pra agrupar as funções cujos eventos sao ativados pelo mesmo gatilho: scroll, altura minima, etc */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  ActiveMenuAtCUrrentSection()
})
