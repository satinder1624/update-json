window.addEventListener('load',()=>{
    async function getUsers() {
        let url = 'db.json';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function renderUsers() {
        let users = await getUsers();
        let html = '';
        users.forEach(user => {
            let htmlSegment = `<div class="user">
                                <h2>${user.firstName} ${user.lastName}</h2>
                                <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.container');
        container.innerHTML = html;
    }

    renderUsers();
    
    const sendNewRecord = async (e) => {
        e.preventDefault();
        let host = 'http://127.0.0.1:8080';
        await axios.post(`${host}/newData/${2}`, {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    document.getElementById('action').addEventListener('click', sendNewRecord)
});