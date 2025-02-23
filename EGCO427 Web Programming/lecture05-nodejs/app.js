let i = 0;

const counter = () => {
  i++;
  console.log(i);
};

let Counter = setInterval(counter, 2000);

setTimeout(() => {
  clearInterval(Counter);
}, 10000);
