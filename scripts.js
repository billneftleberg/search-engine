
// Fetch the dataset (data.json) and add search functionality
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-box').value.toLowerCase();
    const resultsList = document.getElementById('results-list');
    const confirmationMessage = document.getElementById('confirmation-message');

    resultsList.innerHTML = ''; // Clear previous results

    if (query.trim() === '') {
        alert('Please enter a search query.');
        return;
    }

    // Fetch data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(item => item.name.toLowerCase().includes(query));

            if (results.length > 0) {
                results.forEach(result => {
                    const listItem = document.createElement('li');
                    listItem.textContent = result.name;
                    resultsList.appendChild(listItem);
                });
            } else {
                resultsList.innerHTML = '<li>No results found.</li>';
            }

            confirmationMessage.classList.remove('hidden');
            setTimeout(() => {
                confirmationMessage.classList.add('hidden');
            }, 3000);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while searching. Please try again later.');
        });
});
