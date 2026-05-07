input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
