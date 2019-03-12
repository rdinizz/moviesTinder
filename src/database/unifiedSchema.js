import Realm from 'realm';

class Page extends Realm.Object {}
Page.schema = {
    name: 'Page',
    primaryKey: 'id',
    properties: {
      id: 'int',
      type: { type: 'string', default: 'pagination' },
      page: { type: 'string', default: '1' }
    },
};

class Like extends Realm.Object {}
Like.schema = {
    name: 'Like',
    properties: {
      original_title: 'string',
      poster_path: 'string',
      release_date: 'string',
      overview: 'string'
    },
};

class Dislike extends Realm.Object {}
Dislike.schema = {
    name: 'Dislike',
    properties: {
      original_title: 'string',
      poster_path: 'string',
      release_date: 'string',
      overview: 'string'
    },
};

export default new Realm({ schema: [Page, Like, Dislike] });
