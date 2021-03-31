light2 = 0

def on_forever():
    global light2
    light2 = input.light_level()
    led.plot_bar_graph(255-light2, 255)
basic.forever(on_forever)
