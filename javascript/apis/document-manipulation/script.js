
const shoppingList = document.querySelector("ul");
const inputText = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", e => 
    {
        e.preventDefault();
        const item = inputText.value;
        const li = document.createElement("li");
        li.textContent = item;
        shoppingList.appendChild(li);
        inputText.value = "";
        inputText.focus();

    })

