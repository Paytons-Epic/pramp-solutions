def decrypt(word):
    RANGE_MIN = ord('a')

    decrypted = list(word)
    prev_val = 1
    for index in range(len(decrypted)):
        # Undo Step 4: covert to code
        letter = ord(decrypted[index])

        # Undo Step 2: apply the 'decryption' to the code
        letter -= prev_val

        # Undo Step 3: range correct the code
        while (letter < RANGE_MIN):
            letter += 26

        # update the accumulator (mod 26 just keeps prev_val small)
        #   Note: '+= code' will work, but mod 26 helps reduce running time
        prev_val = (prev_val + letter) % 26

        # Undo Step 1: convert back to a character
        decrypted[index] = chr(letter)

    # assemble and return the final string
    return "".join(decrypted)
