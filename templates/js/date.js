// https://www.jqueryscript.net/time-clock/Lightweight-jQuery-Date-Input-Picker.html

$(".datepicker").pickadate({
  // The title label to use for the month nav buttons
  labelMonthNext: "Next month",
  labelMonthPrev: "Previous month",

  // The title label to use for the dropdown selectors
  labelMonthSelect: "Select a month",
  labelYearSelect: "Select a year",

  // Months and weekdays
  monthsFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  weekdaysFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  // Today and clear
  today: "Today",
  clear: "Clear",
  close: "Close",

  // Picker close behavior
  closeOnSelect: true,
  closeOnClear: true,

  // Update input value on select/clear
  updateInput: true,

  // The format to show on the `input` element
  format: "d mmmm, yyyy",

  // Classes
  klass: {
    table: prefix + "table",

    header: prefix + "header",

    navPrev: prefix + "nav--prev",
    navNext: prefix + "nav--next",
    navDisabled: prefix + "nav--disabled",

    month: prefix + "month",
    year: prefix + "year",

    selectMonth: prefix + "select--month",
    selectYear: prefix + "select--year",

    weekdays: prefix + "weekday",

    day: prefix + "day",
    disabled: prefix + "day--disabled",
    selected: prefix + "day--selected",
    highlighted: prefix + "day--highlighted",
    now: prefix + "day--today",
    infocus: prefix + "day--infocus",
    outfocus: prefix + "day--outfocus",

    footer: prefix + "footer",

    buttonClear: prefix + "button--clear",
    buttonToday: prefix + "button--today",
    buttonClose: prefix + "button--close"
  }
});
