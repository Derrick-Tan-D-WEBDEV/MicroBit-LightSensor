let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    led.plotBarGraph(
    255 - light2,
    255
    )
})
