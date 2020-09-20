
export async function createEmailValidation(data) {
    let error = [];
    if(await !data.username){
        error.push('user name')
    }
    if(await !data.password){
        error.push('password')
    }
    if(await !data.server_address){
        error.push('server address')
    }
    if(await !data. port){
        error.push('port')
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