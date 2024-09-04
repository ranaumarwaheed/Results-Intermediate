document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const rollNumber = params.get("rollNumber");

    if (rollNumber) {
        fetch(`php/fetch_result.php?rollNumber=${rollNumber}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById("results");
                if (data.success) {
                    resultsDiv.innerHTML = `
                        <p>Roll Number: ${data.rollNumber}</p>
                        <p>Name: ${data.student_name}</p>
                        <p>Marks: ${data.marks}</p>
                        <p>Grade: ${data.grade}</p>
                    `;
                } else {
                    resultsDiv.innerHTML = `<p>${data.message}</p>`;
                }
            });
    }
})
