const inputText = document.querySelector('#item-input');
const inputButton = document.querySelector('.btn');
const ul = document.querySelector('#item-list');
const xmarkList = document.querySelectorAll('li button');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');



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

function appear(e)
{
    if (filter.value !== '')
    {
        const elements = ul.querySelectorAll('li');
        elements.forEach(item => { if (item.textContent !== filter.value) { item.style.display = 'none' } else { item.style.display = '' }; })
    }
    else
    {
        const elements = ul.querySelectorAll('li');
        elements.forEach(item => { item.style.display = ''; })
    }
    

}


filter.addEventListener('input', appear);
hide();
ul.addEventListener('click', removeItem);
inputButton.addEventListener('click', addItem);
clearBtn.addEventListener('click',clearItems)