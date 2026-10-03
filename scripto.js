const inputText = document.querySelector('#item-input');
const inputButton = document.querySelector('.btn');
const ul = document.querySelector('#item-list');
const xmarkList = document.querySelectorAll('li button');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const second = document.querySelector('.second');
const appearItems = document.querySelector('.second');
const deleteItems = document.querySelector('.third');

function addItem(e)
{
    e.preventDefault();
    if (inputText.value === '' || inputText.value === ' ')
    {
        alert('الحقل فارغ أضف شيئا له!');
        return
    }
    const newItem=inputText.value
    addItemToStorage();
    addToDOM(newItem);
};


function removeItem(e)
{
    if (e.target.parentElement.parentElement.tagName === 'LI') { if (confirm('هـــل انت متأكد من الحذف؟')) { e.target.parentElement.parentElement.remove(); }; hide(); }
};

function clearItems()
{
    if (confirm('هـــل انت متأكد من الحذف؟')) { ul.innerHTML = ''; hide();}
};
    

function hide()
{
    if (ul.children.length === 0) { filter.style.display = 'none'; clearBtn.style.display='none'}
};

// function appear()
// {
        // const elements = ul.querySelectorAll('li');
    // // // elements.forEach(item => { if (item.textContent.includes(filter.value)) { item.style.display = '' } else { item.style.display = 'none' }; });
// }

function filterItems(e)
{
    const items = ul.querySelectorAll('li');
    const filterText = e.target.value.toLowerCase();
    
    items.forEach(item =>
    {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(filterText) !== -1) { item.style.display = 'flex' } else {item.style.display='none' }
    })
};

function addToDOM(item)
{
    const li = document.createElement('li');
    li.textContent = item;
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

function getItemsFromStorage()
{
 if (localStorage.getItem('items') === null)
 {
     itemFromStorage = [];
 }
 else
 {
 itemFromStorage= JSON.parse(localStorage.getItem('items'))
    };
    return itemFromStorage
}

function addItemToStorage()
{
    const itemFromStorage = getItemsFromStorage();
    itemFromStorage.push(inputText.value);
    localStorage.setItem('items', JSON.stringify(itemFromStorage));    
};

function displayItems()
{
    const itemFromStorage = getItemsFromStorage();
    if (itemFromStorage.length === 0) { alert('لا تـــوجد عناصر !!') } else 
    {
        itemFromStorage.forEach(item => { addToDOM(item) })
        
    };
    
}



second.addEventListener('click', (e) => { e.preventDefault() });
localStorage.setItem('name', 'Ahmed');
localStorage.setItem('age', 30);
localStorage.setItem('email', 'ahmadgold118@gmail.com');
localStorage.setItem('adress', 'Baghdad');
filter.addEventListener('input', filterItems);
ul.addEventListener('click', removeItem);
inputButton.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);
appearItems.addEventListener('click', displayItems);
deleteItems.addEventListener('click', (e) => { e.preventDefault(); if (confirm('هـــل تريد حذف العناصر السابقة؟!')) { localStorage.clear()}  })
hide();

