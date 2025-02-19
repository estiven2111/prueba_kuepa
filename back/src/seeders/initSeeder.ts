import { userService } from '@app/domains/user/userService'
import { Adnetwork, Campaign, Third, Tracking, User } from '@app/models'
import { IConsole } from '@client/client'
import config from 'config'

export const run = async(_params, console:IConsole) => {
  try{
    
    
    const users = [
      {
        username: 'Estiven',
        password: 'ket#20256', 
        number: '3104964755',
        profile:{
          first_name: 'Arboleda', 
          last_name: 'Martinez'
        },
        homes:[
          {
            app:"kuepa",
            roles: [],
            current: true,
          },
        ]
      },
    ]
    
    for (const user of users) {
      const exists = await User.findOne({username: user.username}).lean()
      if(exists){
        user['_id'] = exists._id
        const update = await User.updateOne({_id: exists._id}, {$set: user})
        user['merge_homes'] = true
      } 
      await userService.upsert(user)
    }
  } catch (error) {
    console.log('error', error)
    return false
  }
  return true
}