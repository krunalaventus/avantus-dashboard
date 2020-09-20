export async function checkCode(data) {
    switch(data) {
        case 'error':
          return 500
        case 'validation':
         return 300
        case 'auth':
          return 401
        case 'success':
            return 200
        default:
          // code block
      }
}