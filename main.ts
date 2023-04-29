input.onButtonPressed(Button.A, function () {
    int += 1
    radio.sendNumber(int)
    if (int == 1) {
        basic.showString("S")
    } else if (int == 2) {
        basic.showString("A")
    } else if (int == 3) {
        basic.showString("M")
    } else if (int == 4) {
        basic.showString("U")
    } else if (int == 5) {
        basic.showString("E")
    } else if (int == 6) {
        basic.showString("L")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    int += 0 - 1
    radio.sendNumber(int)
    if (int == 1) {
        basic.showString("S")
    } else if (int == 2) {
        basic.showString("A")
    } else if (int == 3) {
        basic.showString("M")
    } else if (int == 4) {
        basic.showString("U")
    } else if (int == 5) {
        basic.showString("E")
    } else if (int == 6) {
        basic.showString("L")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
let int = 0
radio.setGroup(1)
int = 0
