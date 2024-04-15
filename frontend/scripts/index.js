let translations;
let translator_box_label1 = document.querySelector('#translator-box-label1');
let translator_box_label2 = document.querySelector('#translator-box-label2');
let translate_box1 = document.querySelector('#translator-box1');
let translate_box2 = document.querySelector('#translator-box2');
let switchbtn = document.querySelector('.switch-btn');

switchbtn.addEventListener('click', () => {
    let temp = translator_box_label1.innerHTML;
    translator_box_label1.innerHTML = translator_box_label2.innerHTML;
    translator_box_label2.innerHTML = temp; 
    
    temp = translate_box1.value;
    translate_box1.value = translate_box2.value;
    translate_box2.value = temp;
}); 


translate_box1.addEventListener('change', () => {
    translate();
});

async function translate() {
    translations = await getData();
    console.log(translations);

    let before = translate_box1.value.split(' ');
    console.log(before);
    for (let word = 0; word < before.length; word++) {
        for(let translated = 0; translated < translations.length; translated++) {
            if (before[word] == translations[translated].word) {
                before[word] = translations[translated].translation;
            }
        }
    }
    let after = before.join(' ');
    console.log(after);
    translate_box2.value = after;
    
}

async function getData() {
    const response = await fetch('/translations');
    return await response.json();

} 