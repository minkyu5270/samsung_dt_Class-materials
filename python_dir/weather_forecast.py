
import numpy as np

def weather():
    status = np.random.choice(["맑음", "흐림", "비", "눈", "폭풍우"])
    temp = np.random.choice(range(10,31))
    return status,temp
