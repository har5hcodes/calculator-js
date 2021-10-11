const keys = document.querySelector('#keys-section')
const displayEl = document.querySelector("#display-section")

keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = displayEl.textContent
        if (!action) {
            if (displayedNum === '0') {
                displayEl.textContent = keyContent
            } else {
                displayEl.textContent = displayedNum + keyContent
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
        }
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                displayEl.textContent = displayedNum + '.'
            }
        }

        if (action === 'clear') {
            displayEl.textContent = "0"
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
    }

})