let number = 0
input.onButtonPressed(Button.A, function () {
    number = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    number += 1
    basic.showNumber(number)
})
