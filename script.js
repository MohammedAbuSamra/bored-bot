const container = document.getElementById('container')
fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => console.log(data))