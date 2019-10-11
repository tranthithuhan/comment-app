export const commentsFilter = (comment, sellerId, meId) => {
    return meId === sellerId ||
        !comment.isPrivate ||
        comment.author.id === meId
};