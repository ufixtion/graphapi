import { database } from 'database';


/**
*
*/
const parent = (obj, args, context) => {

}


/**
*
*/
const owner = (obj, args, context) => {

}


/**
*
*/
const reaction = (obj, args, context) => {

}


/**
*
*/
const comments = (parent, {query}, context) => {
  // TODO: Needs Dataloader

  const { userId } = context;
  return database.comments.getByParentIdForUser({
    parentId: parent.id,
    userId,
    query
  })
}


export default {
  Story: {
    parent,
    owner,
    reaction,
    comments
  }
}