/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

let prediction = [
    'Яркое приключение уже поджидает тебя.',
    'Скоро получишь хорошую новость.',
    'Прислушайся к себе и найдешь ответ на свой вопрос.',
    'Полученный результат превзойдет все ожидания.',
    'Тебя ожидает приятная встреча.'
];


const button = document.querySelector('.forecast-btn');
const forecast = document.querySelector('.current-forecast h1');
let procent = document.querySelector('.current-forecast p');
const list = document.querySelector('.forecasts');

button.addEventListener('click', function(a) {
    let rand = [Math.floor(Math.random() * prediction.length)];
    forecast.innerText = prediction[rand];
    const newForecast = document.createElement('div');
    newForecast.classList.add('forecast-item');

    procent.append(`Вероятность ${getRandomProcent(100)}%`);

    if (a.button) {
        list.append(newForecast, procent);

    }

});

function getRandomProcent(max) {
    return Math.floor(Math.random() * max);
}