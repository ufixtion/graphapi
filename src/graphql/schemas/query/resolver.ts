
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


/**
*
*/
const comments = (obj, {parentId, query}, context) => {
  const { userId } = context;
  return database.comments.getByParentIdForUser({
    parentId,
    userId,
    query
  })
}


/**
*
*/
const notifications = (obj, {query}, context) => {
  const { userId } = context;
  return database.notifictions.getForUser({
    userId
  })
}


export default {
  Query: {
    me,
    feed,
    story,
    comments,
    notifications
  }
}