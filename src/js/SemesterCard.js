const semesterFolders = {
    "1stSem": "./assets/semester1/",
    "2ndSem": "./assets/semester2/",
    "3rdSem": "./assets/semester3/",
    "4thSem": "./assets/semester4/",
    "5thSem": "./assets/semester5/",
    "6thSem": "./assets/semester6/",
    "7thSem": "./assets/semester7/",
    "8thSem": "./assets/semester8/",
};

// Adding eventListeners
document.addEventListener('DOMContentLoaded', function() {
    const semLinks = document.querySelectorAll('.semLink');
    semLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const semesterId = event.target.id; 
            showPopup(semesterId);
        });
    });


    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeForm();
        }
    });
});

function showPopup(semesterId) {
    const title = document.getElementById('popupTitle');
    const content = document.getElementById('popupContent');

    title.textContent = semesterId.replace('Sem', ' Semester') + " Resources";

    content.innerHTML = '';

    // Create links dynamically
    const links = [
        { text: 'Assignments', href: semesterFolders[semesterId] + 'assignments.html' },
        { text: 'Notes', href: semesterFolders[semesterId] + 'notes.html' },
        { text: 'MCQs', href: semesterFolders[semesterId] + 'mcqs.html' },
        { text: 'Question Paper', href: semesterFolders[semesterId] + 'question-paper.html' },
        { text: 'Lab Report', href: semesterFolders[semesterId] + 'lab-report.html' },
      ]

    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.textContent = link.text;
        anchor.classList.add('popup-link');
        content.appendChild(anchor);
    });

    // Show popup and overlay
    document.getElementById('popupForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}