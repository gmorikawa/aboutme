const database = [{
    "id": 1,
    "fullname": "Clarey Fern",
    "username": "cfern0",
    "email": "cfern0@un.org",
    "password": "123456",
    "biography": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "sections": null
}, {
    "id": 2,
    "fullname": "Chiquia Proudler",
    "username": "cproudler1",
    "email": "cproudler1@yellowpages.com",
    "password": "123456",
    "biography": "Phasellus in felis.",
    "sections": null
}, {
    "id": 3,
    "fullname": "Charmane Adolfsen",
    "username": "cadolfsen2",
    "email": "cadolfsen2@home.pl",
    "password": "123456",
    "biography": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "sections": null
}, {
    "id": 4,
    "fullname": "Emmalee Gapp",
    "username": "egapp3",
    "email": "egapp3@whitehouse.gov",
    "password": "123456",
    "biography": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "sections": null
}, {
    "id": 5,
    "fullname": "Leigh Fright",
    "username": "lfright4",
    "email": "lfright4@disqus.com",
    "password": "123456",
    "biography": "Nulla ac enim.",
    "sections": null
}, {
    "id": 6,
    "fullname": "Doralyn Vasiltsov",
    "username": "dvasiltsov5",
    "email": "dvasiltsov5@wikispaces.com",
    "password": "123456",
    "biography": "Aliquam non mauris.",
    "sections": null
}, {
    "id": 7,
    "fullname": "Sherie Shynn",
    "username": "sshynn6",
    "email": "sshynn6@ucla.edu",
    "password": "123456",
    "biography": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    "sections": null
}, {
    "id": 8,
    "fullname": "Alexei Baltzar",
    "username": "abaltzar7",
    "email": "abaltzar7@liveinternet.ru",
    "password": "123456",
    "biography": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "sections": null
}, {
    "id": 9,
    "fullname": "Yulma Monteath",
    "username": "ymonteath8",
    "email": "ymonteath8@si.edu",
    "password": "123456",
    "biography": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "sections": null
}, {
    "id": 10,
    "fullname": "Hailey Serginson",
    "username": "hserginson9",
    "email": "hserginson9@google.ru",
    "password": "123456",
    "biography": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "sections": null
}];

function save(data) {
    database.push(data);
}

function query() {
    return database;
}

function getByUsername(username) {
    return database.find(user => user.username === username);
}

module.exports = {
    query,
    save,
    getByUsername
};