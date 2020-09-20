
export async function createTaskValidation(data) {
    let error = [];
    if(await !data.task_title){
        error.push('task title')
    }
    if(await !data.task_description){
        error.push('task description')
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