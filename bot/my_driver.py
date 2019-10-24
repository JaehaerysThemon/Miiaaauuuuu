from selenium import webdriver
from signin import Signin

class My_dirver:
    DRIVER_PATH = '../chromedriver.exe'
    WEBSITE = 'https://game.energy.ch'

    def __init__(self):
        self.driver = webdriver.Chrome(self.DRIVER_PATH)

    def start_bot(self, number):
        self.driver.get(self.WEBSITE)
        Signin(self.dirver, number)