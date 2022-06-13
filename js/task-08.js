
const superForm = document.querySelector('.login-form')
console.log(superForm)

function formChanging(e) {
    e.preventDefault();
    const { email, password } = e.target.elements
    const mailName = email.value.trim();
    const pwdName = password.value.trim();
    if (mailName.trim() === ''|| pwdName === '') {
        return alert('все поля должньі бьіть заполненьі')
    }
    const object = {
        [email.name] : mailName,
        [password.name] : pwdName,
    }
 
    console.log(object)
    e.currentTarget.reset()
}
superForm.addEventListener('submit', formChanging)