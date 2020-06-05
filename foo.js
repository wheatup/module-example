const foo = () => document.querySelector('h1').innerText = 'It works!';

if (typeof module !== 'undefined') {
    module.exports = foo;
}
