document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.getElementById('rocket');
    const bullet = document.getElementById('bullet');
    const chickens = document.getElementById('chickens');
    const game = document.getElementById('game');

    function positionBullet() {
        bullet.style.left = rocket.offsetLeft + rocket.offsetWidth / 2 - bullet.offsetWidth / 2 + 'px';
        bullet.style.top = rocket.offsetTop - bullet.offsetHeight + 'px';
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const rocketRect = rocket.getBoundingClientRect();
        const gameRect = game.getBoundingClientRect();

        if (key === 'ArrowRight' && rocketRect.right < gameRect.right) {
            rocket.style.left = rocket.offsetLeft + 10 + 'px';
        } else if (key === 'ArrowLeft' && rocketRect.left > gameRect.left) {
            rocket.style.left = rocket.offsetLeft - 10 + 'px';
        } else if (key === 'ArrowUp' && rocketRect.top > gameRect.top) {
            rocket.style.top = rocket.offsetTop - 10 + 'px';
        } else if (key === 'ArrowDown' && rocketRect.bottom < gameRect.bottom) {
            rocket.style.top = rocket.offsetTop + 10 + 'px';
        }
        console.log(gameRect)
        console.log(rocket)

        positionBullet();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            bullet.style.visibility = 'visible';

            let bulletInterval = setInterval(() => {
                bullet.style.top = bullet.offsetTop - 10 + 'px';

                if (bullet.offsetTop < 0) {
                    bullet.style.visibility = 'hidden';
                    clearInterval(bulletInterval);
                }
            }, 50);
        }
    });

    function createChickens() {
        for (let i = 0; i < 51; i++) {  
            const chicken = document.createElement('div');
            chicken.className = 'chicken';
            chickens.appendChild(chicken);
        }
    }

    createChickens();
    positionBullet();  
});
