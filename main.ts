let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    led.plotBarGraph(
    light2,
    255
    )
})
