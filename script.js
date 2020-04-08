let lang = 'rus';
let value = '';
let onInput;
const keys = [
    [{ rus: { upperCase: 'Ё', lowerCase: 'ё' }, eng: { upperCase: '~', lowerCase: '`' }, keyCode: 'Backquote' }],
    [],
    []
];

const createKeys = () => {
    const fragment = document.createDocumentFragment();
    keys.forEach(row => {
        // create row
        const rowElement = document.createElement('div')
        rowElement.classList.add('row')
        row.forEach(key => {
            // create key
            const keyElement = document.createElement('div');
            keyElement.classList.add('key', key.keyCode);
            for (let keyLang in key) {
                // add containers for different languages
                if (keyLang !== 'keyCode') {
                    const span = document.createElement('span');
                    span.classList.add(keyLang);
                    if (keyLang !== lang) span.classList.add('hidden');
                    for (let prop in key[keyLang]) {
                        // add symbols for different props
                        const propElement = document.createElement('span');
                        propElement.classList.add(prop);
                        if (prop !== 'lowerCase') propElement.classList.add('hidden');
                        propElement.innerText = key[keyLang][prop];
                        span.appendChild(propElement);
                    }
                    keyElement.appendChild(span);
                }
            }
            switch (key.keyCode) {
                case 'Backspace': {
                    keyElement.addEventListener('click', e => {
                        value += value.substring(0, value.length - 1);
                        onInput();
                    });
                    break;
                }
                case 'CapsLock': {
                    //
                    break;
                }
                default: {
                    keyElement.addEventListener('click', e => {
                        value += e.target.innerText;
                        onInput();
                    })
                }
            }
            rowElement.appendChild(keyElement);
        });
        fragment.appendChild(rowElement)
    })
    return fragment;
};

const createKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.appendChild(createKeys());
    return keyboard;
}

window.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main');
    // const mainContent = `
    //     <h1 class="title">Virtual Keyboard</h1>
    //     <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea>
    //     ${createKeyboard()}
    //     <p class="description">Клавиатура создана в операционной системе Windows</p>
    //     <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>
    // `;
    const textArea = document.createElement('textarea');
    textArea.addEventListener('input', e => value = e.target.value);
    onInput = () => textArea.value = value;
    main.appendChild(textArea);
    main.appendChild(createKeyboard());
    document.body.prepend(main);

    document.addEventListener('keydown', e => {
        document.querySelector(`.${e.code}`).classList.add('active')
    })

    document.addEventListener('keyup', e => {
        document.querySelector(`.${e.code}`).classList.remove('active')
        switch (e.code) {
            case 'Backqoute': {
                value += e.key;
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
