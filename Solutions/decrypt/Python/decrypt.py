#! /usr/bin/env python


if __name__ == "__main__":
    import sys
    print decrypt(*sys.argv[1:])
    print decrypt_in_place(*sys.argv[1:])
