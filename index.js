import moment from 'moment';

const getEaster = (year) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const n0 = (h + l + 7 * m + 114);
  const n = Math.floor(n0 / 31) - 1;
  const p = n0 % 31 + 1;
  return new Date(year, n, p);
}
const NORWEGIAN = 'no';
const ENGLISH = 'en';

export default (year, options = {}) => {
  const easter = getEaster(year);
  const locale = options.locale === ENGLISH ? ENGLISH : NORWEGIAN;
  const format = options.format === '' ? format : options.format;
  return [
    {
      name: locale === NORWEGIAN ? 'Skjærtorsdag' : 'Maundy Thursday',
      date: moment(easter).subtract(3, 'days').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? 'Langfredag' : 'Good Friday',
      date: moment(easter).subtract(2, 'days').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '1. påskedag' : 'First day of Easter',
      date: moment(easter).startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '2. påskedag' : 'Easter Monday',
      date: moment(easter).add(1, 'days').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? 'Kristi Himmelsprettsdag' : 'Christs Ascension Day',
      date: moment(easter).add(39, 'days').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '1. pinsedag' : 'Whit Sunday',
      date: moment(easter).add(49, 'days').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '2. pinsedag' : 'Whit Monday',
      date: moment(easter).add(50, 'days').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? 'Nyttårsdag' : 'New years day',
      date: moment().year(year).startOf('year').startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '1. mai' : 'May Day',
      date: moment().year(year).month('may').date(1).startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '17. mai' : 'Constitution Day',
      date: moment().year(year).month('may').date(17).startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? 'juleaften' : 'Christmas Eve',
      date: moment().year(year).month('december').date(24).startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '1. juledag' : 'Christmas Day',
      date: moment().year(year).month('december').date(25).startOf('day').format(format),
    },
    {
      name: locale === NORWEGIAN ? '2. juledag' : 'Boxing Day',
      date: moment().year(year).month('december').date(26).startOf('day').format(format),
    }
  ];
};
