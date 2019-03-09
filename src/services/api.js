import BROWSE_DATA from './stubdata/browse.json';
import A from './stubdata/label/134756-151548.json';
import Aimg from './stubdata/raw/134756.jpg';
import B from './stubdata/label/136921-153016.json';
import Bimg from './stubdata/raw/136921.jpg';
import C from './stubdata/label/136921-1074288.json';
import Cimg from './stubdata/raw/136921.jpg';

class StubApi {
  getBrowse(callback) {
    callback(BROWSE_DATA);
  }

  getLabel(fragmentId, userId, callback) {
    if (userId === "151548") {
      callback({"annotations": A, "image": Aimg, "height": 2253, "width": 1344 });
    } else if (userId === "153016") {
      callback({"annotations": B, "image": Bimg, "height": 418, "width": 354 });
    } else if (userId === "1074288") {
      callback({"annotations": C, "image": Cimg, "height": 418, "width": 354 });
    } else {
      callback(null);
    }
  }

  submit(fragmentId, userId, annotationStyle) {
    return true;
  }
}

export default StubApi;
