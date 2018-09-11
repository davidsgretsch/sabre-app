import moment from 'moment';

export const getAge = dateBirth => moment().diff(dateBirth, 'years');
