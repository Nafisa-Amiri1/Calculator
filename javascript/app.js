// Get display elements
const erase = document.querySelector("#erase");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#ans");

const btn_0 = document.querySelector("#ze");
const btn_00 = document.querySelector("#db_ze");
const btn_1 = document.querySelector("#on");
const btn_2 = document.querySelector("#tw");
const btn_3 = document.querySelector("#th");
const btn_4 = document.querySelector("#fo");
const btn_5 = document.querySelector("#fi");
const btn_6 = document.querySelector("#si");
const btn_7 = document.querySelector("#se");
const btn_8 = document.querySelector("#ei");
const btn_9 = document.querySelector("#ni");

const btn_plus = document.querySelector("#plus");
const btn_minus = document.querySelector("#min");
const btn_multi = document.querySelector("#multi");
const btn_div = document.querySelector("#div");
const btn_point = document.querySelector("#ponit");
const btn_per = document.querySelector("#per");

const write_me = document.querySelector("#type");
const result = document.querySelector("#resulet");

// Input typing function
function type_to(text) {
    if (write_me.innerText.length < 24) {
        write_me.innerText += text;
    } else {
        alert("Digit limit reached");
    }
}

// Calculation logic
function calculater() {
    let expression = write_me.innerText.replace(/x/g, "*");
    try {
        result.innerText = eval(expression);
    } catch {
        result.innerText = "Error";
    }
}

// Assign button actions
btn_0.onclick = () => type_to("0");
btn_00.onclick = () => type_to("00");
btn_1.onclick = () => type_to("1");
btn_2.onclick = () => type_to("2");
btn_3.onclick = () => type_to("3");
btn_4.onclick = () => type_to("4");
btn_5.onclick = () => type_to("5");
btn_6.onclick = () => type_to("6");
btn_7.onclick = () => type_to("7");
btn_8.onclick = () => type_to("8");
btn_9.onclick = () => type_to("9");

btn_plus.onclick = () => type_to("+");
btn_minus.onclick = () => type_to("-");
btn_multi.onclick = () => type_to("*");
btn_div.onclick = () => type_to("/");
btn_point.onclick = () => type_to(".");
btn_per.onclick = () => type_to("%");

equal.onclick = () => calculater();

clear.onclick = () => {
    write_me.innerText = "";
    result.innerText = "00";
};

erase.onclick = () => {
    write_me.innerText = write_me.innerText.slice(0, -1);
};

// Optional: Keyboard input support
document.onkeyup = (e) => {
    const keyMap = {
        "0": "0", "1": "1", "2": "2", "3": "3", "4": "4",
        "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
        "+": "+", "-": "-", "*": "*", "/": "/", "%": "%", ".": "."
    };

    if (keyMap[e.key]) {
        type_to(keyMap[e.key]);
    } else if (e.key === "Enter") {
        calculater();
    } else if (e.key === "Backspace") {
        write_me.innerText = write_me.innerText.slice(0, -1);
    }
};
