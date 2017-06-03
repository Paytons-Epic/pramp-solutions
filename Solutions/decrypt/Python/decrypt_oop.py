#! /usr/bin/env python

class Word(object):
    _RANGE_MIN = ord('a')
    _RANGE_MAX = ord('z')

    def __init__(self, ciphertext):
        self.encrypted = ciphertext

    def decrypt(self):
        decrypted = []
        prev_val = 1

        for letter in self.encrypted:
            code = ord(letter)
            code -= prev_val
            while (code < self._RANGE_MIN):
                code += 26

            prev_val = (prev_val + code) % 26
            decrypted.append(chr(code))

        return "".join(decrypted)
