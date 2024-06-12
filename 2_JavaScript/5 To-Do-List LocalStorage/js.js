console.log("hey...I am Danish")
showList();
let addBtn=document.getElementById("addbtn");


addBtn.addEventListener("click",function(e){
    let addText=document.getElementById("Hash");
    console.log("clicked");
    let list=localStorage.getItem("list");
    if(list==null){
        listObj=[];
    }
    else{
        listObj=JSON.parse(list);
    }
    // console.log(listObj)
    // console.log(addText)
    listObj.push(addText.value);
    localStorage.setItem("list",JSON.stringify(listObj));
    addText.value="";
    showList();
});

function showList(){ 
    let list=localStorage.getItem("list");
    if(list==null){
        listObj=[];
    }
    else{
        listObj=JSON.parse(list);
    }
    html="";
    listObj.forEach(function(element,index){
        html+=`
        <div class="output">
        <div class="show">
            <input type="checkbox" ><p>${element}</p>
        </div>
        <button id="${index}">Delete</button>
        </div> 
        `
    });

    let cont=document.getElementById("Sha")

    if(listObj.lenght!=0){
        cont.innerHTML=html;
    }
    else{
        cont.innerHTML=`<h4>Nothing to show...</h4>`;
    }
}