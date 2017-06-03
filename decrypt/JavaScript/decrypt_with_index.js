module.exports.decrypt = decrypt;

/**
 * A typical first pass answer
 * This answer uses string cat and a for loop
 *
 * It is just as reasonable to use Array.join(), see decrypt_with_iterator.js
 */
function decrypt(word) {
    // get the range_min and range_max (max isn't used, but helps for thinking)
    const range_min = 'a'.charCodeAt(0);
    const range_max = 'z'.charCodeAt(0);

    var prev_val = 1;
    decrypted = '';
    for (var i=0, len=word.length; i < len; i++) {
        // Undo Step 4: covert to code
        var code = word.charCodeAt(i);

        // Undo Step 2: apply the 'decryption' to the code
        code -= prev_val;

        // Undo Step 3: range correct the code
        while (code < range_min) { code += 26 }

        // update the accumulator (mod 26 just keeps prev_val small)
        //      Note: '+= code' will work, but mod 26 helps reduce running time
        prev_val = (prev_val + code) % 26;

        // Undo Step 1: convert back to a character
        decrypted += String.fromCharCode(code);
    }

    return decrypted;
}
