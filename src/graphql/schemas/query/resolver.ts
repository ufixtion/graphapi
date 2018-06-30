
import { database } from 'database'


/**
*
*/
const me = (obj, {}, context) => {
  const {userId: id} = context
  return database.users.getById({id})
}


/**
*
*/
const feed = (obj, {query, type}, context) => {
  const { userId } = context

  return database.feed.getByUser({
    userId,
    query: {...query, type}
  })
}


/**
*
*/
const story = (obj, {id}, context) => {
  const { userId } = context

  return database.stories.getByIdForUser({
    id,
    userId
  })
}


export default {
  Query: {
    me,
    feed,
    story
  }
}