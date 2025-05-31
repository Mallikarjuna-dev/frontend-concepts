
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((user) => {
            user.forEach((user) => {
                console.log(user.name)
            })
        })
        .catch((error) => {
            console.error('Error fetching users:', error)
        })
}

fetchData();