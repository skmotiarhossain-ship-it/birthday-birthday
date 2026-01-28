document.addEventListener('DOMContentLoaded', () => {
    // Video Elements
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');

    // UI Elements
    const menuOverlay = document.getElementById('food-menu');
    const deliveryMessage = document.getElementById('delivery-message');
    const foodItems = document.querySelectorAll('.food-item');

    // --- Step 1: Video 1 Autoplay & Transition ---

    // Ensure Video 1 plays (autoplay is handled in HTML but we can monitor it)
    video1.play().catch(e => console.log("Autoplay prevented:", e));

    // When Video 1 ends, transition to Video 2
    video1.addEventListener('ended', () => {
        playVideo2();
    });

    function playVideo2() {
        // Prepare Video 2
        video2.classList.remove('hidden');
        video2.play();

        // Fade out Video 1 (CSS transition handles smoothness)
        video1.classList.add('hidden');

        // Note: We keep Video 2 playing until it ends to show the menu? 
        // Or show menu while it loops? 
        // User said: "After Video 1 & 2 finish playing: Display two selectable categories"
        // So we wait for Video 2 to end.
    }

    // --- Step 2: Show Menu after Video 2 ---

    video2.addEventListener('ended', () => {
        showMenu();
    });

    function showMenu() {
        menuOverlay.classList.remove('hidden');
        menuOverlay.classList.add('visible');
    }

    // --- Step 3: Food Selection Interaction ---

    foodItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const foodName = item.getAttribute('data-food');
            console.log(`Selected: ${foodName}`);

            // Interaction: Skip reference video, go straight to final video
            playVideo3();
        });
    });

    // --- Step 4: Final Video (Video 3) ---

    function playVideo3() {
        // Hide Menu
        menuOverlay.classList.remove('visible');
        menuOverlay.classList.add('hidden');

        // Hide Video 2
        video2.classList.add('hidden');

        video3.classList.remove('hidden');
        video3.play();
    }

    // --- Final Step: Delivery Message ---

    video3.addEventListener('ended', () => {
        showDeliveryMessage();
    });

    function showDeliveryMessage() {
        deliveryMessage.classList.remove('hidden');
        deliveryMessage.classList.add('visible');
    }

});
