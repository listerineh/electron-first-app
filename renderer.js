const $ = selector => document.querySelector(selector)

const $count = $('#count')
const $button = $('button')

$button.addEventListener('click', () => {
  const pastCount = +$count.innerHTML
  $count.innerHTML = (pastCount + 1).toString()
})
