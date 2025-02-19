function toggleProgressBar() {
    const progressBarContainer = document.querySelector('.progress-bar-container');
    if (progressBarContainer.style.display === 'block') {
        progressBarContainer.style.display = 'none';
    } else {
        progressBarContainer.style.display = 'block';
    }
}
