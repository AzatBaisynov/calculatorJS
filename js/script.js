const ce = document.querySelector('.ce')
const equal = document.querySelector('.equal')
const out = document.querySelector('.calculator__inp')
const allBtns = document.querySelectorAll('.calculator__btn')
const arrSymbols = ['/','+','-','*']
const allVisibleBtns = Array.from(allBtns).filter(e => e.textContent !== 'CE').filter(e => e.textContent !== '=')

ce.addEventListener('click', () => { out.textContent = '0'})

allVisibleBtns.forEach( el => {
    el.addEventListener('click', () => {
        let bool = true
        if (out.textContent === '0') out.textContent = ''
        arrSymbols.forEach(arrEl => {
            if(arrEl === el.textContent && out.textContent[out.textContent-1] === arrEl) bool = false
        })
        if(bool) out.textContent = out.textContent.concat(el.textContent)
        bool = true
    })
})

equal.addEventListener('click', () => {
    if (checker()) out.textContent = eval(out.textContent)
})

function checker() {
    let bool = true
    arrSymbols.forEach(el=> {
        if (out.textContent[0] === el) bool = false
        if (out.textContent[out.textContent.length -1] === el) bool = false
    })
    return bool
}
