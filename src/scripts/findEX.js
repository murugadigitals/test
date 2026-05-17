const users = ["Hari", "Ram", "Kiran"];

const user = users.find((u) => {
  //   return u === "Hari".;
  if (u === "Hari") {
    return u;
  }
});

console.log(user.length);
