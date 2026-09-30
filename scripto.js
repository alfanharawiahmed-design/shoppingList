const inputText = document.querySelector('#item-input');
const inputButton = document.querySelector('.btn');
const ul = document.querySelector('#item-list');
const xmarkList = document.querySelectorAll('li button');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const second = document.querySelector('.second');



function addItem(e)
{
    e.preventDefault();
    if (inputText.value === '' || inputText.value=== ' ') { alert('الحقل فارغ أضف شيئا له!'); }
    else {
        const li = document.createElement('li');
        li.textContent = inputText.value
        const button = document.createElement('button');
        button.className = 'remove-item btn-link text-red';
        const i = document.createElement('i');
        i.className = 'fa-solid fa-xmark';
    
        button.appendChild(i);
        li.appendChild(button);
        ul.appendChild(li);
        inputText.value = '';
        clearBtn.style.display = '';
        filter.style.display = '';
        
    }
    
}

function removeItem(e)
{
    if (e.target.parentElement.parentElement.tagName === 'LI') { if (confirm('هـــل انت متأكد من الحذف؟')) { e.target.parentElement.parentElement.remove(); }; hide(); }
};

function clearItems()
{
    if (ul.children.length === 0) { alert('السلة فارغة لاتحتوي عناصــر'); } else { confirm('هـــل انت متأكد من الحذف؟'); ul.innerHTML = ''; };
    hide();
}

function hide()
{
    if (ul.children.length === 0) { filter.style.display = 'none'; clearBtn.style.display='none'}
};

// function appear()
// {
        // const elements = ul.querySelectorAll('li');
    // // // elements.forEach(item => { if (item.textContent.includes(filter.value)) { item.style.display = '' } else { item.style.display = 'none' }; });
// }
//

function filterItems(e)
{
    const items = ul.querySelectorAll('li');
    const filterText = e.target.value.toLowerCase();
    
    items.forEach(item =>
    {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(filterText) !== -1) { item.style.display = 'flex' } else {item.style.display='none' }
    })
}

// localStorage.setItem('name', 'Ahmed');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.setItem('age', '30 years old');
// localStorage.clear();
//

function addItemToLocalStorage()
{
    localStorage.setItem(inputText.value, inputText.value);
}

second.addEventListener('click', (e) => {e.preventDefault() })

inputButton.addEventListener('click', addItemToLocalStorage);
localStorage.setItem('name', 'Ahmed');
filter.addEventListener('input', filterItems);
hide();
ul.addEventListener('click', removeItem);
inputButton.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);