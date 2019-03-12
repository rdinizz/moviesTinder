import realmdb from '../unifiedSchema';

class Like {
  async create(movie) {
    //avoid duplicated entries
    const like = realmdb.objects('Like').filtered(`original_title == "${movie.original_title}"`);
    if (like.length === 0) {
      await realmdb.write(() => {
        realmdb.create('Like', {
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          overview: movie.overview
        });
      });
    }
  }

  async getLikes() {
    return await realmdb.objects('Like');
  }

  async getByTitle(title) {
    const movie = await realmdb.objects('Like').filtered(`original_title == "${title}"`);

    return movie;
  }

  async hasByTitle(title) {
    const movie = await realmdb.objects('Like').filtered(`original_title == "${title}"`);

    return movie.length === 0;
  }

  async getLikedTitles() {
    const likes = Array.from(realmdb.objects('Like'));

    const titles = likes.map(like => like.original_title);

    return titles;
  }
}

export default new Like();
