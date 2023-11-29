document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = {
      name: document.getElementById('name').value,
      lastname: document.getElementById('lastname').value,
      birthdate: document.getElementById('birthdate').value,
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(serverResponse => {
        console.log('Server response:', serverResponse);
        
      })
      .catch(error => console.error('Error:', error));
  });
  