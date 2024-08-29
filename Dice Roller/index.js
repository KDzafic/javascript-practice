function rollDice() {
    const number = document.getElementById("number").value;
    const diceResult = document.getElementById("dice-result");
    const diceImages = document.getElementById("image-container");
    const values = [];
    const images = [];

    for (let i = 0; i < number; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assets/${value}.png" alt="Dice ${value}" style="width:100px; height:100px;"/>`);
    }

    diceResult.textContent = `Dice rolls: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
