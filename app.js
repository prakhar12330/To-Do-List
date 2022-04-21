let input=prompt("What would you Like to do?");
const todos=['Reading','Playing'];
while(input !=="quit")
{
    if (input === "list") {
        console.log("_______________________");
        for (let i=0;i<todos.length;i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log("_______________________");
    }
    else if (input === "new")
    {
       const newTodo=prompt("OK! What Is the New Todo?");
       todos.push(newTodo);
       console.log(`${newTodo} added to the list!`)

    }
    else if(input==="delete")
    {
        const indexStr=prompt("Enter Index To Delete")
        const index=parseInt(indexStr);
        if(!Number.isNaN(index))
        {
        const deleted=todos.splice(index,1);
        console.log(`Ok! deleted ${deleted}`);
        }
        else
        {
            console.log("Unknown Index");
        }
    }
    input = prompt("What would you Like to do?");
    
}
console.log("OK Quit The App")