
    
    var input = document.getElementById("input"); 
    var button = document.getElementById("button");   
    var myList = document.getElementById("myList");
    var feedback = document.getElementById("feedback");
    
function addItem() {

    var newListItem = document.createElement("li");

    if (input && input.value) {
        
        newListItem.textContent = input.value;
            
        myList.appendChild(newListItem);
            
        feedback.textContent = " ";
        input.value = "";
        input.focus({preventScroll:true});
        

    } else {
    
        feedback.textContent = "nothing entered";
        input.focus({preventScroll:true});
        
    }
}
