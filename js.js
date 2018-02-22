window.onload = () => {
    let backgroundColor = null;

    for (let i = 0; i < 4; ++i) {
        const color = randomColor();
        const div = document.createElement('div');
        div.style.background = color;
        document.body.appendChild(div);

        if (i === 0) {
            backgroundColor = color;
        }
    }

    document.body.style.backgroundColor = backgroundColor;
    requestAnimationFrame(() => document.body.classList.add('ready'));
};

// I was flying so no internet access
function randomColor() {
    const hexArray = [
        toHex(Math.floor(Math.random() * 16)),
        toHex(Math.floor(Math.random() * 16)),
        toHex(Math.floor(Math.random() * 16)),
        toHex(Math.floor(Math.random() * 16)),
        toHex(Math.floor(Math.random() * 16)),
        toHex(Math.floor(Math.random() * 16)),
    ];
    const hex = hexArray.reduce((p, v) => `${p}${v}`, '');
    return `#${hex}`;
}

function toHex(v) {
    if (v >= 0 && v <= 9) {
        return v;
    }

    return ['a', 'b', 'c', 'd', 'e', 'f'][v - 10];
}