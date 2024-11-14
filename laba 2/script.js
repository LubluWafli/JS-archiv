function colorAndCount()
{
    (() => {
        'use strict';
      
let markArray = [0, 0, 0, 0];

    const table = document.querySelector(".table");
    const rows = table.getElementsByTagName("tr");
    for(let i = 1; i < rows.length; i++)
    {
        const cols = rows[i].getElementsByTagName("td");
        switch (cols[cols.length-1].innerText)
        {
            case "5":
                markArray[0]++;
                rows[i].classList.add("table-success");
                break;
            case "4":
                markArray[1]++;
                rows[i].classList.add("table-secondary");
                break;    
            case "3":
                markArray[2]++;
                rows[i].classList.add("table-warning");
                break;
            case "2":
                markArray[3]++;
                rows[i].classList.add("table-danger");
        }
    }

document.getElementById('Five').textContent = markArray[0]
document.getElementById('Four').textContent = markArray[1]
document.getElementById('Three').textContent = markArray[2]
document.getElementById('Two').textContent = markArray[3]
})();
}