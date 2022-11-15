"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const de = {
  save: 'Speichern',
  selectSingle: 'Wähle Datum',
  selectMultiple: 'Wähle Daten',
  selectRange: 'Wähle Zeitspanne',
  notAccordingToDateFormat: inputFormat => `Das Format sollte ${inputFormat} sein`,
  mustBeHigherThan: date => `Muss nach dem ${date} sein`,
  mustBeLowerThan: date => `Muss vor dem ${date} sein`,
  mustBeBetween: (startDate, endDate) => `Muss in dieser Zeitspanne liegen ${startDate} - ${endDate}`,
  dateIsDisabled: 'Datum nicht wählbar',
  previous: 'Vorheriges',
  next: 'Nächstes',
  typeInDate: 'Datum eingeben',
  pickDateFromCalendar: 'Datum vom Kalender auswählen',
  close: 'Schliessen'
};
var _default = de;
exports.default = _default;
//# sourceMappingURL=de.js.map