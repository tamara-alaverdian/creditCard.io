const cardNumberInput = document.querySelector(".card-number-input");
const numberOnCard = document.querySelector(".card-number-box");
cardNumberInput.oninput = () => {
    numberOnCard.innerText = ccFormat(cardNumberInput.value);
}

const cardName = document.querySelector(".card-holder-input");
const nameOnChange = document.querySelector(".card-holder-name");
cardName.oninput = () => {
    nameOnChange.innerText = cardName.value;
}

const monthInput = document.querySelector(".month-input");
const monthOnChange = document.querySelector(".exp-month");
monthInput.oninput = () => {
    monthOnChange.innerText = monthInput.value;
}

const yearInput = document.querySelector(".year-input");
const yearChange = document.querySelector(".exp-year")
yearInput.oninput = () => {
    yearChange.innerText = yearInput.value;
}

const cvvInput = document.querySelector(".cvv-input");
const cvvOnCard = document.querySelector(".cvv-box");
const cardFront = document.querySelector(".front");
const cardBack = document.querySelector(".back");
cvvInput.onmouseenter = () => {
    cardFront.style.transform = "perspective(1000px) rotateY(-180deg)";
    cardBack.style.transform = "perspective(1000px) rotateY(0deg)";
}

cvvInput.onmouseleave = () => {
    cardFront.style.transform = "perspective(1000px) rotateY(0deg)";
    cardBack.style.transform = "perspective(1000px) rotateY(180deg)";
}

cvvInput.oninput = () => {
    cvvOnCard.innerText = cvvInput.value;
}

function ccFormat(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}