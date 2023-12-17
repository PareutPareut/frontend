let name = prompt();
const AdminPW = "123p"

if (name){
    let password = prompt("비밀번호는 무엇인가요?");

    if(password===AdminPW){
        console.log("환영합니다!")
    } else if(password==='' || password===null){
        
    }
}