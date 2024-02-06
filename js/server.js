/**
 * File Name : server.js
 *
 * Revision History:
 *       Gabriel Siewert, 2024-02-06 : Created
 */

const add = (num1, num2, success, fail) => {
    setTimeout(() => {
        if (num1 > 10 || num2 > 10) {
            fail("numbers are too big!");
        }
        else {
            const result = num1 + num2;
            success(result);
        }
    }, 2000);
}


const factorial = (num, success, fail) => {
    setTimeout(() => {
        let result = 1;
        if (num < 0) {
            fail("Number is too small!");
        }
        else {
            for (let i = 1; i <= num; i++) {
                result = result * i;
            }
            success(result);
        }

    }, 2000);
}