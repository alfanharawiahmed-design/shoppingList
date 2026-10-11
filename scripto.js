const inputText = document.querySelector('#item-input');
const inputButton = document.querySelector('.first');
const ul = document.querySelector('#item-list');
const xmarkList = document.querySelectorAll('li button');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const second = document.querySelector('.second');
const appearItems = document.querySelector('.second');
const deleteItems = document.querySelector('.third');
const ico = document.querySelector('.fit');
let isEditedMode = false;

function addItem(e)
{
    e.preventDefault();
    const newItem = inputText.value
    if (inputText.value === '' || inputText.value === ' ')
    {
        alert('لايمــكن الاضافة الحقل فارغ !!');
        return
    } 
    
    addItemToStorage();
    addToDOM(newItem);
};

function onClickItem(e)
{
    if (e.target.parentElement.parentElement.tagName === 'LI')
    {
        removeItem(e.target.parentElement.parentElement)
    };
    
};

function removeItem(item)
{
    if (confirm('هـــل انت متأكد من الحذف؟'))
    {
        item.remove();
        removeItemFromStorage(item.textContent)
    };
            ; hide()
};

function removeItemFromStorage(item)
{
    let itemsFromStorage = getItemsFromStorage();
    itemsFromStorage = itemsFromStorage.filter(e => e !== item);
    
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

function clearItems()
{
    if (confirm('هـــل انت متأكد من الحذف؟')) { ul.innerHTML = ''; hide();}
};
    

function hide()
{
    if (ul.children.length === 0)
    {
        filter.style.display = 'none'; clearBtn.style.display = 'none';
    };
}

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
};

function getItemsFromStorage()
{
    let itemFromStorage;
    
 if (localStorage.getItem('items') === null)
 {
     itemFromStorage = [];
 }
 else
 {
 itemFromStorage= JSON.parse(localStorage.getItem('items'))
    };
    return itemFromStorage
};

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
    itemFromStorage.forEach(item => { addToDOM (item)})
    };
};

function editItem(e)
{
    isEditedMode = true;
    if (e.target.tagName === 'LI')
    {
        inputButton.style.backgroundColor = 'green';
        inputButton.innerHTML = '<i class="fa-solid fa-pen fit"></i> تعديــل العنــصر';
        inputText.value = e.target.textContent;
        ul.querySelectorAll('li').forEach(i => { i.style.color = '#000';});
        e.target.style.color = '#ccc';
        editMode(e.target);
    };
};

function editMode(item)
{
    if (isEditedMode)
    {
        inputButton.addEventListener('click', edit);
        inputButton.removeEventListener('click', addItem);
        // appearItems.removeEventListener('click', displayItems);
    }
    
    function edit()
    {
        
        if (item.style.color === 'rgb(204, 204, 204)')
        {
        item.firstChild.textContent = inputText.value;
        item.style.color = '#000';
        inputText.value = '';
        }
    };

    isEditedMode = false;
};

function reset()
{   
    if (!isEditedMode)
    {
        inputButton.innerHTML = '<i class="fa-solid fa-plus fit"></i>أضــافة العنـــصر الــى الســلة';     
        inputButton.style.backgroundColor = '#333';
        // inputButton.addEventListener('click', addItem);
        // appearItems.addEventListener('click', displayItems);
        
    };                                                            
};


inputButton.addEventListener('mouseup', reset);
second.addEventListener('click', (e) => { e.preventDefault()});
filter.addEventListener('input', filterItems);
ul.addEventListener('click', onClickItem);
inputButton.addEventListener('click', (e) => e.preventDefault());
ul.addEventListener('click', editItem);
inputButton.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);
appearItems.addEventListener('click', displayItems);
deleteItems.addEventListener('click', (e) => { e.preventDefault(); if (confirm('هـــل تريد حذف العناصر السابقة؟!')) { localStorage.clear() } });
hide();

