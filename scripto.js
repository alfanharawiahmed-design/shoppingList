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
        i.addEventListener('click',removeItem)
    
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
    if (e.target.parentElement.parentElement.tagName === 'LI') { e.target.parentElement.parentElement.remove(); hide(); }
};

function clearItems()
{
    if (ul.children.length === 0) { alert('السلة فارغة لاتحتوي عناصــر'); } else { ul.innerHTML = ''; };
    hide();
}

function hide()
{
    if (ul.children.length === 0) { filter.style.display = 'none'; clearBtn.style.display='none'}
};

hide();
ul.addEventListener('click', removeItem);
inputButton.addEventListener('click', addItem);
clearBtn.addEventListener('click',clearItems)