import { access, token, user } from "../atoms/kuepa"
import { post } from "../util/http"
const API = '/auth'

export class Register {
  private api:string

  constructor (api:string) {
    this.api = api
  }

//   public async register ({username, password,lastName,firtName}: {username:string,password:string,lastName:string,firtName:string}, app?: any)  {
    
//     const response = await post({api:`${this.api || API}/register`, options: {data: {username, password,lastName,firtName, app} }})
//     return response
//   }

public async register (users)  {
    
    const response = await post({api:`${this.api || API}/register`, options: {data: users }})
    return response
  }


  
  public async logout ()  {
    user.set(null)
    token.set(null)
    
    access.set({can:[]})
    setTimeout(()=>{
      localStorage.removeItem(`kuepa:1.0:${user.get()?._id || 'no-user'}:context:access`)
    },1000)
  }
}

const register = new Register(API)
export default Register