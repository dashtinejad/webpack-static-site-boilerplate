import './src/postcss/styles.postcss'

const elem = document.createElement('h2')
elem.innerText = 'I am generated from app.js'
document.body.appendChild(elem)

console.log('checking sourcemap')