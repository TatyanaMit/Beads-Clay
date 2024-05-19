let name = document.querySelector('.name_js')
let login = document.querySelector('.login_js')
let password = document.querySelector('.password_js')
let submit = document.querySelector('.submit_js')

let users = {}

function User(name, login, password){
    this.name = name
    this.login = login
    this.password = password
}

function createId(users){
    return Object.keys(users).length
}

submit.addEventListener('click', () => {
    const nameUser = name.value
    const loginUser = login.value
    const passwordUser = password.value

    const user = new User(nameUser, loginUser, passwordUser)
    const userId = 'User' + createId(users)
    users[userId] = user
    console.log(users)

    alert(`${nameUser}, вы успешно прошли регестрацию!`)
    
})
