function changeLogoText() {
    const names = ['Michael.', 'Kasweka.', 'WababaDev.', 'Sir Mukoko.'];
    const logoText = document.getElementsByClassName("text-logo")[0];
    if (!logoText) return; 
    let currentIndex = 0;
    let charIndex = 0;
    let typing = true; 

    const typeSpeed = 150; 
    const deleteSpeed = 80; 
    const pauseAfterFull = 1400; 
    const pauseAfterEmpty = 300; 

    function tick() {
        const name = names[currentIndex];

        if (typing) {
            charIndex++;
            logoText.textContent = name.slice(0, charIndex);

            if (charIndex === name.length) {
                // finished typing, pause then start deleting
                typing = false;
                setTimeout(tick, pauseAfterFull);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            // deleting
            charIndex--;
            logoText.textContent = name.slice(0, charIndex);

            if (charIndex === 0) {
                // finished deleting, move to next name
                typing = true;
                currentIndex = (currentIndex + 1) % names.length;
                setTimeout(tick, pauseAfterEmpty);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }

   
    tick();
}

document.addEventListener("DOMContentLoaded", function () {
    changeLogoText();
});