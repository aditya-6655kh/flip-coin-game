const coin = document.getElementById('coin-img');
const btn = document.getElementsByClassName('flip-button')[0];
const result = document.getElementById('result-text');

const flipCoin = () => {
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
        coin.src = 'resources/heads.svg';
        result.textContent = 'Heads';
    }else{
        coin.src = 'resources/tails.svg';
        result.textContent = 'Tails';
    }

    coin.parentElement.classList.remove('animate-heads', 'animate-tails');
    void coin.offsetWidth; // Force reflow
    coin.parentElement.classList.add(randomNumber < 0.5 ? 'animate-heads' : 'animate-tails');
}

btn.addEventListener('click', flipCoin);
coin.addEventListener('click', flipCoin);