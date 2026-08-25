let name = "";
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

function updateDupName(nm) {
    document.getElementById("duplicated").innerHTML = nm;
}

function changeName() {
    name = document.getElementById("changedName").value;
    updateDupName(name + name);
}
