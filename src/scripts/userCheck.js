function findUser(name) {
  const users = ["Hari", "Ram", "Kiran"];

  for (let user of users) {
    if (user === name) {
      return "User Found";
    }
  }

  //   users.forEach((user) => {
  //     if (user === name) {
  //       return "User Found";
  //     }
  //   });

  return "User Not Found";
}

console.log(findUser("Hari"));
