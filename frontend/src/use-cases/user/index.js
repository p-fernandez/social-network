const getProfileViewerIdFlow = (viewerId, users) => {
  if (users.length > 0) {
    const [user] = users.filter(user => viewerId === user._id);
    return user;
  }
  return null;
};

export {
  getProfileViewerIdFlow,
};
