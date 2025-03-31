export const CheckValidData = (email, password) =>{
    const validEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!validEmail){return "Email Id is not valid"}
    if(!validPassword){return "Password is not valid"}
    return null
}