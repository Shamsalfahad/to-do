let count = 0;
// add btn dhorlam 
document.getElementById("add_btn").addEventListener("click", function () {
    count++;
    
    const inputValue = document.getElementById("input_value").value;
  
    if (inputValue == "") {
      alert("Please enter a value");
    } else {
    
        const mainContainer =document.getElementById('content_container')
        // const tableContainer = document.getElementById("table_content")
        // tr dhoralm
        const tableContainer = document.createElement("tr");
        // tamplate 
        tableContainer.innerHTML=`<th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-success done-btn">Done</button></td>`;
        // append koralm tr table r vitore
        mainContainer.appendChild(tableContainer);
        // value empty show
        document.getElementById("input_value").value =" ";
        const deleteButton = document.getElementsByClassName("delete-btn");
        const doneButton = document.getElementsByClassName("done-btn");

        console.log("dadnj");  
        // array = loop(array paile loop chalabo )
        for(const button of deleteButton){
            button.addEventListener("click", function(e){
                // console.log(e.target.parentNode.parentNode);
                e.target.parentNode.parentNode.style.display="none";
            });
        }
        for (const button of doneButton){
            button.addEventListener("click",function(e){
                e.target.parentNode.parentNode.style.textDecoration="line-trough";
            })
        }
    }
});
             document.getElementById("clear-all").addEventListener("click", function (e) {
              document.getElementById("table_content").style.display = "none";
              window.location.reload();
            });