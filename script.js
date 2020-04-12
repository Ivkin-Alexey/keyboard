const language_rus = 'rus';
const language_eng = 'eng';
const capsLock_lowerCase = 'lowerCase';
const capsLock_upperCase = 'upperCase';
const textArea = document.createElement('textarea');
let lang = localStorage.getItem('lang') || language_rus;
let capsLock = localStorage.getItem('capslock') || capsLock_lowerCase;
let value = '';
let onInput;
let arr = ['', '1'];

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
        rus: {upperCase: 'Caps lock', lowerCase: 'Caps lock'},
        eng: {upperCase: 'Caps lock', lowerCase: 'Caps lock'},
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
        rus: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        eng: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        keyCode: 'ControlLeft'
    }, {
        rus: {upperCase: 'Ru', lowerCase: 'Ru'},
        eng: {upperCase: 'En', lowerCase: 'En'},
        keyCode: 'langKey'
    }, {
        rus: {upperCase: 'Alt', lowerCase: 'Alt'},
        eng: {upperCase: 'Alt', lowerCase: 'Alt'},
        keyCode: 'AltLeft'
    }, {
        rus: {upperCase: '', lowerCase: ''},
        eng: {upperCase: '', lowerCase: ''},
        keyCode: 'Space'
    }, {
        rus: {upperCase: 'Alt', lowerCase: 'Alt'},
        eng: {upperCase: 'Alt', lowerCase: 'Alt'},
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
        rus: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        eng: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        keyCode: 'ControlRight'
    }],
];

// Putting keyboard and connecting it to web page after loading the HTML document
window.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main');
    main.classList.add('keyboard-wrapper');
    textArea.classList.add('keyboard-input');
    textArea.setAttribute("autofocus", "");
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    keyboard.appendChild(createKeys());
    main.appendChild(textArea);
    main.appendChild(keyboard);
    document.body.appendChild(main);

    textArea.addEventListener('input', e => value = e.target.value);
    onInput = () => textArea.value = value;
});

