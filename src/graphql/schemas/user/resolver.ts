import {database} from 'database';


/**
*
*/
const friends = (obj, args, context) => {
  return {
    cursor: '',
    friends:[]
  }
}


/**
*
*/
const notifications = (obj, args, context) => {
  const {userId} = context

  return database.notifictions.getForUser({
    userId
  })
}


export default {
  User: {
    friends,
    notifications
  }
}