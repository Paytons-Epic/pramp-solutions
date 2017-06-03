#! /usr/bin/env python

def encrypt(word):
    encrypted = []

    a_val = ord('a')
    z_val = ord('z')

    prev_val = 1
    for char in word:
        value = ord(char) + prev_val

        prev_val = (prev_val + ord(char)) % 26

        while (value > z_val):
            value -= 26

        encrypted.append(chr(value))

    return "".join(encrypted)

if __name__ == "__main__":
    import sys
    for word in sys.argv[1:]:
        print "{} --> {}".format(word, encrypt(word))
