
pi = 3.14

class Dongle:
    def __init__(self, r):
        self.r = r

    def area(self):
        return pi * (self.r ** 2)

    def circum(self):
        return 2 * pi * self.r

def sub(a, b):
    return a - b
