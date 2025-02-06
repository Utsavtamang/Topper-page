document.addEventListener('DOMContentLoaded', () => {

    let semesterData = {};

    fetch('semesterLinks.json')
        .then(response => response.json())
        .then(data => {
            semesterData = data;
        })
        .catch(error => console.error('Error loading semester data:', error));

    // Adding eventListeners
    document.querySelectorAll('.semLink').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const semesterId = this.id; 
            showPopup(semesterId);
        });
    });

    // Function to show popup
    function showPopup(semesterId) {
        const title = document.getElementById('popupTitle');
        const content = document.getElementById('popupContent');

        title.textContent = semesterId.replace('Sem', ' Seme') + " Resources";

        content.innerHTML = '';

        // Does it exist?
        if (semesterData[semesterId]) {
            semesterData[semesterId].forEach(item => {
                const anchor = document.createElement('a');
                anchor.href = '#';
                anchor.textContent = item;
                anchor.target = '_blank';
                anchor.classList.add('popup-link');
                content.appendChild(anchor);
            });
        } else {
            content.innerHTML = '<p>No data available for this semester.</p>';
        }

        // Show popup and overlay
        document.getElementById('popupForm').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
});

function closeForm() {
    document.querySelectorAll('#popupForm').style.display = 'none';
    document.querySelectorAll('#overlay').style.display = 'none';
}
