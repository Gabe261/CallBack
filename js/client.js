/**
 * File Name : client.js
 *
 * Revision History:
 *       Gabriel Siewert, 2024-02-06 : Created
 */

const btnCalculate_click = ()=>{
    const number1 = Number(document.querySelector("#txtFirstNumber").value);
    const number2 = Number(document.querySelector("#txtSecondNumber").value);

    const output = document.querySelector("#lblResult");

    add(number1, number2, (data)=>{
        output.innerHTML += `<h3>The addition is :  ${data}</h3>`
        factorial(data, (data) => {
            output.innerHTML += `<h3>The factorial is :  ${data}</h3>`
        }, (e) => {
            output.innerHTML += `<h3>The error is :  ${e}</h3>`
        })
    }, (e)=>{
        output.innerHTML += e;
    })
}