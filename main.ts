let red = 0
let green = 0
let blue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (red < 255) {
            red += 1
        }
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        if (red > 0) {
            red += -1
        }
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        if (green < 255) {
            green += 1
        }
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        if (green > 0) {
            green += -1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (blue < 255) {
            blue += 1
        }
    }
    if (input.pinIsPressed(TouchPin.P3)) {
        if (blue > 0) {
            blue += -1
        }
    }
    basic.setLedColor(basic.rgbw(
    red,
    green,
    blue,
    0
    ))
})
