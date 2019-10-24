from login import Login
from my_driver import My_driver


def main():

    number=Login().start_login()
    My_driver().start_bot(number)



if __name__ == '__main__':
    main()
