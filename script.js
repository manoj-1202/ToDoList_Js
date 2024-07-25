const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value === "") {
        alert("You must write something!");
    }
     else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

// for removing text
        let span = document.createElement("span");
        span.innerHTML = "×";
        span.className = "close";
        li.appendChild(span);
    }
    inputBox.value = "";

    saveData()  // to save a updated data 
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } 
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();

        saveData()  // to save a updated data 
    }
});

// save data using local storage and session storage method

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    sessionStorage.setItem("sessionData", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    const sessionData = sessionStorage.getItem("sessionData");

    if (sessionData) {
        listContainer.innerHTML = sessionData;
    } 
    else if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

showTask();