let lang = 'rus';
let capsLock = 'lowerCase';
let value = '';
let onInput;
const keys = [
    [{
        rus: {upperCase: 'Ё', lowerCase: 'ё'},
        eng: {upperCase: '~', lowerCase: '`'},
        keyCode: 'Backquote'
    }, {
        rus: {upperCase: '!', lowerCase: '1'},
        eng: {upperCase: '!', lowerCase: '1'},
        keyCode: 'Digit1'
    }, {
        rus: {upperCase: '"', lowerCase: '2'},
        eng: {upperCase: '@', lowerCase: '2'},
        keyCode: 'Digit2'
    }, {
        rus: {upperCase: '№', lowerCase: '3'},
        eng: {upperCase: '#', lowerCase: '3'},
        keyCode: 'Digit3'
    }, {
        rus: {upperCase: ';', lowerCase: '4'},
        eng: {upperCase: '$', lowerCase: '4'},
        keyCode: 'Digit4'
    }, {
        rus: {upperCase: '%', lowerCase: '5'},
        eng: {upperCase: '%', lowerCase: '5'},
        keyCode: 'Digit5'
    }, {
        rus: {upperCase: ':', lowerCase: '6'},
        eng: {upperCase: '^', lowerCase: '6'},
        keyCode: 'Digit6'
    }, {
        rus: {upperCase: '?', lowerCase: '7'},
        eng: {upperCase: '&', lowerCase: '7'},
        keyCode: 'Digit7'
    }, {
        rus: {upperCase: '*', lowerCase: '8'},
        eng: {upperCase: '*', lowerCase: '8'},
        keyCode: 'Digit8'
    }, {
        rus: {upperCase: '(', lowerCase: '9'},
        eng: {upperCase: '(', lowerCase: '9'},
        keyCode: 'Digit9'
    }, {
        rus: {upperCase: ')', lowerCase: '0'},
        eng: {upperCase: ')', lowerCase: '0'},
        keyCode: 'Digit0'
    }, {
        rus: {upperCase: '_', lowerCase: '-'},
        eng: {upperCase: '_', lowerCase: '-'},
        keyCode: 'Minus'
    }, {
        rus: {upperCase: '+', lowerCase: '='},
        eng: {upperCase: '+', lowerCase: '='},
        keyCode: 'Equal'
    }, {
        rus: {upperCase: 'Backspace', lowerCase: 'Backspace'},
        eng: {upperCase: 'Backspace', lowerCase: 'Backspace'},
        keyCode: 'Backspace'
    }], [{
        rus: {upperCase: 'Tab', lowerCase: 'Tab'},
        eng: {upperCase: 'Tab', lowerCase: 'Tab'},
        keyCode: 'Tab'
    }, {
        rus: {upperCase: 'Й', lowerCase: 'й'},
        eng: {upperCase: 'Q', lowerCase: 'q'},
        keyCode: 'KeyQ'
    }, {
        rus: {upperCase: 'Ц', lowerCase: 'ц'},
        eng: {upperCase: 'W', lowerCase: 'w'},
        keyCode: 'KeyW'
    }, {
        rus: {upperCase: 'У', lowerCase: 'у'},
        eng: {upperCase: 'E', lowerCase: 'e'},
        keyCode: 'KeyE'
    }, {
        rus: {upperCase: 'К', lowerCase: 'к'},
        eng: {upperCase: 'R', lowerCase: 'r'},
        keyCode: 'KeyR'
    }, {
        rus: {upperCase: 'Е', lowerCase: 'е'},
        eng: {upperCase: 'T', lowerCase: 't'},
        keyCode: 'KeyT'
    }, {
        rus: {upperCase: 'Н', lowerCase: 'н'},
        eng: {upperCase: 'Y', lowerCase: 'y'},
        keyCode: 'KeyY'
    }, {
        rus: {upperCase: 'Г', lowerCase: 'г'},
        eng: {upperCase: 'U', lowerCase: 'u'},
        keyCode: 'KeyU'
    }, {
        rus: {upperCase: 'Ш', lowerCase: 'ш'},
        eng: {upperCase: 'I', lowerCase: 'i'},
        keyCode: 'KeyI'
    }, {
        rus: {upperCase: 'Щ', lowerCase: 'щ'},
        eng: {upperCase: 'O', lowerCase: 'o'},
        keyCode: 'KeyO'
    }, {
        rus: {upperCase: 'З', lowerCase: 'з'},
        eng: {upperCase: 'P', lowerCase: 'p'},
        keyCode: 'KeyP'
    }, {
        rus: {upperCase: 'Х', lowerCase: 'х'},
        eng: {upperCase: '{', lowerCase: '['},
        keyCode: 'BracketLeft'
    }, {
        rus: {upperCase: 'Ъ', lowerCase: 'ъ'},
        eng: {upperCase: '}', lowerCase: ']'},
        keyCode: 'BracketRight'
    }, {
        rus: {upperCase: '/', lowerCase: ''},
        eng: {upperCase: '|', lowerCase: ''},
        keyCode: 'Backslash'
    }, {
        rus: {upperCase: 'Del', lowerCase: 'Del'},
        eng: {upperCase: 'Del', lowerCase: 'Del'},
        keyCode: 'Delete'
    },],
    [{
        rus: {upperCase: 'caps lock', lowerCase: 'caps lock'},
        eng: {upperCase: 'caps lock', lowerCase: 'caps lock'},
        keyCode: 'CapsLock'
    }, {
        rus: {upperCase: 'Ф', lowerCase: 'ф'},
        eng: {upperCase: 'A', lowerCase: 'a'},
        keyCode: 'KeyA'
    }, {
        rus: {upperCase: 'Ы', lowerCase: 'ы'},
        eng: {upperCase: 'S', lowerCase: 's'},
        keyCode: 'KeyS'
    }, {
        rus: {upperCase: 'В', lowerCase: 'в'},
        eng: {upperCase: 'D', lowerCase: 'd'},
        keyCode: 'KeyD'
    }, {
        rus: {upperCase: 'А', lowerCase: 'а'},
        eng: {upperCase: 'F', lowerCase: 'f'},
        keyCode: 'KeyF'
    }, {
        rus: {upperCase: 'П', lowerCase: 'п'},
        eng: {upperCase: 'G', lowerCase: 'g'},
        keyCode: 'KeyG'
    }, {
        rus: {upperCase: 'Р', lowerCase: 'р'},
        eng: {upperCase: 'H', lowerCase: 'h'},
        keyCode: 'KeyH'
    }, {
        rus: {upperCase: 'О', lowerCase: 'о'},
        eng: {upperCase: 'J', lowerCase: 'j'},
        keyCode: 'KeyJ'
    }, {
        rus: {upperCase: 'Л', lowerCase: 'л'},
        eng: {upperCase: 'K', lowerCase: 'k'},
        keyCode: 'KeyK'
    }, {
        rus: {upperCase: 'Д', lowerCase: 'д'},
        eng: {upperCase: 'L', lowerCase: 'l'},
        keyCode: 'KeyL'
    }, {
        rus: {upperCase: 'Ж', lowerCase: 'ж'},
        eng: {upperCase: ':', lowerCase: ';'},
        keyCode: 'Semicolon'
    }, {
        rus: {upperCase: 'Э', lowerCase: 'э'},
        eng: {upperCase: '"', lowerCase: ''},
        keyCode: 'Quote'
    }, {
        rus: {upperCase: 'Enter', lowerCase: 'Enter'},
        eng: {upperCase: 'Enter', lowerCase: 'Enter'},
        keyCode: 'Enter'
    },],
    [{
        rus: {upperCase: 'Shift', lowerCase: 'Shift'},
        eng: {upperCase: 'Shift', lowerCase: 'Shift'},
        keyCode: 'ShiftLeft'
    }, {
        rus: {upperCase: 'Я', lowerCase: 'я'},
        eng: {upperCase: 'Z', lowerCase: 'z'},
        keyCode: 'KeyZ'
    }, {
        rus: {upperCase: 'Ч', lowerCase: 'ч'},
        eng: {upperCase: 'X', lowerCase: 'x'},
        keyCode: 'KeyX'
    }, {
        rus: {upperCase: 'С', lowerCase: 'с'},
        eng: {upperCase: 'C', lowerCase: 'c'},
        keyCode: 'KeyC'
    }, {
        rus: {upperCase: 'М', lowerCase: 'м'},
        eng: {upperCase: 'V', lowerCase: 'v'},
        keyCode: 'KeyV'
    }, {
        rus: {upperCase: 'И', lowerCase: 'и'},
        eng: {upperCase: 'B', lowerCase: 'b'},
        keyCode: 'KeyB'
    }, {
        rus: {upperCase: 'Т', lowerCase: 'т'},
        eng: {upperCase: 'N', lowerCase: 'n'},
        keyCode: 'KeyN'
    }, {
        rus: {upperCase: 'Ь', lowerCase: 'ь'},
        eng: {upperCase: 'M', lowerCase: 'm'},
        keyCode: 'KeyM'
    }, {
        rus: {upperCase: 'Б', lowerCase: 'б'},
        eng: {upperCase: '<', lowerCase: ','},
        keyCode: 'Comma'
    }, {
        rus: {upperCase: 'Ю', lowerCase: 'ю'},
        eng: {upperCase: '>', lowerCase: '.'},
        keyCode: 'Period'
    }, {
        rus: {upperCase: ',', lowerCase: '.'},
        eng: {upperCase: '?', lowerCase: '/'},
        keyCode: 'Slash'
    }, {
        rus: {upperCase: '▲', lowerCase: '▲'},
        eng: {upperCase: '▲', lowerCase: '▲'},
        keyCode: 'ArrowUp'
    }, {
        rus: {upperCase: 'Shift', lowerCase: 'Shift'},
        eng: {upperCase: 'Shift', lowerCase: 'Shift'},
        keyCode: 'ShiftRight'
    },],
    [{
        rus: {upperCase: 'ctrl', lowerCase: 'ctrl'},
        eng: {upperCase: 'ctrl', lowerCase: 'ctrl'},
        keyCode: 'ControlLeft'
    }, {
        rus: {upperCase: 'Win', lowerCase: 'Win'},
        eng: {upperCase: 'Win', lowerCase: 'Win'},
        keyCode: 'MetaLeft'
    }, {
        rus: {upperCase: 'alt', lowerCase: 'alt'},
        eng: {upperCase: 'alt', lowerCase: 'alt'},
        keyCode: 'AltLeft'
    }, {
        rus: {upperCase: '', lowerCase: ''},
        eng: {upperCase: '', lowerCase: ''},
        keyCode: 'Space'
    }, {
        rus: {upperCase: 'alt', lowerCase: 'alt'},
        eng: {upperCase: 'alt', lowerCase: 'alt'},
        keyCode: 'AltRight'
    }, {
        rus: {upperCase: '◄', lowerCase: '◄'},
        eng: {upperCase: '◄', lowerCase: '◄'},
        keyCode: 'ArrowLeft'
    }, {
        rus: {upperCase: '▼', lowerCase: '▼'},
        eng: {upperCase: '▼', lowerCase: '▼'},
        keyCode: 'ArrowDown'
    }, {
        rus: {upperCase: '►', lowerCase: '►'},
        eng: {upperCase: '►', lowerCase: '►'},
        keyCode: 'ArrowRight'
    }, {
        rus: {upperCase: 'ctrl', lowerCase: 'ctrl'},
        eng: {upperCase: 'ctrl', lowerCase: 'ctrl'},
        keyCode: 'ControlRight'
    }],
];

