const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('LOGGED YOU IN! SUCCESSFUL MATCH!')
    } else {
        console.log('INCORRECT PASSWORD TRY AGAIN')
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$hbvILTqWFHTUaKaNN5nqJeCjCrU8U99JKJB8xl76pKSa7aNFWammm')
