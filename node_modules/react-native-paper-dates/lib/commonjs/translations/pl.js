"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const pl = {
  save: 'Zapisz',
  selectSingle: 'Wybierz datę',
  selectMultiple: 'Wybierz daty',
  selectRange: 'Wybierz zakres',
  notAccordingToDateFormat: inputFormat => `Data musi mieć format ${inputFormat}`,
  mustBeHigherThan: date => `Nie wcześniej niżn ${date}`,
  mustBeLowerThan: date => `Nie później niż ${date}`,
  mustBeBetween: (startDate, endDate) => `Pomiędzy ${startDate} - ${endDate}`,
  dateIsDisabled: 'Niedozwolona data',
  previous: 'Poprzedni',
  next: 'Dalej',
  typeInDate: 'Wpisz datę',
  pickDateFromCalendar: 'Wybierz datę z kalendarza',
  close: 'Zamknij'
};
var _default = pl;
exports.default = _default;
//# sourceMappingURL=pl.js.map