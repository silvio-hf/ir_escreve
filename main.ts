input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Rollerskate)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
serial.redirectToUSB()
basic.forever(function () {
    if (makerbit.wasIrDataReceived()) {
        basic.showNumber(makerbit.irButton())
        serial.writeLine(makerbit.irDatagram())
    }
})
