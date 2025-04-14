import User from "./model/user.js";
salvar();
async function salvar() {
    const user = await User.create({
        firstName: 'Maria',
        lastName: 'Silva'
    });
    console.log('User saved successfuly!')
}