
function drawTable(tasks){
    let result = ""
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i][1] == "unsuccess"){
            result += `
            <div style="width: 250px; display: flex; justify-content: space-between; margin-top: 20px">
                <input class="successCheck" type="checkbox">
                <div id = ${i}>${tasks[i][0]}</div>
                <button class="successButton">Выполнено</button>
            </div>
            `
        }else{
            result +=  `
            <div style="width: 250px; display: flex; justify-content: space-between; margin-top: 20px">
                <input class="successCheck" type="checkbox" checked>
                <div id = ${i}><s>${tasks[i][0]}</s></div>
                <button class="successButton" disabled>Выполнено</button>
            </div>
            `
        }
    }
    
    document.querySelector('#table').innerHTML = result

    document.querySelectorAll('.successButton').forEach(element => {
        element.addEventListener('click', function () {
            let id = element.previousSibling.previousSibling.id
            if(tasks[id][1] == "unsuccess"){
                tasks[id][1] = "success"
                localStorage.setItem('tasks',  JSON.stringify(tasks));
                drawTable(tasks)
            } else{
                tasks[id][1] = "unsuccess"
                localStorage.setItem('tasks',  JSON.stringify(tasks));
                drawTable(tasks)
            }
        })
    })

    document.querySelectorAll('.successCheck').forEach(element => {
        element.addEventListener('click', function () {
            let id = element.nextSibling.nextSibling.id
            if(tasks[id][1] == "unsuccess"){
                tasks[id][1] = "success"
                localStorage.setItem('tasks',  JSON.stringify(tasks));
                drawTable(tasks)
            } else{
                tasks[id][1] = "unsuccess"
                localStorage.setItem('tasks',  JSON.stringify(tasks));
                drawTable(tasks)
            }
        })
    })
}



document.addEventListener('DOMContentLoaded', function(){

    if(localStorage.getItem('tasks')){
        var tasks = JSON.parse(localStorage.getItem('tasks'))
        drawTable(tasks)
    } else {
        var tasks = []
    }

    addButton = document.querySelector('#add')
    addButton.onclick = function() {
        let newTask = [2]
        newTask[0] = prompt('Введите текст задачи');
        newTask[1] = "unsuccess";
        tasks.push(newTask)
        localStorage.setItem('tasks',  JSON.stringify(tasks));
        drawTable(tasks)
    };

    delButton = document.querySelector('#del')
    delButton.onclick = function() {
        localStorage.clear()
        tasks = []
        drawTable(tasks)
    };


})




