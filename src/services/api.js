import BROWSE_DATA from './stubdata/browse.json';

const FRAG_ID = [134756, 136921];
class StubApi {
  getBrowse(callback) {
    callback(BROWSE_DATA);
  }

  getLabel(fragmentId, userId) {

  }

  submit(fragmentId, userId, annotationStyle) {
    return true;
  }
}

export default StubApi;
