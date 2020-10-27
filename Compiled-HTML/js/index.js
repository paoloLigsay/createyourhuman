/* run aos */
AOS.init({ once: true })

const get = (el) => document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el)

const outputHead = get('.person__head')
const outputBody = get('.person__body')
const outputBottom = get('.person__bottom')

const { head, body, bottom } = svgData

outputHead.innerHTML = head.data[0]
outputBody.innerHTML = body.data[0]
outputBottom.innerHTML = bottom.data[0]

/* Insert Head Designs to Head List */
const headList = get('.head-list')

for(let svgHead of head.data) {
  headList.innerHTML += svgHead
}

/* Insert Body Designs to Body List */
const bodyList = get('.body-list')

for(let svgBody of body.data) {
  bodyList.innerHTML += svgBody
}

/* Insert Bottom Designs to Bottom List */
const bottomList = get('.bottom-list')

for(let svgBottom of bottom.data) {
  bottomList.innerHTML += svgBottom
}

/* sliders */

//head
let leftHeadArrow = get('.head-arrow')[0]
let rightHeadArrow = get('.head-arrow')[1]
let headCount = 0
let headTranslate = 0

rightHeadArrow.onclick = () => {
  if(headCount < head.data.length - 1) {
    headCount++
    headTranslate -= 125
    headList.style.transform = `translateX(${headTranslate}px)`
    outputHead.innerHTML = head.data[headCount]
  } else {
    headCount = 0
    headTranslate = 0
    headList.style.transform = `translateX(${headTranslate}px)`
    outputHead.innerHTML = head.data[headCount]
  }
}

leftHeadArrow.onclick = () => {
  if(headCount > 0) {
    headCount--
    headTranslate += 125
    headList.style.transform = `translateX(${headTranslate}px)`
    outputHead.innerHTML = head.data[headCount]
  } else {
    headCount = head.data.length - 1
    headTranslate -= 125
    headTranslate *= head.data.length - 1
    headList.style.transform = `translateX(${headTranslate}px)`
    outputHead.innerHTML = head.data[headCount]
  }
}

//body
let leftBodyArrow = get('.body-arrow')[0]
let rightBodyArrow = get('.body-arrow')[1]
let bodyCount = 0
let bodyTranslate = 0

rightBodyArrow.onclick = () => {
  if(bodyCount < body.data.length - 1) {
    bodyCount++
    bodyTranslate -= 125
    bodyList.style.transform = `translateX(${bodyTranslate}px)`
    outputBody.innerHTML = body.data[bodyCount]
  } else {
    bodyCount = 0
    bodyTranslate = 0
    bodyList.style.transform = `translateX(${bodyTranslate}px)`
    outputBody.innerHTML = body.data[bodyCount]
  }
}

leftBodyArrow.onclick = () => {
  if(bodyCount > 0) {
    bodyCount--
    bodyTranslate += 125
    bodyList.style.transform = `translateX(${bodyTranslate}px)`
    outputBody.innerHTML = body.data[bodyCount]
  }  else {
    bodyCount = body.data.length - 1
    bodyTranslate -= 125
    bodyTranslate *= body.data.length - 1
    bodyList.style.transform = `translateX(${bodyTranslate}px)`
    outputBody.innerHTML = body.data[bodyCount]
  }
}

//bottom
let leftBottomArrow = get('.bottom-arrow')[0]
let rightBottomArrow = get('.bottom-arrow')[1]
let bottomCount = 0
let bottomTranslate = 0

rightBottomArrow.onclick = () => {
  if(bottomCount < bottom.data.length - 1) {
    bottomCount++
    bottomTranslate -= 125
    bottomList.style.transform = `translateX(${bottomTranslate}px)`
    outputBottom.innerHTML = bottom.data[bottomCount]
  } else {
    bottomCount = 0
    bottomTranslate = 0
    bottomList.style.transform = `translateX(${bottomTranslate}px)`
    outputBottom.innerHTML = bottom.data[bottomCount]
  }
}

leftBottomArrow.onclick = () => {
  if(bottomCount > 0) {
    bottomCount--
    bottomTranslate += 125
    bottomList.style.transform = `translateX(${bottomTranslate}px)`
    outputBottom.innerHTML = bottom.data[bottomCount]
  } else {
    bottomCount = bottom.data.length - 1
    bottomTranslate -= 125
    bottomTranslate *= bottom.data.length - 1
    bottomList.style.transform = `translateX(${bottomTranslate}px)`
    outputBottom.innerHTML = bottom.data[bottomCount]
  }
}

/* Copy Code Function */
const Copybtn = get('.copy-svg')

Copybtn.onclick = () => {
  const svgCode = get('.output').innerHTML
  const el = document.createElement('textarea')
  el.value = svgCode
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  alert('SVG Code Copied!')
}

/* header - onscroll */

const header = get('.createyourhuman__header')

window.onscroll = () => {
  if(window.pageYOffset > 0) {
    header.classList.add('createyourhuman__header--active')
  } else {
    header.classList.remove('createyourhuman__header--active')
  }
}