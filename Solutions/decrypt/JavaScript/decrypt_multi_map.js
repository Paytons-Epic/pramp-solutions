module.exports.decrypt = decrypt;

/**
 * An answer using Array.map()
 * This answer may require too much refactoring for a short interview. It uses
 * Array.map() multiple times with simple mapper functions.
 *
 * Even though the code steps through the array 6 times, it is still O(n)
 */
function decrypt(word) {
    // create an array so we can use map
    var codes = word.split('');

    // Undo Step 4: covert to code
    codes = codes.map( (letter) => letter.charCodeAt(0) );

    // Undo Step 2: apply the 'decryption' to the code
    codes = codes.map(decrease());

    // Undo Step 3: range correct the code
    codes = codes.map(range_correct);

    // Undo Step 1: convert back to a character
    codes = codes.map( (code) => String.fromCharCode(code) );

    // assemble and return the final string
    return codes.join('');
}

function decrease() {
    var prev_val = 1;
    return (code) => {
        code -= prev_val;

        // update the accumulator (mod 26 just keeps prev_val small)
        //      Note: '+= code' will work, but mod 26 helps reduce running time
        prev_val = (prev_val+code) % 26;
        return code;
    }
}

function range_correct(code) {
    var a_val = 'a'.charCodeAt(0);
    while (code < a_val) { code += 26 }

    return code
}
