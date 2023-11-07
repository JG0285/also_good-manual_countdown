document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close');

    incrementBtn.addEventListener('click', () => {
        counter++;
        counterValue.textContent = counter;

        if (counter === 0) {
            modal.style.display = 'block';
        }
    });

    decrementBtn.addEventListener('click', () => {
        counter--;
        counterValue.textContent = counter;
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        counterValue.textContent = counter;
        modal.style.display = 'none';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
