let bill = 0;
let people = 0;
let percent = 0;

function handleInput(e, key) {
    if (key == 'bill') { bill = e.target.value }
    if (key == 'people') { people = e.target.value }
    // formula -- | (Bill amount * tip value / 100) / Number of people |
    if (bill == 0 || people == 0 || percent == 0) return;
    try {
        bill = parseFloat(bill);
        people = parseInt(people);
        let calc = Math.abs((bill * (percent / 100)) / people);
        let total_calc = bill + calc;
        calc = calc.toFixed(2)
        document.getElementById("tip-amount").innerText = `$${calc}`;
        document.getElementById("total-amount").innerText = `$${total_calc}`;

    } catch (err) {
        console.log(err.message);
        document.getElementById("tip-amount").innerText = `$0.00`;
        document.getElementById("total-amount").innerText = `$0,00`;
    } finally {
        total = 0;
        people = 0;
        percent = 0;
    }

}

function handleButton(e) {
    console.log(e.target.name);
    e.target.style.backgroundColor = "hsl(185, 41%, 84%)";
    e.target.style.color = 'black';
    percent = parseInt(e.target.name);
}

document.getElementById("bill").addEventListener('blur', (e) => { handleInput(e, 'bill') });
document.getElementById("people").addEventListener('blur', (e) => { handleInput(e, 'people') });

let btn = document.getElementsByTagName("button");
for (let i = 0; i < 5; i++) {
    btn[i].addEventListener('click', (e) => { handleButton(e) });
}

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("tip-amount").innerText = `$0.00`;
    document.getElementById("total-amount").innerText = `$0,00`;
    document.getElementById("bill").value = 0;
    document.getElementById("people").value = 0;
    for (let i = 0; i < 5; i++) {
        btn[i].style.backgroundColor = "hsl(183, 100%, 15%)";
        btn[i].style.color = "hsl(185, 41%, 84%)";
    }
})