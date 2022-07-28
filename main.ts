let asd = 0
basic.forever(function () {
    asd = input.compassHeading()
    if (asd < 90) {
        basic.showArrow(ArrowNames.North)
    } else if (asd < 185) {
        basic.showArrow(ArrowNames.East)
    } else if (asd < 270) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
    input.calibrateCompass()
})
