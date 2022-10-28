type user = {
  name: string;
  data: {
    position: number;
  };
};

const inputs = document.querySelectorAll("input");

console.log(inputs);

function func(): Number | String {
  return 0;
}

const test = func() as Number;

inputs.forEach((input) => {
  console.log(input as Node);
});
