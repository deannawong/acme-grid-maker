const button=document.querySelector("button");
const grid=document.getElementById("grid");
const lastSq=document.getElementById("lastSq")
const rows=document.getElementById("rows").value;
const columns=document.getElementById("columns").value;

const rowInput=document.getElementById("rows")
const rowWarning=document.getElementById("rowWarning")

const columnInput=document.getElementById("columns")
const columnWarning=document.getElementById("columnWarning")

rowInput.addEventListener('input',(ev)=>{
    rowWarning.className="warning";

    if(ev.target.value > 50){
        rowWarning.classList.toggle("warning");
    }
})

columnInput.addEventListener('input',(ev)=>{
    columnWarning.className="warning";

    if(ev.target.value > 50){
        columnWarning.classList.toggle("warning");
    }
})

button.addEventListener('click',()=>{

    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    for(let r=rows;r>0;r--){
        const rowBox = document.createElement('div')
        for(let c=0;c<columns;c++){
            
            const miniBox=document.createElement('div');
 
            miniBox.className=`miniBox`;
            miniBox.id= `rIdx: ${r} cIdx: ${c}`
            rowBox.appendChild(miniBox);
        }
        grid.appendChild(rowBox)
    }
 
});

grid.addEventListener('click',(ev)=>{
    ev.target.classList.toggle("clicked");
    lastSq.innerHTML=ev.target.id;
})
