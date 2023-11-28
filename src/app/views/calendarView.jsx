const months = [
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
  "December",
];

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const today = new Date();

const daysInMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();
const firstDayOfWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  1
).getDay();

export default function CalendarView() {
  let blankdaysArray = [];
  for (let i = 1; i < firstDayOfWeek; i++) {
    blankdaysArray.push(i);
  }

  let daysArray = [];
  for (let i = 1; i < daysInMonth; i++) {
    daysArray.push(i);
  }

  return (
    <div class="bg-white py-8 px-8 min-h-screen">
      <p class="text-center text-4xl font-bold text-gray-800 mb-8 lg:text-left">
        {months[today.getMonth()] + " " + today.getFullYear()}
      </p>
        <div class="flex flex-col items-center justify-center">
          <div class="inline-grid items-center justify-start grid-cols-7">
            {days.map(renderDaysCB)}
            {blankdaysArray.map(renderBlankdaysCB)}
            {daysArray.map(renderDaysInMonthCB)}
          </div>
        </div>
      </div>
  );
  function renderDaysCB(day) {
    return (
      <p class="h-full text-sm font-medium text-gray-800 uppercase">
        {day}
      </p>
    );
  }
  function renderDaysInMonthCB(day) {
    return (
      <div class="flex items-start justify-start pt-2.5 pb-16 pl-2 pr-8 lg:pl-2 lg:pr-32 sm:pt-2.5 sm:pb-24 border border-gray-200">
        <p class="text-sm font-medium text-gray-800">{day}</p>
      </div>
    );
  }
  function renderBlankdaysCB() {
    return (
      <div></div>
    );
  }
}
