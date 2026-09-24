const inputText = document.querySelector('#item-input');
const inputButton = document.querySelector('.btn');
const ul = document.querySelector('#item-list');
const xmarkList = document.querySelectorAll('li button i');


function addItem(e)
{
    e.preventDefault();
    if (inputText.value === '' || inputText.value=== ' ') { alert('The Field Is Empty!'); }
    else {
        const li = document.createElement('li');
        li.textContent = inputText.value
        const button = document.createElement('button');
        button.className = 'remove-item btn-link text-red';
        const i = document.createElement('i');
        i.className = 'fa-solid fa-xmark';
        i.addEventListener('click',removeItem)
    
        button.appendChild(i);
        li.appendChild(button);
        ul.appendChild(li);
        inputText.value = '';
        console.log(xmarkList);
    }
    
}

function removeItem(e)
{
    e.target.parentElement.parentElement.remove()
};

xmarkList.forEach(item => { item.addEventListener('click', removeItem) });

inputButton.addEventListener('click', addItem);
