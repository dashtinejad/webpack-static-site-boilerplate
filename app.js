import './src/postcss/styles.postcss'

const elem = document.createElement('h2')
elem.innerText = 'I am generated from app.js'
document.body.appendChild(elem)

const a = [1, 2, 3]
console.log('checking sourcemap')
console.log(...a)