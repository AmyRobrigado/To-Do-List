document.querySelector('#push').onclick = function(){
    /* If users press button before making inputs */
    if(document.querySelector('#newtask input').value.length == 0)
    {
        alert("Please Enter a Task")
    }
    /* If user makes an input and presses the button, create a container with the input and a delete button */
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector
                    ('#newtask input').value}
                    </span>
                    <button class="delete">
                    <i class="fa-solid fa-delete-left"></i>
                    </button>

                </div>
        `;

        /* To delete tasks  */
        var current_tasks = document.querySelectorAll(".delete"); 
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove(); 
            }
        }
    }

    /* Crosses out completed tasks  */
    var tasks = document.querySelectorAll(".task"); 
    for(var i = 0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed'); 
        }
    }

    /* Clear input field after each entry */
    document.querySelector("#newtask input").value = " "; 
}