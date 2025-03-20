function Gameboard(colonne) {
    const plateau = []
    for (let i = 1; i <= (colonne * colonne); i++) {
        plateau.push(i)
    }
    return plateau
}

function Player(name) {
    const champs_jouE = []
    function jouer() {
        let choix = prompt("Votre choix parmi svp: ")
        champs_jouE.push(parseInt(choix))
        return champs_jouE
    }
    function win() {
        console.log(`${this.name} a gagné!`)
    }
    return { name, jouer, win }
}

function checkSuiteArithmetique(tab, n) {
    tab.sort()
    if (tab.length < n) {
        return false
    }
    for (let i = 0; i < tab.length - (n - 1); i++) {
        for (let j = i + 1; j < tab.length - (n - 2); j++) {
            let raison = tab[j] - tab[i]
            let sequence = [tab[i], tab[j]]
            let next = tab[j] + raison
            while (sequence.length < n && tab.includes(next)) {
                sequence.push(next)
                next += raison
            }
            if (sequence.length === n) {
                console.log(sequence)
                return true
            }
        }
    }
    return false
}

const plateau = Gameboard(3)
const Player1 = Player("Kiady")
const Player2 = Player("Menja")

let unJoueurGagne = false

while (!unJoueurGagne) {
    let result1 = Player1.jouer()
    if (checkSuiteArithmetique(result1, 3)) {
        unJoueurGagne = true
        Player1.win()
    }
    let result2 = Player2.jouer()
    if (checkSuiteArithmetique(result2, 3)) {
        unJoueurGagne = true
        Player2.win()
    }
}