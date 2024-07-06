import cardPaymentSystem from '../cardvalidation/cardtype';

test.each([
  ['mir for 2********', '2200123456789010', 'mir'],
  ['visa for 4********', '4000001234588889', 'visa'],
  ['master for 5********', '5467929858067895', 'master'],
  ['discover for 6********', '6011000990139424', 'discover'],
  ['amex for 34********', '345455987654321', 'amex'],
  ['diners_club for 30********', '30163226829814', 'diners'],
  ['diners_club for 36********', '36163226829814', 'diners'],
  ['diners_club for 38********', '38163226829814', 'diners'],
  ['no-found for 1********', '1712349876543219', 'no-found'],
  ['no-found for 7********', '7712349876543219', 'no-found'],
  ['no-found for 8********', '8712349876543219', 'no-found'],
  ['no-found for 9*********', '975709876543219', 'no-found'],
])('it should be %s', (_, input, expected) => {
  expect(cardPaymentSystem(input)).toBe(expected);
});