import {observable,action} from "mobx";
interface LoginForm{
  user_name:string,
  user_pwd:string
}
class User{
    // @observable isLogin: boolean = false;
    // @action async login(form:LoginForm): Promise<object>{
    //   if(form.user_name === "Qijiajie" && form.user_pwd === "Qijiajie0918"){
    //     return {code:1}
    //   }else{
    //     return {code:0}
    //   }
    // }
}
export default User;