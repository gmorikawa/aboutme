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