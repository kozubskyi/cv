'use strict'

const textCursor = document.querySelector('.text-cursor')
const dateOfBirthText = document.querySelector('.date-of-birth').lastChild
const contactLinks = document.querySelectorAll('.contact-link')
const mastersDiploma = document.querySelector('.degree')
const goit = document.getElementById('goit')
const englishPrime = document.getElementById('english-prime')
const pdfBtn = document.querySelector('.pdf-btn')
const backdrop = document.querySelector('.backdrop')
const backdropImg = backdrop.children[0]

setInterval(() => textCursor.classList.toggle('hidden'), 500)

function countAndSetAge() {
	const dateOfBirth = dateOfBirthText.data.trim()

	const now = new Date()
	const dob = new Date(dateOfBirth.split('.').reverse().join('-'))

	const age = Math.floor((now - dob) / 1000 / 60 / 60 / 24 / 365.25)

	dateOfBirthText.data = `${dateOfBirth} (${age} years)`
}
function setContactLinks() {
	contactLinks.forEach(link => {
		const text = link.href.replace('tel:', '').replace('mailto:', '').replace('http://', '').replace('https://', '')

		link.lastChild.title = text
		link.lastChild.textContent = text
	})
}
function openModalWithImg(evt) {
	if (evt.target.nodeName === 'SPAN') {
		backdropImg.src = evt.target.parentNode.dataset.src
		backdropImg.alt = evt.target.parentNode.dataset.alt
		backdropImg.title = evt.target.parentNode.dataset.alt
	} else {
		backdropImg.src = evt.target.dataset.src
		backdropImg.alt = evt.target.dataset.alt
		backdropImg.title = evt.target.dataset.alt
	}

	backdrop.classList.remove('hidden')
	document.body.style.overflow = 'hidden'
}
function clearBackdropImgAndCloseBackdrop() {
	document.body.style.overflow = 'visible'
	// document.body.removeAttribute('style');
	backdrop.classList.add('hidden')

	backdropImg.src = ''
	backdropImg.alt = ''
	backdropImg.title = ''
}
// function setProjectLinks() {
//   projects.forEach(project => {
//     const href = project.firstElementChild.href;
//     const p = project.lastElementChild.lastElementChild.lastElementChild;
//     let link = null;

//     if (href.slice(0, 5) === 'https') {
//       link = href.slice(8);
//       p.textContent = link;
//     } else {
//       p.textContent = 'this project';
//     }
//   });
// }

countAndSetAge()
setContactLinks()
// setProjectLinks();

window.addEventListener('keydown', evt => {
	if (evt.code !== 'Escape' || backdrop.classList.contains('hidden')) return

	clearBackdropImgAndCloseBackdrop()
})
backdrop.addEventListener('click', evt => {
	if (evt.target !== evt.currentTarget) return

	clearBackdropImgAndCloseBackdrop()
})
mastersDiploma.addEventListener('click', openModalWithImg)
goit.addEventListener('click', openModalWithImg)
englishPrime.addEventListener('click', openModalWithImg)
// pdfBtn.addEventListener('mouseover', evt => {
//   const x = evt.pageX - pdfBtn.offsetLeft;
//   const y = evt.pageY - pdfBtn.offsetTop;
//   pdfBtn.style.setProperty('--x', x + 'px');
//   pdfBtn.style.setProperty('--y', y + 'px');
// });
