 

 let lists = [];

function addList(){
    let listDisplay = document.getElementById('display');
    let listItem = document.querySelector('#listInput').value ;
    const itemExists = lists.find((item) => item.toLowerCase() === listItem.toLowerCase());

    if(listItem !== itemExists){
        lists.push(listItem);
        listDisplay.innerHTML = '';

        lists.forEach((item,index) => {
            listDisplay.innerHTML += `
                <div>
                    <span>${index + 1}</span>
                    <li>${item}</li>        
                    <button class="delete" 
                    onclick="deleteList(${index})"
                    >Delete</button>
                </div>
            `
        })
    }else{
        alert("Already Used") 
    }
 }

function deleteList(index){
    lists.splice(index, 1);
     addList();
}
