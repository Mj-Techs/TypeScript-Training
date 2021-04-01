const userInformation: Record<
  string,
  string | number | boolean | Array<string>
> = {
  username: "stark",
  email: "a@gmail.com",
  isLoggedIn: true,
  id: 5,
  degree: ["btech,Mtech"],
};

const dataFromApi: unknown = {
  //if we completely don't know about what kind of data we'll get then in that case we use unknown type;
  name: "asasd",
};
