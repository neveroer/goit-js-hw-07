// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector("#name-input"),
  nameOnSpan: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length > 0
    ? (refs.nameOnSpan.textContent = event.currentTarget.value)
    : (refs.nameOnSpan.textContent = "незнакомец");
}