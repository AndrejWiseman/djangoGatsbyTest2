const { createRemoteFileNode } = require('gatsby-source-filesystem');
const IMAGE_PREFIX = 'http://127.0.0.1:8000/images/';
exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions;
  await createResolvers({
    DJANGO_FilmType: {
      imageFile: {
        type: 'File',
        async resolve(source) {
          const { image } = source;
          return createRemoteFileNode({
            url: encodeURI(IMAGE_PREFIX + image),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      }
    }
  });
};