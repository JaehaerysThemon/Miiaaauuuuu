import json
from os.path import isfile


class Login:
    FILE_PATH = '../data/users.json'

    def start_login(self):
        users = []
        if isfile(self.FILE_PATH):
            with open(self.FILE_PATH, 'r') as file:
                users = json.load(file)
        while True:
            number = ''
            login = False
            name = input('\nEnter name ').lower()
            for user in users:
                if user['name'] == name:
                    number = user['number']
                    login = True
            if not login:
                create_user = input('Do you wanna create a new user:(y/n) ')
                if create_user == 'y':
                    while True:
                        new_number = input('enter number: ')
                        new_number = ''.join(c for c in new_number if c.isdigit())
                        if self.check_number(new_number):
                            if len(new_number) == 11:
                                number = '0'+new_number[2:]
                            else:
                                number = new_number
                            new_user = {
                                'name': name,
                                'number': number
                            }
                            users.append(new_user)
                            with open(self.FILE_PATH, 'w') as file:
                                json.dump(users, file, indent=2)
                            break
                        else:
                            print('no valid number')
                    login = True
            if login:
                break
        return number

    def check_number(self, number):
        if (len(number) == 10 and number[0] == '0') or (len(number) == 11 and number[:2] == '41'):
            return True
        else:
            return False
