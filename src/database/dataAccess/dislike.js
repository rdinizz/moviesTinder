import realmdb from '../unifiedSchema';

class Dislike {
  async create(movie) {
    //avoid duplicated entries
    const dislike = realmdb.objects('Dislike')
    .filtered(`original_title == "${movie.original_title}"`);
    if (dislike.length === 0) {
      await realmdb.write(() => {
        realmdb.create('Dislike', {
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          overview: movie.overview
        });
      });
    }
  }

  async getLikes() {
    return await realmdb.objects('Dislike');
  }

  async getByTitle(title) {
    const movie = await realmdb.objects('Dislike').filtered(`original_title == "${title}"`);
    return movie;
  }

  async getDislikedTitles() {
    const likes = Array.from(realmdb.objects('Dislike'));
    const titles = likes.map(like => like.original_title);
    return titles;
  }
}

export default new Dislike();
