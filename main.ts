input.onButtonPressed(Button.A, function () {
    kolikaty_pismeno += -1
    list.push(kolikaty_pismeno)
})
input.onButtonPressed(Button.B, function () {
    kolikaty_pismeno += 1
})
let kolikaty_pismeno = 0
let list: number[] = []
list = [0, 1]
let textový_seznam = ["a", "b", "c"]
kolikaty_pismeno = 0
basic.forever(function () {
    basic.showString("" + (textový_seznam[kolikaty_pismeno]))
})
