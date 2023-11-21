document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() =>{
        hideLoader();
        showContent();
    }, 2000);
    function hideLoader()
    {
        const loader = document.getElementById('loader');
        loader.style.display = "none";
    }
    function showContent()
    {
        const content = document.getElementById('content');
        content.style.display = "block";
    }
    fetch("https://api.artic.edu/api/v1/artworks/search")
        .then((response) => response.json())
        .then((result) => {

            const artworks = result.data;
            const Body = document.getElementById('Artwork_Body');

            artworks.forEach(entry => {
                const row = document.createElement('tr');

                const thumbnailCell = document.createElement('td');
                const thumbnailImage = document.createElement('img');

                thumbnailImage.src = entry.thumbnail.lqip;

                thumbnailCell.appendChild(thumbnailImage);
                row.appendChild(thumbnailCell);

                const titleCell = document.createElement('td');
                titleCell.textContent = entry.title;
                row.appendChild(titleCell);

                const timestampCell = document.createElement('td');
                timestampCell.textContent = entry.timestamp;
                row.appendChild(timestampCell);

                const scoreCell = document.createElement('td');
                scoreCell.textContent = entry._score;
                row.appendChild(scoreCell);

                Body.appendChild(row);
            });
            function Display1st() {
                Body.innerHTML = '';

                artworks.forEach(entry => {
                    if (entry._score >= 1000 && entry._score <= 5000) {
                        const row = document.createElement('tr');

                        const thumbnailCell = document.createElement('td');
                        const thumbnailImage = document.createElement('img');

                        thumbnailImage.src = entry.thumbnail.lqip;

                        thumbnailCell.appendChild(thumbnailImage);
                        row.appendChild(thumbnailCell);

                        const titleCell = document.createElement('td');
                        titleCell.textContent = entry.title;
                        row.appendChild(titleCell);

                        const timestampCell = document.createElement('td');
                        timestampCell.textContent = entry.timestamp;
                        row.appendChild(timestampCell);

                        const scoreCell = document.createElement('td');
                        scoreCell.textContent = entry._score;
                        row.appendChild(scoreCell);

                        Body.appendChild(row);
                    }
                });
            }

            function Display2nd() {
                Body.innerHTML = '';

                artworks.forEach(entry => {
                    if (entry._score >= 5000 && entry._score <= 10000) {
                        const row = document.createElement('tr');

                        const thumbnailCell = document.createElement('td');
                        const thumbnailImage = document.createElement('img');

                        thumbnailImage.src = entry.thumbnail.lqip;

                        thumbnailCell.appendChild(thumbnailImage);
                        row.appendChild(thumbnailCell);

                        const titleCell = document.createElement('td');
                        titleCell.textContent = entry.title;
                        row.appendChild(titleCell);

                        const timestampCell = document.createElement('td');
                        timestampCell.textContent = entry.timestamp;
                        row.appendChild(timestampCell);

                        const scoreCell = document.createElement('td');
                        scoreCell.textContent = entry._score;
                        row.appendChild(scoreCell);

                        Body.appendChild(row);
                    }
                });
            }

            function Display3rd() {
                Body.innerHTML = '';

                artworks.forEach(entry => {
                    if (entry._score > 10000) {
                        const row = document.createElement('tr');

                        const thumbnailCell = document.createElement('td');
                        const thumbnailImage = document.createElement('img');

                        thumbnailImage.src = entry.thumbnail.lqip;

                        thumbnailCell.appendChild(thumbnailImage);
                        row.appendChild(thumbnailCell);

                        const titleCell = document.createElement('td');
                        titleCell.textContent = entry.title;
                        row.appendChild(titleCell);

                        const timestampCell = document.createElement('td');
                        timestampCell.textContent = entry.timestamp;
                        row.appendChild(timestampCell);

                        const scoreCell = document.createElement('td');
                        scoreCell.textContent = entry._score;
                        row.appendChild(scoreCell);

                        Body.appendChild(row);
                    }
                });
            }

            function ClearSelection() {
                Body.innerHTML = ''

                document.querySelectorAll('input[type="radio"]').forEach(radio => {
                    radio.checked = false;
                });

                artworks.forEach(entry => {
                    const row = document.createElement('tr');

                    const thumbnailCell = document.createElement('td');
                    const thumbnailImage = document.createElement('img');

                    thumbnailImage.src = entry.thumbnail.lqip;

                    thumbnailCell.appendChild(thumbnailImage);
                    row.appendChild(thumbnailCell);

                    const titleCell = document.createElement('td');
                    titleCell.textContent = entry.title;
                    row.appendChild(titleCell);

                    const timestampCell = document.createElement('td');
                    timestampCell.textContent = entry.timestamp;
                    row.appendChild(timestampCell);

                    const scoreCell = document.createElement('td');
                    scoreCell.textContent = entry._score;
                    row.appendChild(scoreCell);

                    Body.appendChild(row);
                });
            }

            function showLoader() {
                document.getElementById("loader").style.display = "block";
              }
          
              // Function to hide the loader
              function hideLoader() {
                document.getElementById("loader").style.display = "none";
              }

            document.getElementById('first').addEventListener('click', Display1st);
            document.getElementById('second').addEventListener('click', Display2nd);
            document.getElementById('third').addEventListener('click', Display3rd);
            document.getElementById('clear').addEventListener('click', ClearSelection);
        });
});