const get = (el) => document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el)

const head = get('.person__head')
const body = get('.person__body')
const bottom = get('.person__bottom')

head.innerHTML = svgData.head.data[12]
body.innerHTML = svgData.body.data[6]
bottom.innerHTML = svgData.bottom.data[0]

const btn = get('.btn')
const svgCode = get('.output').innerHTML

btn.onclick = () => {
  const el = document.createElement('textarea')
  el.value = svgCode
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}