
export async function createUserValidation(data) {
    let error = [];
    if(await !data.first_name){
        error.push('first name')
    }
    if(await !data.last_name){
        error.push('last name')
    }
    if(await !data.email){
        error.push('email')
    }
    if(await !data.password){
        error.push('password')
    }
    if(await !data.user_name){
        error.push('user name')
    }
    if(await !data.user_role){
        error.push('user role')
    }
    if(error.length>0){
        return {
            success:false,
            message:error.join(',') + ' is required!'
        }
    }else{
        return {
            success:true
        }
    }
}