// https://www.jqueryscript.net/time-clock/Simple-Clean-Date-Picker-Plugin-with-jQuery-Air-Datepicker.html

$("#question__form-datepicker").datepicker({
  // inline mode
  inline: false,

  // additional CSS class
  classes: "",

  // language
  language: "ru",

  // start date
  startDate: new Date(),

  // first day
  firstDay: "",

  // array of day's indexes
  weekends: [6, 0],

  // custom date format
  dateFormat: "",

  // Alternative text input. Use altFieldDateFormat for date formatting.
  altField: "",

  // Date format for alternative field.
  altFieldDateFormat: "@",

  // remove selection when clicking on selected cell
  toggleSelected: true,

  // keyboard navigation
  keyboardNav: true,

  // position
  position: "bottom left",
  offset: 12,

  // days, months or years
  view: "days",
  minView: "days",

  showOtherMonths: true,
  selectOtherMonths: true,
  moveToOtherMonthsOnSelect: true,

  showOtherYears: true,
  selectOtherYears: true,
  moveToOtherYearsOnSelect: true,

  minDate: "",
  maxDate: "",
  disableNavWhenOutOfRange: true,

  multipleDates: false, // Boolean or Number
  multipleDatesSeparator: ",",
  range: false,

  // display today button
  todayButton: true,

  // display clear button
  clearButton: false,

  // Event type
  showEvent: "focus",

  // auto close after date selection
  autoClose: false,

  // navigation
  monthsFiled: "monthsShort",
  prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
  nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
  navTitles: {
    days: "MM, <i>yyyy</i>",
    months: "yyyy",
    years: "yyyy1 - yyyy2"
  },

  // timepicker
  timepicker: false,
  onlyTimepicker: false,
  dateTimeSeparator: " ",
  timeFormat: "",
  minHours: 0,
  maxHours: 24,
  minMinutes: 0,
  maxMinutes: 59,
  hoursStep: 1,
  minutesStep: 1,

  // callback events
  onSelect: "",
  onShow: "",
  onHide: "",
  onChangeMonth: "",
  onChangeYear: "",
  onChangeDecade: "",
  onChangeView: "",
  onRenderCell: ""
});
​

// $.datepicker.setDefaults({
//   dateFormat: 'yy-mm-dd',
//   prevText: '이전 달',
//   nextText: '다음 달',
//   monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//   monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//   dayNames: ['일', '월', '화', '수', '목', '금', '토'],
//   dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//   dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
//   showMonthAfterYear: true,
//   yearSuffix: 'Year'
// });
