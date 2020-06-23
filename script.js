

const navContent = document.querySelector('.nav-content')
const navBurger = document.querySelector('.nav-burger')
const navBurgerLine = document.querySelectorAll('.nav-burger .line')


navBurger.addEventListener('click', ()=>{

	navContent.classList.toggle('active')

	navBurgerLine.forEach(line => {
		line.classList.toggle('active')
	})

})

const header = document.querySelector('header')
const aboutUs = document.querySelector('.about-us')

const options = {

	threshold: 0.9

}

const section = (entry) => {

	if(entry[0].boundingClientRect.top < 0){
		header.classList.add('active')
	}else{
		header.classList.remove('active')
	}
	
}

const observer = new IntersectionObserver(section, options)

observer.observe(aboutUs)


