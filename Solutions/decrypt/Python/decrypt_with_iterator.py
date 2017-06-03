def decrypt(word):
    RANGE_MIN = ord('a')

    decrypted = []
    prev_val = 1
    for char in word:
        # Undo Step 4: covert to code
        code = ord(char)

        # Undo Step 2: apply the 'decryption' to the code
        code -= prev_val

        # Undo Step 3: range correct the code
        while (code < RANGE_MIN):
            code += 26

        # update the accumulator (mod 26 just keeps prev_val small)
        #   Note: '+= code' will work, but mod 26 helps reduce running time
        prev_val = (prev_val + code) % 26

        # Undo Step 1: convert back to a character
        decrypted.append(chr(code))

    return "".join(decrypted)

