basic.forever(function () {
    servos.P0.setRange(70, 110)
    if (input.buttonIsPressed(Button.AB)) {
        servos.P0.stop()
    } else if (input.buttonIsPressed(Button.A)) {
        servos.P0.run(100)
    } else if (input.buttonIsPressed(Button.B)) {
        servos.P0.run(-100)
    }
})
