const counter = document.getElementById('counter');
const textbox = document.getElementById('textbox');
const maxLength = 100;

textbox.addEventListener('input', () => {
    const remaining = maxLength - textbox.value.length;
    counter.textContent = remaining;
});