const card = document.querySelector('.card')
const ratingForm = document.querySelector('.ratingForm')
const thanksState = document.querySelector('.thanks')
const resultWrap = document.querySelector('.result')
const errorMessage = document.querySelector('.error')

function ratingFeedback () {

  const radios = document.getElementsByName('rating')
  const result = 10

  for (let el of radios) {
    if (el.checked) {
      resultWrap.innerText = el.value
    }
  }

  card.classList.add('flip')
  setTimeout(() => {
    ratingForm.style.display = 'none'
    thanksState.style.display = 'block'
  }, 400)
}