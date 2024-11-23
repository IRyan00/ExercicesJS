let containerProfile = document.getElementById('containerProfile')

fetch('data.js')
    .then(response => response.json())
    .then(data => {

        const { users, articles } = data;
        users.forEach(user => {
            containerProfile.innerHTML += `
            <div class="card p-0" style="width: 18rem;">
                <img src="${user.photo}" class="card-img-top img-fluid" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${user.nom} ${user.prenom}</h5>
                    <p class="card-text">${user.pseudo}</p>
                    <a href="#" onclick="showUserProfile(${user.id})" class="btn btn-primary">View profile</a>
                </div>
            </div>`
        })
    });