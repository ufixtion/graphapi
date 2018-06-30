import { database } from 'database';



/**
*
*/
const reaction = (story, args, context) => {
  // TODO: Needs Dataloader

  const {userId} = context
  const {id} = story

  return database.stories.getUserReaction({
    userId,
    id
  })
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
    reaction,
    comments
  }
}