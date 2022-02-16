console.log("file Connected");
displayContent();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let text = document.getElementById('text');
    let content = localStorage.getItem('content');
    if (content == null) {
        contentObj = [];
    }
    else {
        contentObj = JSON.parse(content);
    }
    contentObj.push(text.value);
    localStorage.setItem("content", JSON.stringify(contentObj));
    text.value = "";
    console.log(contentObj);
    displayContent();
});

function displayContent() {
    let content = localStorage.getItem('content');
    if (content == null) {
        contentObj = [];
    }
    else {
        contentObj = JSON.parse(content);
    }
    let html = "";
    contentObj.forEach(function (element, index) {
        html += `
        <div class="diary my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Saved ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteContent(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;
    });
    let contentElem = document.getElementById('saved');
    if (contentObj.length != 0) {
        contentElem.innerHTML = html;
    }
    else{
        contentElem.innerHTML="We have Nothing to show! Please Add some thoughts!"
    }
}
function deleteContent(index){
    let content = localStorage.getItem('content');
    if (content == null) {
        contentObj = [];
    }
    else {
        contentObj = JSON.parse(content);
    }
    contentObj.splice(index,1);
    localStorage.setItem("content", JSON.stringify(contentObj));
    displayContent();
}
    let searchContent=document.getElementById('searchContent');
    searchContent.addEventListener("input",function(){

        inputVal=searchContent.value.toLowerCase();
        let diary=document.getElementsByClassName('diary');
        Array.from(diary).forEach(function(element){
            let cardTxt=element.getElementsByTagName("p")[0].innerText;
           
            if (cardTxt.includes(inputVal)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }
    });
    });