//Create keyboard
const createKeys = () => {
    const fragment = document.createDocumentFragment();
    keys.forEach(row => {
        // Создаем отдельную строку из клавиш
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard__row');
        row.forEach(key => {
            // Создаем отдельную клавишу в строке
            const keyElement = document.createElement('div');
            keyElement.classList.add('keyboard__key', key.keyCode);
            if (key.keyCode === 'Tab' || key.keyCode === 'ControlLeft' || key.keyCode === 'AltLeft'|| key.keyCode === 'AltRight'|| key.keyCode === 'ControlRight') {
                keyElement.classList.add('keyboard__key_half-wide');
            } else if (key.keyCode === 'Backspace' || key.keyCode === 'ShiftRight' || key.keyCode === 'ShiftLeft' || key.keyCode === 'Enter') {
                keyElement.classList.add('keyboard__key_wide');
            } else if (key.keyCode === 'CapsLock') {
                keyElement.classList.add('keyboard__key_less-wide');
            } else if (key.keyCode === 'Space') {
            keyElement.classList.add('keyboard__key_very-wide');
            }
            for (let keyLang in key) {
            // Добавляем обертку для разных языков
            if (keyLang !== 'keyCode') {
                const span = document.createElement('span');
                span.classList.add(keyLang);
                if (keyLang !== lang) {
                    span.classList.add('hidden')
                }
                for (let prop in key[keyLang]) {
                    // Добавляем обертку для разных регистров
                    const propElement = document.createElement('span');
                    propElement.classList.add(prop);
                    if (prop !== capsLock) {
                        propElement.classList.add('hidden')
                    }
                    propElement.innerText = key[keyLang][prop];
                    span.appendChild(propElement);
                }
                keyElement.appendChild(span);
            }
        }
        //Add events to keys
        switch (key.keyCode) {
            case 'Backspace': {
                keyElement.addEventListener('click', () => {
                    value = value.substring(0, value.length - 1);
                    onInput();
                });
                break;
            }
            case 'Tab': {
                keyElement.addEventListener('click', () => {
                    value = value + '   ';
                    onInput();
                });
                break;
            }
            case 'Space': {
                keyElement.addEventListener('click', () => {
                    value = value + ' ';
                    onInput();
                });
                break;
            }

            default: {
                keyElement.addEventListener('click', e => {
                    value += e.target.innerText;
                    onInput();
                })
            }
        }
        rowElement.appendChild(keyElement); // Собираем все клавиши одной строки вместе
    });
    fragment.appendChild(rowElement); // Собираем все строки вместе
});
return fragment;
};

