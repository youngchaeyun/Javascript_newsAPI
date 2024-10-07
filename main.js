"use strict";

const apiKey = '88003d343a00410086103314ff969995';

document.getElementById('searchBtn').addEventListener('click', searchNews)

function searchNews() {
    let input = document.getElementById('searchInput').value
    let url = `https://newsapi.org/v2/everything?q=${input}&from=2024-10-06&to=2023-10-06&sortBy=popularity&apiKey=88003d343a00410086103314ff969995`
}

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         displayResults(data.ariticles)
//     })
//     .catch(error => {
//         console.error('Error:', error)
//     })