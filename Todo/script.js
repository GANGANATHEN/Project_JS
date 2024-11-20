const ulItems = document.getElementById("ul")
const inputText = document.getElementById("input-text")
const addBtn = document.getElementById("btnAdd")
const deleteBtn = document.getElementById("deleteButton")
const deleteAllBtn = document.getElementById("deleteAll")


function addList(){

    if (inputText.value !== "") {
        // Get the <ul> element
        const newDiv = document.createElement('div');

        //add class in <div>
        newDiv.classList.add('li');

        //append <div> in <ul> element
        ulItems.appendChild(newDiv)

        // Create a new <li> element
        const newList = document.createElement('li');

        // Set the text of the new <li> to the input value
        newList.textContent = inputText.value;

        // Append the new <li> to the <div>
        newDiv.appendChild(newList);

        // Create a new <button> element
        const newBtn = document.createElement('button')

        // Append the new <button> to the <div>
        newDiv.appendChild(newBtn);

        //add class in <button>
        newBtn.classList.add('btn-delete')

        //add id in <button>
        newBtn.setAttribute("id", "deleteButton");

        //set Attribute in button
        // newBtn.setAttribute("onclick", "delList(1)");

        //inner Text
        newBtn.innerText = 'Delete (this button not developed yet)';

        // Clear the input field
        document.getElementById("input-text").value = "";

      } else {
        alert("Please enter a valid item.");
      }
    
}

deleteAllBtn.addEventListener("click", function () {
    ulItems.innerHTML = "";
});

