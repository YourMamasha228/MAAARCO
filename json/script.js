// Простой код для новичков

// ========== Переменные ==========
let currentObject = {};

// Получаем все элементы со страницы
// Поля ввода
const userNameInput = document.getElementById('userName');
const ageInput = document.getElementById('age');
const isStudentCheck = document.getElementById('isStudent');
const cityInput = document.getElementById('city');
const groupInput = document.getElementById('group');
const emailInput = document.getElementById('email');
const tagsInput = document.getElementById('tags');

// Кнопки
const buildBtn = document.getElementById('buildBtn');
const problemBtn = document.getElementById('problemBtn');
const exportSimple = document.getElementById('exportSimple');
const exportArray = document.getElementById('exportArray');
const exportFunc = document.getElementById('exportFunc');
const importBtn = document.getElementById('importBtn');

// Области вывода
const objectShow = document.getElementById('objectShow');
const jsonOut = document.getElementById('jsonOut');
const jsonIn = document.getElementById('jsonIn');
const importShow = document.getElementById('importShow');
const errorBox = document.getElementById('errorBox');
const errorMsg = document.getElementById('errorMsg');

// Другие элементы
const spaceSelect = document.getElementById('spaceSelect');
const keyChecks = document.querySelectorAll('.keyCheck');

// ========== Функции ==========

// Функция для создания объекта из полей формы
function createObjectFromForm() {
    // Получаем значения из полей
    let name = userNameInput.value;
    let age = ageInput.value;
    let isStudent = isStudentCheck.checked;
    let city = cityInput.value;
    let group = groupInput.value;
    let email = emailInput.value;
    let tagsString = tagsInput.value;
    
    // Преобразуем строку с тегами в массив
    let tagsArray = [];
    if (tagsString.trim() !== '') {
        tagsArray = tagsString.split(',').map(tag => tag.trim());
    }
    
    // Создаем объект
    let obj = {
        id: Math.floor(Math.random() * 1000) + 1, // случайный id
        userName: name,
        age: age,
        isStudent: isStudent,
        tags: tagsArray,
        profile: {
            city: city,
            group: group,
            contacts: {
                email: email
            }
        },
        createdAt: new Date() // текущая дата
    };
    
    return obj;
}

// Функция для показа объекта на странице
function showObject(obj) {
    objectShow.textContent = JSON.stringify(obj, null, 2);
}

// Функция для обновления объекта и его отображения
function updateAndShowObject() {
    currentObject = createObjectFromForm();
    showObject(currentObject);
}

// ========== События ==========

// 1. Кнопка "Собрать объект"
buildBtn.addEventListener('click', function() {
    updateAndShowObject();
});

// Сразу собираем объект при загрузке страницы
window.addEventListener('load', function() {
    updateAndShowObject();
});

// 2. Кнопка "Добавить проблемные поля"
problemBtn.addEventListener('click', function() {
    // Сначала собираем текущий объект
    currentObject = createObjectFromForm();
    
    // Добавляем проблемные поля
    currentObject.temp = undefined;          // undefined - пропадет
    currentObject.calc = function() {         // функция - пропадет
        return 1 + 1;
    };
    currentObject.score = NaN;                // NaN станет null
    currentObject.inf = Infinity;              // Infinity станет null
    currentObject.bigNumber = 12345678901234567890n; // BigInt - ошибка (но мы покажем что будет)
    
    // Показываем объект
    showObject(currentObject);
    
    // Пояснение про ограничения
    alert('Добавлены проблемные поля:' +
          '- temp: undefined (пропадет при stringify)' +
          '- calc: функция (пропадет)' +
          '- score: NaN (станет null)' +
          '- inf: Infinity (станет null)' +
          '- bigNumber: BigInt (вызовет ошибку при stringify)');
});

// 3. Обычный экспорт
exportSimple.addEventListener('click', function() {
    // Получаем значение пробелов
    let space = Number(spaceSelect.value);
    
    // Преобразуем в JSON
    let json = JSON.stringify(currentObject, null, space);
    
    // Выводим результат
    jsonOut.value = json;
});

// 4. Экспорт с фильтром по ключам (replacer-массив)
exportArray.addEventListener('click', function() {
    // Собираем отмеченные ключи
    let allowedKeys = [];
    for (let i = 0; i < keyChecks.length; i++) {
        if (keyChecks[i].checked) {
            allowedKeys.push(keyChecks[i].value);
        }
    }
    
    // Получаем значение пробелов
    let space = Number(spaceSelect.value);
    
    // Преобразуем в JSON с фильтром
    let json = JSON.stringify(currentObject, allowedKeys, space);
    
    // Выводим результат
    jsonOut.value = json;
});

// 5. Экспорт с функцией (replacer-функция)
exportFunc.addEventListener('click', function() {
    // Получаем значение пробелов
    let space = Number(spaceSelect.value);
    
    // Создаем функцию для обработки
    function replacer(key, value) {
        // Особый случай: первый вызов с key = ""
        if (key === "") {
            return value; // возвращаем весь объект
        }
        
        // Если ключ "age" и это строка, преобразуем в число
        if (key === "age" && typeof value === "string") {
            let num = Number(value);
            if (!isNaN(num)) {
                return num; // возвращаем число
            }
        }
        
        // Если ключ "password", не включаем его
        if (key === "password") {
            return undefined; // исключаем поле
        }
        
        // Для всего остального возвращаем как есть
        return value;
    }
    
    // Преобразуем в JSON с функцией
    let json = JSON.stringify(currentObject, replacer, space);
    
    // Выводим результат
    jsonOut.value = json;
    
    // Пояснение
    if (jsonOut.value !== '') {
        console.log('Функция преобразовала age в число (если получилось)');
    }
});

// 6. Импорт
importBtn.addEventListener('click', function() {
    // Прячем ошибку
    errorBox.style.display = 'none';
    
    // Получаем JSON из текстового поля
    let jsonString = jsonIn.value;
    
    // Проверяем, не пусто ли
    if (jsonString.trim() === '') {
        errorBox.style.display = 'block';
        errorMsg.textContent = 'Введите JSON';
        return;
    }
    
    // Пытаемся распарсить
    try {
        let parsedObject = JSON.parse(jsonString);
        
        // Показываем результат
        importShow.textContent = JSON.stringify(parsedObject, null, 2);
        
        // Можно заполнить форму? (дополнительно)
        // Но для простоты просто показываем объект
        
    } catch (error) {
        // Если ошибка - показываем её
        errorBox.style.display = 'block';
        errorMsg.textContent = 'Некорректный JSON: ' + error.message;
        importShow.textContent = '—';
    }
});

// Дополнительно: пример с неправильным JSON для демонстрации
window.addEventListener('load', function() {
    // Заполняем поле ввода примером
    jsonIn.value = '{\n  "userName": "Петр",\n  "age": 30,\n  "isStudent": false\n}';
});