// Метод для смены раскладки клавиатуры
const changeLanguage = function() {
    document.querySelectorAll(`.${lang}`).classList.add('hidden');
    // if (lang === 'rus') {lang = 'eng'
    // } else if (lang === 'eng') {lang = 'rus'
};

// Собираем клавиатуру
const createKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.appendChild(createKeys());
    return keyboard;
};

// Подключаем клавиатуру к нашей веб-странице после загрузки HTML-документа
window.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main');
    main.classList.add('keyboard-wrapper');
    const textArea = document.createElement('textarea');
    textArea.classList.add('keyboard-input');
    textArea.setAttribute("autofocus", "");
    textArea.addEventListener('input', e => value = e.target.value);

    onInput = () => textArea.value = value;
    main.appendChild(textArea);
    main.appendChild(createKeyboard());
    document.body.appendChild(main);

    // Добавляем класс active к клавише при её нажатии на физической клавиатуре
    document.addEventListener('keydown', e => {
        document.querySelector(`.${e.code}`).classList.add('active');
    });

    // Удаляем класс active у клавиши при её отпускании на физической клавиатуре и добавляем содержимое в Textarea
    document.addEventListener('keyup', e => {
        document.querySelector(`.${e.code}`).classList.remove('active');
        if (e.code === 'ShiftLeft' && e.code === 'AltLeft') {
            changeLanguage();
        }

        switch (e.code) {

        case 'Backspace': {
            onInput();
            break;
        }
        case 'Enter': {
            onInput();
            break;
        }
        case 'Tab': {
            onInput();
            break;
        }
        case 'CapsLock': {
            onInput();
            break;
        }
        case 'MetaLeft': {
            onInput();
            break;
        }
        case 'ShiftLeft': {
            onInput();
            break;
        }
        case 'ShiftRight': {
            onInput();
            break;
        }
        case 'ControlLeft': {
            onInput();
            break;
        }
        case 'ControlRight': {
            onInput();
            break;
        }
        case 'AltLeft': {
            onInput();
            break;
        }
        case 'AltRight': {
            onInput();
            break;
        }
        case 'Space': {
            onInput();
            break;
        }
        case 'ArrowUp': {
            onInput();
            break;
        }
        case 'ArrowDown': {
            onInput();
            break;
        }
        case 'ArrowLeft': {
            onInput();
            break;
        }
        case 'ArrowRight': {
            onInput();
            break;
        }
        default: {
            value += e.key;
            onInput();
            break;
        }
        }
    })
});
