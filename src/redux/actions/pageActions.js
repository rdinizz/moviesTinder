import Page from '../../database/dataAccess/page';

export const incrementPage = () => async dispatch => {
  await Page.incrementPage();
};
