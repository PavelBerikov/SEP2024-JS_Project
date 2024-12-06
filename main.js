// ******* ХТМЛ элементы *********
const addInput = document.getElementById('add');
const addButton = document.getElementById('addButton');
const listDiv = document.getElementById('list');
const sortByNameButton = document.getElementById('sortName');
const sortByValueButton = document.getElementById('sortValue');
const deleteButton = document.getElementById('deleter');
const instructionButton = document.getElementById('instruction');
const engSwitchButton = document.getElementById('engSwitch');
const uaSwitchButton = document.getElementById('uaSwitch');


// ******* массив для хранения *********
let data = [];

// ****** функция для избежания дублирования кода *******
const creatorList = () => {
    listDiv.innerHTML = '';//обнуляем див для контента
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const divForContent = document.createElement("div");
        divForContent.innerHTML = `${item.name} - ${item.value}`; // нейм и велью декларируем в будущих частях кода где применится функция
        divForContent.id = `item-${i}`; //добавляем уникальный айди для каждого нового дива
        divForContent.addEventListener('click', () => {
            divForContent.classList.toggle('for_delete');
        }); //по клику на див отмечаем его для будущего удаления
        listDiv.appendChild(divForContent);// наполняеи див для контента
    }
};

// ****** добавляем елемент в дом *******
addButton.addEventListener('click', (eu) => {
    eu.preventDefault();
    //preventDefault - заставляет вынести проверку на патерн сюда
    if (addInput.value.match(/^[a-zA-Zа-яА-Я0-9 ]+=[ ]*[a-zA-Zа-яА-Я0-9]+[a-zA-Zа-яА-Я0-9 ]*$/)){
        const input = addInput.value.trim(); //чистим пробелы
        const split = input.split('=') //делим строку по знаку
        const name = split[0]; //первый элемент массива - ключ
        const value = split[1] // второй елемент - значение
        data.push({name:name, value:value});
        creatorList();
        addInput.value = '';
    }

});

// ****** сортировка по ключу *******
sortByNameButton.addEventListener('click', () => {
    data.sort((a, b) => {
        const aName = isNaN(a.name) ? a.name :parseInt(a.name) //если значение может быть числом делаем его числом
        const bName = isNaN(b.name) ? b.name : parseInt(b.name)//а если изНан возвращает тру, то так ее и сохраняем в переменную
        if (typeof aName === 'number' && typeof bName === 'string') {
            return -1 //если а - число б - строка то, а ставим перед б
        }
        if (typeof aName === 'string' && typeof bName === 'number') {
            return 1 // и наоборот
        }
        if (typeof aName === 'string' && typeof bName === 'string'){
            return aName.localeCompare(bName)// если а и б это строки то сравниваем их при помощи localeCompare. локал был выбран из-за возможности внесения 2х языков
        }
        if (aName > bName) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else {
            return 0;
        } //возвращаем результат сравнения
    });
    creatorList()
});

// ****** Сортировка по значению *******
sortByValueButton.addEventListener('click', () => {
    data.sort((a, b) => {
        const aValue = isNaN(a.value) ? a.value : parseInt(a.value)
        const bValue = isNaN(b.value) ? b.value : parseInt(b.value)
        if (typeof aValue === 'number' && typeof bValue === 'string'){
            return -1
        }
        if (typeof aValue === 'string' && typeof bValue === 'number'){
            return 1
        }
        if (typeof aValue === 'string' && typeof bValue === 'string'){
            return aValue.localeCompare(bValue)
        }
        if (aValue > bValue) {
            return 1;
        } else if (aValue < bValue) {
            return -1;
        } else {
            return 0;
        }
    });
    creatorList();
});

// ****** удаление выбранных элементов *******
deleteButton.addEventListener('click', () => {
    const divsForDelete = Array.from(document.getElementsByClassName('for_delete')); // создаем массив на основе хтмл коллекции
    const idsForDelete = divsForDelete.map(div => div.id); //массив из айди дивов
    data = data.filter((_, index) => !idsForDelete.includes(`item-${index}`)); //фильтруем по индексу игнорируя сам елемент массива
    creatorList()
});

//****** инструкция для пользователя *******
instructionButton.addEventListener('click', () => {
    document.getElementById('container').classList.toggle('shadow')
})
engSwitchButton.addEventListener('click', () => {
    document.getElementById('eng').classList.toggle('shadow')
    document.getElementById('ua').classList.toggle('shadow')
})
uaSwitchButton.addEventListener('click', () => {
    document.getElementById('eng').classList.toggle('shadow')
    document.getElementById('ua').classList.toggle('shadow')
})