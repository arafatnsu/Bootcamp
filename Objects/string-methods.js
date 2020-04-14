 let isValidPassword = function(password) {
     return password.length > 8 && !password.includes('password')
 }

 console.log(isValidPassword('asdff'))
 console.log(isValidPassword('abcd!@fkjfiodk'))
 console.log(isValidPassword('asdfpassword'))
 console.log(isValidPassword('password'))