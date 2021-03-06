
import Token from "./Token";
import AppStorge from "./AppStorge"

class User{
   login(data){
      axios.post('/api/auth/login',data)
      .then(res=> this.responseAfterLogin(res))
      .catch(error=>console.log(error.response.data))
   
   }
   
   responseAfterLogin(res){
     const access_token =res.data.access_token;
      const username= res.data.user;
         if(Token.isValid(access_token)){
           AppStorge.store(username , access_token) 
           window.location='/home'
       } 
   }
   hasToken(){
      const storeToken=AppStorge.getToken();
      if(storeToken){
         return Token.isValid(storeToken)?true:false
      }
      return false
   }
   loggedIn(){
      return this.hasToken();
   }  
   logout(){
      AppStorge.clear();
      window.location='/home'
   } 
   name(){
      if(this.loggedIn){
         return AppStorge.getUser();
      }
   }
   id(){
      if(this.loggedIn){
         const payload = Token.payload(AppStorge.getToken())
         return payload.sub
      }
   }
   own(id){
         return this.id() ==id
   }
}
export default User= new User();  



