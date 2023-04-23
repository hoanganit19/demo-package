const date = "2023-04-23 09:00:00";

const fromNow = moment(date).endOf("day").fromNow();

console.log(fromNow);
