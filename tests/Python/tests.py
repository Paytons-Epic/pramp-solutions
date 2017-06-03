#! /usr/bin/env python
import unittest

class TestExamples(unittest.TestCase):
    test_cases = [
            ("dnotq","crime"),
            ("flgxswdliefy","encyclopedia")
            ]

    def test_example1(self):
        import problem_with_type
        for case in self.test_cases:
            self.assertEqual(problem_with_type.answer(case[0]), case[1])
        pass

    def test_example2(self):
        import problem_with_type
        for case in self.test_cases:
            self.assertEqual(problem_with_type.answer(case[0]), case[1])
        pass

if __name__ == '__main__':
    unittest.main()
