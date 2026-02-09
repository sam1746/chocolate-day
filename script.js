// Modal Functions
function openModal(chocolateName) {
    const modal = document.getElementById(chocolateName + 'Modal');
    modal.classList.add('active');
}

function closeModal(chocolateName) {
    const modal = document.getElementById(chocolateName + 'Modal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Create floating chocolates
const chocolateBg = document.getElementById('chocolateBg');
const chocolateEmojis = ['🍫', '🍬', '🍩', '🧁', '🍰', '🍪'];

function createFloatingChocolate() {
    const chocolate = document.createElement('div');
    chocolate.className = 'floating-chocolate';
    chocolate.textContent = chocolateEmojis[Math.floor(Math.random() * chocolateEmojis.length)];
    chocolate.style.left = Math.random() * 100 + 'vw';
    chocolate.style.animationDuration = (Math.random() * 10 + 10) + 's';
    chocolate.style.animationDelay = Math.random() * 5 + 's';
    chocolateBg.appendChild(chocolate);
    
    setTimeout(() => {
        chocolate.remove();
    }, 20000);
}

// Create chocolates periodically
setInterval(createFloatingChocolate, 1000);

// Create initial chocolates
for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingChocolate, i * 500);
}