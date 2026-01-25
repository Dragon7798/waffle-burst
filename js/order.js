document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.menu-item-order');
    const totalEl = document.getElementById('total');
    const orderBtn = document.getElementById('orderBtn');

    function updateTotal() {
        let total = 0;

        items.forEach(item => {
            const price = Number(item.dataset.price);
            const qty = Number(item.querySelector('input').value);
            total += price * qty;
        });

        totalEl.textContent = total;
    }

    // Plus and minus buttons
    items.forEach(item => {
        const minus = item.querySelector('.minus');
        const plus = item.querySelector('.plus');
        const input = item.querySelector('input');

        minus.addEventListener('click', () => {
            if (input.value > 0) {
                input.value--;
                updateTotal();
            }
        });

        plus.addEventListener('click', () => {
            input.value++;
            updateTotal();
        });
    });

    // WhatsApp Order Button
    orderBtn.addEventListener('click', () => {
        let orderText = "Hi! I want to place an order:\n\n";
        let hasItems = false;

        items.forEach(item => {
            const qty = Number(item.querySelector('input').value);

            if (qty > 0) {
                hasItems = true;
                const name = item.dataset.name;
                const price = item.dataset.price;

                orderText += `• ${name} x ${qty} = ₹${price * qty}\n`;
            }
        });

        if (!hasItems) {
            alert("Please select at least one item 😊");
            return;
        }

        orderText += `\nTotal: ₹${totalEl.textContent}`;
        orderText += `\nI will visit the store to pay & collect the order.`;

        const waLink = "https://wa.me/919673832443?text=" + encodeURIComponent(orderText);
        window.open(waLink, '_blank');
    });
});
