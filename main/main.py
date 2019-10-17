import json
import random
import login
from selenium import webdriver


def main():
    while True:
        start_site()











def start_site():
    driver = get_chromedriver()
    driver.get('https://game.energy.ch//')
    for i in range(random.randint(0, 4)):
        page_title = driver.find_element_by_class_name("h1")
        if (page_title == "telephone"):
            l = login.Login(driver)
            l.set_number_in_filed()
            l.enter_verification_code()


def load_json(path):
    with open(path, 'r') as json_file:
        json_file = json.load(json_file)
    return json_file


def get_chromedriver():
    return webdriver.Chrome('../chromedriver')


if __name__ == "__main__":
    main()
