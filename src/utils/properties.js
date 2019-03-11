export const isDev = process.env.NODE_ENV === 'development';
let screenWidth = window.screen.availWidth;
export const isMobile = screenWidth <= 990 && window.orientation === 0;
export const DATE = new Date();
let today = {
  year: DATE.getFullYear(),
  month: `${DATE.getMonth() + 1}`.padStart(2, '0'),
  day: `${DATE.getDate()}`.padStart(2, '0'),
};
today.todayStr = `${today.year}-${today.month}`;
today.todayFullStr = `${today.todayStr}-${today.day}`;
export const TODAY = today;
