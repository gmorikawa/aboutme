window.onload = function() {
    const btnSubmit = document.getElementById('addInformation');
    btnSubmit.onclick = createNewInformation;
};

function createNewInformation() {
    const infoList = document.getElementById('information');

    const li = document.createElement('li');

    const inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    const inputLink = document.createElement('input');
    inputLink.type = 'text';

    const div = document.createElement('div');
    div.appendChild(inputDescription);
    div.appendChild(inputLink);

    li.appendChild(div);

    infoList.appendChild(li);
}

function deleteUser(username) {
    fetch(`/u/${username}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                console.log("HTTP request successful");
            } else {
                console.log("HTTP request unsuccessful");
            }
            return res;
        });
}