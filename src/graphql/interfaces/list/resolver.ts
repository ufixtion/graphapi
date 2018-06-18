
export default {
  List: {
    __resolveType: (data) => {
      if (data.users) return 'UserList'
      if (data.stories) return 'StoryList'
      if (data.notifications) return 'NotificationList'
    }
  }
}