const width = 40
const hight = 20
let selectedColor = "black";
let perColor = "black";
let mouseIsDown = false;

window.onload = () => {

    document.body.onmousedown = () => {
        mouseIsDown = true;
    }
    document.body.onmouseup = () => {
        mouseIsDown = false;
    }

    const button = document.getElementById("knapp");
    button.onclick = () => {
        window.alert("Börja rita!")
    }

    const colors = document.getElementById("colors");
    colors.childNodes.forEach((colorEl) => {
        colorEl.onclick = () => {
            selectedColor = colorEl.style.backgroundColor;
        };
    });

    const canvas = document.getElementById("canvas");

    for (let index = 0; index < hight; index++) {
        const row = document.createElement("div");
        row.className = "row";
        canvas.appendChild(row);
        for (let index = 0; index < width; index++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
            cell.onclick = () => {
                cell.style.backgroundColor = selectedColor;
                perColor = selectedColor;
            }
            cell.ondragover = (event) => {
                event.preventDefault();
                if (mouseIsDown) {
                    cell.style.backgroundColor = selectedColor;
                    perColor = selectedColor;
                }
                
            }
            cell.onmouseenter = () => {
                perColor = cell.style.backgroundColor;
                cell.style.backgroundColor = selectedColor;
            };
            cell.onmouseleave = () => {
                cell.style.backgroundColor = perColor;
            };
            row.appendChild(cell);
            
        }  
    }

}
