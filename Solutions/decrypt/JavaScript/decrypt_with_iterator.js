module.exports.decrypt = decrypt;

/**
 * A typical first pass answer
 * This answer uses an iterator on an array along with Array.join()
 *
 * It is just as reasonable to use string cat, see decrypt_with_index.js
 */
function decrypt(word) {
    const range_min = 'a'.charCodeAt(0);

    var prev_val = 1;
    var decrypted = [];
    for (const letter of word) {
        // Undo Step 4: covert to code
        var code = letter.charCodeAt(0);

        // Undo Step 2: apply the 'decryption' to the code
        code -= prev_val;

        // Undo Step 3: range correct the code
        while (code < range_min) { code += 26 }

        // update the accumulator (mod 26 just keeps prev_val small)
        //      Note: '+= code' will work, but mod 26 helps reduce running time
        prev_val = (prev_val + code) % 26;

        // Undo Step 1: convert back to a character
        decrypted.push(String.fromCharCode(code));
    }

    return decrypted.join('');
}
