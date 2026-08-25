let count = 0;//this is a comment
let count2 = 0;
const e = 2.71828;

function updateCount(cnt) {
    document.getElementById("showcase").innerHTML = cnt;
}

function increaseCount() {
    count++;
    updateCount(count);
}

function decreaseCount() {
    count--;
    updateCount(count);
}
