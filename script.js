let sales = 12500;
let orders = 48;

document.getElementById("sales").innerText = "₹" + sales;
document.getElementById("orders").innerText = orders;

// Chart Data
const ctx = document.getElementById('salesChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Weekly Sales (₹)',
            data: [5000, 7000, 8000, 6000, 9000, 12000, 15000],
            borderWidth: 2
        }]
    }
});
