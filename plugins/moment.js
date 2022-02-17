import moment from 'moment';

import 'moment/locale/tr';

export default () => {

  // moment.locale('tr');
  moment().format('MMMM Do YYYY, h:mm:ss a');
};
