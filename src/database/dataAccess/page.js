import realmdb from '../unifiedSchema';

class Page {
  async getPage() {
    // await realmdb.write(() => {
    //   realmdb.delete(realmdb.objects('Page').filtered('type == "pagination"'));
    // });
    let page = await realmdb.objects('Page');
    if (page.length === 0) {
      await realmdb.write(() => {
        realmdb.create('Page', {
          id: 1,
          type: 'pagination',
          page: '1'
        });
      });
    }
    page = Array.from(await realmdb.objects('Page').filtered('type == "pagination"'));
    return page[0].page;
  }

  async incrementPage() {
    const newPage = Number(await this.getPage()) + 1;
    await realmdb.write(() => {
      realmdb.create('Page', {
        id: 1,
        page: newPage.toString()
      }, true);
    });
  }
}

export default new Page();
