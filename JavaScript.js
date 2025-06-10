const board = document.getElementById('board')
const table = document.getElementById('table')
const go = document.getElementById('go')
for (var i = 0; i < 18; i++) {
    let tr = document.createElement('tr')
    table.appendChild(tr)
    for (var j = 0; j < 18; j++) {
        let td = document.createElement('td')
        td.setAttribute('class', 'square')
        tr.appendChild(td)
    }
}
for (var i = 0; i < 17; i++) {
    let tr = document.createElement('tr')
    go.appendChild(tr)
    for (var j = 0; j < 17; j++) {
        let td = document.createElement('td')
        td.setAttribute('id', i + '-' + j)
        tr.appendChild(td)
    }
}
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        let dot = document.createElement('div')
        dot.setAttribute('class', 'dot')
        let margin_top = 58 + (i * 120)
        let margin_left = 58 + (j * 120)
        dot.setAttribute('style', `margin-top: ${margin_top}px; margin-left: ${margin_left}px;`)
        board.appendChild(dot)
    }
}
let game = new Array(17)
for (let i = 0; i < game.length; i++) {
    game[i] = new Array(17)
}
let turn = 'B'
let tds = document.querySelectorAll('#go td')
tds.forEach((item) => {
    item.addEventListener('click', () => {
        let row = Number(item.id.substring(0, item.id.indexOf('-')))
        let col = Number(item.id.substring(item.id.indexOf('-') + 1))
        if (game[row][col] === undefined) {
            game[row][col] = turn
            let myTurn = turn === 'B'
            if (myTurn) {
                item.classList.add('black')
            } else {
                item.classList.add('white')
            }
            turn = myTurn ? 'W' : 'B'
        }
    })
})