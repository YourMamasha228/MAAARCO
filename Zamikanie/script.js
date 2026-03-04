// =============================================
// ПЕРСОНАЖ: Кот-вымогатель
// Описание: Необычный домашний кот, его кредо - торговать ***лом и клянчить.
// Любит пить воду из-под крана, есть вискас и гадить всему миру.
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // --- Фабрика персонажа (замыкание) ---
    function createCharacter(initialState = 100) {
        // Приватные переменные (состояние)
        let water = initialState;
        let food = initialState;
        let energy = initialState;

        // Вспомогательная функция для ограничения (clamp)
        function clamp(value) {
            return Math.max(0, Math.min(100, value));
        }

        // Публичные методы (интерфейс)
        return {
            // Геттеры
            getWater: function() {
                return water;
            },
            getFood: function() {
                return food;
            },
            getEnergy: function() {
                return energy;
            },
            // Действия
            drink: function(amount = 10) {
                water = clamp(water + amount);
            },
            eat: function(amount = 10) {
                food = clamp(food + amount);
            },
            rest: function(amount = 10) {
                energy = clamp(energy + amount);
            },
            // Тик жизни
            tick: function() {
                water = clamp(water - 8);
                food = clamp(food - 7);
                energy = clamp(energy - 6);
            }
        };
    }

    // --- Создание экземпляра персонажа ---
    const character = createCharacter(100); // Стартуем со 100

    // --- Элементы DOM ---
    const waterSpan = document.querySelector('#water .count');
    const foodSpan = document.querySelector('#food .count');
    const energySpan = document.querySelector('#energy .count');
    const drinkBtn = document.getElementById('drink');
    const eatBtn = document.getElementById('eat');
    const restBtn = document.getElementById('rest');
    const alertDiv = document.querySelector('.alert');

    // --- Функция обновления интерфейса ---
    function updateUI() {
        // Получаем текущие значения
        const waterValue = character.getWater();
        const foodValue = character.getFood();
        const energyValue = character.getEnergy();

        // Обновляем текст
        waterSpan.textContent = waterValue;
        foodSpan.textContent = foodValue;
        energySpan.textContent = energyValue;

        // Подсвечиваем красным, если значение <= 30
        waterSpan.classList.toggle('low', waterValue <= 30);
        foodSpan.classList.toggle('low', foodValue <= 30);
        energySpan.classList.toggle('low', energyValue <= 30);
    }

    // --- Функция проверки смерти ---
    function checkDeath() {
        if (character.getWater() === 0 || character.getFood() === 0 || character.getEnergy() === 0) {
            return true; // Персонаж мертв
        }
        return false;
    }

    // --- Функция обработки смерти ---
    function handleDeath() {
        // Останавливаем таймер
        clearInterval(timerId);

        // Блокируем кнопки
        drinkBtn.disabled = true;
        eatBtn.disabled = true;
        restBtn.disabled = true;

        // Показываем алерт
        alertDiv.style.display = 'block';

        // Спрашиваем о перезагрузке
        const restart = confirm('Персонаж умер. Начать заново?');
        if (restart) {
            location.reload();
        }
    }

    // --- Функция игрового тика (вызывается каждую секунду) ---
    function gameTick() {
        // Делаем тик (уменьшаем статы)
        character.tick();

        // Обновляем интерфейс
        updateUI();

        // Проверяем, не умер ли персонаж после тика
        if (checkDeath()) {
            handleDeath();
        }
    }

    // --- Обработчики кнопок ---
    drinkBtn.addEventListener('click', function() {
        // Проверка на всякий случай (если кнопка вдруг активна после смерти)
        if (checkDeath()) return;

        character.drink(10); // Увеличиваем воду на 10
        updateUI();
    });

    eatBtn.addEventListener('click', function() {
        if (checkDeath()) return;
        character.eat(10);
        updateUI();
    });

    restBtn.addEventListener('click', function() {
        if (checkDeath()) return;
        character.rest(10);
        updateUI();
    });

    // --- Запуск таймера жизни ---
    let timerId = setInterval(gameTick, 1000); // Каждую секунду

    // --- Первоначальное отображение статистики ---
    updateUI();
});