// Create keyboard
const createKeys = () => {
    const fragment = document.createDocumentFragment();
    keys.forEach(row => {
        // Create separate row of keyboard
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard__row');
        row.forEach(key => {
            // Create separate key in row
            const keyElement = document.createElement('div');
            keyElement.classList.add('keyboard__key', key.keyCode);
            addClassForKeys(keyElement, key.keyCode);
            for (let keyLang in key) {
                // Add wrapper for different languages
                if (keyLang !== 'keyCode') {
                    const span = document.createElement('span');
                    span.classList.add(keyLang);
                    if (keyLang !== lang) {
                        span.classList.add('hidden');
                    }
                    for (let prop in key[keyLang]) {
                        // Add wrapper for different cases
                        const propElement = document.createElement('span');
                        propElement.classList.add(prop);
                        if (prop !== capsLock) {
                            propElement.classList.add('hidden');
                        }
                        propElement.innerText = key[keyLang][prop];
                        span.appendChild(propElement);
                    }
                    keyElement.appendChild(span);
                }
            }
            // Add click events to keys
            switch (key.keyCode) {
                case 'langKey': {
                    keyElement.addEventListener('click', () => {
                        changeLanguage();
                    });
                    break;
                }
                case 'Backspace': {
                    keyElement.addEventListener('click', () => {
                        if (textArea.selectionStart === textArea.selectionEnd) {
                            value = value.substring(0, value.length - 1);
                        } else {
                            // Adding an option to delete the selected text area
                            textArea.setRangeText("", textArea.selectionStart, textArea.selectionEnd, "end");
                        }
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
                case 'ShiftLeft':
                case 'ShiftRight': {
                        keyElement.addEventListener('mousedown', () => {
                            changeCase();
                        });
                        keyElement.addEventListener('mouseup', () => {
                            changeCase();
                        });
                        break;
                    }
                case 'CapsLock': {
                    keyElement.addEventListener('click', () => {
                        changeCase();
                        if (capsLock === capsLock_lowerCase) {
                            document.querySelector('.CapsLock').classList.remove('keyboard__key_inner');
                        } else if (capsLock === capsLock_upperCase) {
                            document.querySelector('.CapsLock').classList.add('keyboard__key_inner');
                        }
                    });
                    break;
                }
                case 'Enter': {
                    keyElement.addEventListener('click', () => {
                        value = value + '\n';
                        onInput();
                    });
                    break;
                }
                case 'AltLeft':
                case 'AltRight':
                case 'ControlLeft':
                case 'ControlRight': {
                    keyElement.addEventListener('click', () => {
                        onInput();
                    });
                    break;
                }
                case 'Delete': {
                    keyElement.addEventListener('click', () => {
                        // Adding an option to delete the previous character before the carriage
                        if (textArea.selectionStart === textArea.selectionEnd) {
                            textArea.setRangeText("", textArea.selectionStart, textArea.selectionStart + 1, "end");
                        } else {
                            // Adding an option to delete the selected text area
                            textArea.setRangeText("", textArea.selectionStart, textArea.selectionEnd, "end");
                        }
                    });
                    break;
                }
                default: {
                    keyElement.addEventListener('click', e => {
                        value += e.target.innerText;
                        onInput();
                    });
                }
            }
            rowElement.appendChild(keyElement); // Putting all the keys on the same row together
        });
        fragment.appendChild(rowElement); // Putting all the rows together
    });
    return fragment;
};


// Method for adding a class to keys
const addClassForKeys = function (el, code) {
    const keyHalfWideArr = ['Tab', 'ControlLeft', 'AltLeft', 'AltRight', 'ControlRight'];
    const keyWideArr = ['Backspace', 'ShiftRight', 'ShiftLeft', 'Enter'];
    if (keyHalfWideArr.includes(code)) {el.classList.add('keyboard__key_half-wide')}
    else if (keyWideArr.includes(code)) {el.classList.add('keyboard__key_wide')}
    switch (code) {
        case 'CapsLock':
            el.classList.add('keyboard__key_less-wide');
            break;
        case 'Space':
            el.classList.add('keyboard__key_very-wide');
            break;
        case 'langKey':
            el.classList.add('keyboard__key_inner');
    }
};

// Method for changing the keyboard language
const changeLanguage = function () {
    const nodeListRus = document.querySelectorAll('.rus');
    const nodeListEng = document.querySelectorAll('.eng');
    switch (lang) {
        case language_rus: {
            lang = language_eng;
            localStorage.setItem('lang', lang);
            applyHiddenClass(nodeListRus, nodeListEng);
        }
            break;
        case language_eng: {
            lang = language_rus;
            localStorage.setItem('lang', lang);
            applyHiddenClass(nodeListEng, nodeListRus);
        }
    }
};

// Method for changing the keyboard case
const changeCase = function () {
    const nodeListUpperCase = document.querySelectorAll('.upperCase');
    const nodeListLowerCase = document.querySelectorAll('.lowerCase');
    switch (capsLock) {
        case capsLock_lowerCase: {
            capsLock = capsLock_upperCase;
            localStorage.setItem('capslock', capsLock);
            applyHiddenClass(nodeListUpperCase, nodeListLowerCase);
            break;
        }
        case capsLock_upperCase: {
            capsLock = capsLock_lowerCase;
            localStorage.setItem('capslock', capsLock);
            applyHiddenClass(nodeListLowerCase, nodeListUpperCase);
        }
    }
};

// Method of applying hidden class when changing the keyboard language or case
const applyHiddenClass = function (nodeList1, nodeList2) {
    for (let item of nodeList1) {
        item.classList.add('hidden');
    }
    for (let item of nodeList2) {
        item.classList.remove('hidden');
    }
};

// Adding keydown events
document.addEventListener('keydown', e => {

    // Adding the active class
    document.querySelector(`.${e.code}`).classList.add('active');

    // Creating a queue for keydown events and using it to check whether it is necessary to change the case (whether ShiftLeft + AltLeft were pressed simultaneously)
    arr.push(e.code);
    arr.shift();
    if (arr.includes('ShiftLeft') && arr.includes('AltLeft')) {
        changeLanguage();

    // Changing the case and highlight the key
    } else if (e.code === 'CapsLock') {
        changeCase();
        if (capsLock === 'lowerCase') {
            document.querySelector('.CapsLock').classList.remove('keyboard__key_inner');
        } else if (capsLock === 'upperCase') {
            document.querySelector('.CapsLock').classList.add('keyboard__key_inner');
        }

    // Changing the case
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        changeCase();
    }
});

// Adding keyup events
document.addEventListener('keyup', e => {
    document.querySelector(`.${e.code}`).classList.remove('active');
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        changeCase();
    }
});
