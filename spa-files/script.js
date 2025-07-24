// script.js - Frontend logic for the SPA

document.addEventListener('DOMContentLoaded', () => {
    const fetchApiButton = document.getElementById('fetchApiData');
    const apiResponseDiv = document.getElementById('apiResponse');

    fetchApiButton.addEventListener('click', async () => {
        apiResponseDiv.innerText = 'Fetching API data...';
        apiResponseDiv.style.backgroundColor = '#e0f7fa'; // Light blue for fetching

        try {
            // Directly call the API Worker URL.
            // This URL must match your api_subdomain_name and base_domain_name in Terraform.
            const API_ENDPOINT = 'https://api.1337-domain.org/api/data'; // <--- IMPORTANT: Update if your API URL changes

            console.log('Attempting to fetch from API:', API_ENDPOINT);
            const response = await fetch(API_ENDPOINT);

            if (!response.ok) {
                // If the response status is not 2xx, throw an error
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            }

            const data = await response.json();
            apiResponseDiv.innerText = JSON.stringify(data, null, 2);
            apiResponseDiv.style.backgroundColor = '#e8f5e9'; // Light green for success
            console.log('API data fetched successfully:', data);

        } catch (error) {
            apiResponseDiv.innerText = `Error fetching API data: ${error.message}`;
            apiResponseDiv.style.backgroundColor = '#ffebee'; // Light red for error
            console.error('API fetch error:', error);
        }
    });
});
