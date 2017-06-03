module.exports.decrypt = decrypt;

/**
 * An answer using Array.map()
 * This answer is a reasonable refactor of a first pass answer. It loops over
 * the array onces and applies all steps before moving on the the next letter
 */
function decrypt(word) {
    return word.split('').map(decrypt_character()).join('');
}

function decrypt_character() {
    const a_val = 'a'.charCodeAt(0);

    var prev_val = 1;
    return function(letter) {
        // Undo Step 4: covert to code
        var code = letter.charCodeAt(0);

        // Undo Step 2: apply the 'decryption' to the code
        code -= prev_val;

        // Undo Step 3: range correct the code
        while (code < a_val) { code += 26 }

        // update the accumulator (mod 26 just keeps prev_val small)
        //      Note: '+= code' will work, but mod 26 helps reduce running time
        prev_val = (prev_val + code) % 26;

        // Undo Step 1: convert back to a character
        return String.fromCharCode(code);
    }
}
