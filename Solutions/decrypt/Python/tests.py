#! /usr/bin/env python
import unittest

class TestStringMethods(unittest.TestCase):
    test_cases = [
            ("dnotq","crime"),
            ("flgxswdliefy","encyclopedia")
            ]

    def test_iterator(self):
        import decrypt_with_iterator
        for case in self.test_cases:
            self.assertEqual(decrypt_with_iterator.decrypt(case[0]), case[1])
        pass

    def test_index(self):
        import decrypt_with_index
        for case in self.test_cases:
            self.assertEqual(decrypt_with_index.decrypt(case[0]), case[1])
        pass

    def test_oop(self):
        import decrypt_oop
        for case in self.test_cases:
            word = decrypt_oop.Word(case[0])
            self.assertEqual(word.decrypt(), case[1])
        pass

if __name__ == '__main__':
    unittest.main()
