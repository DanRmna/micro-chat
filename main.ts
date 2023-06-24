input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
    serial.writeNumbers([0, 1])
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
control.raiseEvent(
EventBusSource.MES_BROADCAST_GENERAL_ID,
EventBusValue.MES_ALERT_EVT_PLAY_RINGTONE
)
serial.redirect(
SerialPin.USB_TX,
SerialPin.P0,
BaudRate.BaudRate115200
)
pins.servoWritePin(AnalogPin.P1, pins.digitalReadPin(DigitalPin.P10))
images.createImage(`
    . . # . .
    . # # # .
    # . # . #
    . # # # .
    . . # . .
    `).scrollImage(1, 200)
let _4digit = grove.createDisplay(DigitalPin.P5, DigitalPin.P10)
