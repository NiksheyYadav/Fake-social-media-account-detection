document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('reportForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const profileUrl = formData.get("profileURL");
        // Add your logic to analyze the profile URL here.
        // This is a placeholder:
        if ("fake" in profileUrl.lower())
            result = "The profile appears to be fake."
        else            
            result = "The profile could not be verified as fake."
        window.location.href = 'result.html?name=' + encodeURIComponent(name) + '&result=' + encodeURIComponent(result);
    });
});
