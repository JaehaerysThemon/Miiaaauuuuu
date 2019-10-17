import random


class Login():
    def __init__(self, driver):
        self.__driver = driver

    def set_number_in_filed(self, load_json):
        number_textfield = self.__driver.find_element_by_class_name("doch chunt denn s Feld vo de telephon nummere inne")
        numbers = load_json('../numbres.json')
        index = random.randint(-1, len(numbers) - 1)
        number_textfield.send_keys(numbers[index])
        number_textfield.submit()

    def enter_verification_code(self):
        verification_code = self.get_verifacation_code()
        code_textfield = self.__driver.find_element_by_class_name("doch chunt denn s Feld vom code inne")
        code_textfield.send_keys(verification_code)
        code_textfield.submit()

    def get_verifacation_code(self):
        # go aegi
        return None
