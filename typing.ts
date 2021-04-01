let user: string = "Hello World!";
let userId: number = 0;
let isLoggedIn: boolean = false;
let lastLoggedIn: Date = new Date();

let products: Array<string | number | boolean> = [
  "pen",
  "pencil",
  12344,
  "book",
  false,
];
products.push("ramsesh");

interface IUserReference {
  username: string | number | boolean;
  id: number | string;
  isLoggedIn?: boolean;
  isTokeGenerated?: boolean;
  getLoggedInInfo?: (userid: number | string) => boolean;
  addUser?(): string;
}
const singleUser: IUserReference = {
  username: "trianing",
  id: 2,
  isLoggedIn: false,
  getLoggedInInfo: (id: IUserReference["id"]): boolean => {
    return true;
  },
};
console.log(singleUser.getLoggedInInfo("2"));

const userReference: IUserReference[] = [
  {
    username: 12345,
    id: 0,
  },
  {
    username: "b",
    id: 1,
    isTokeGenerated: true,
  },
  {
    username: "c",
    id: 2,
    isLoggedIn: true,
  },
];

const getUsername = (id: IUserReference["id"]): IUserReference["username"] => {
  const user = userReference.find((user) => user.id === id);
  return user ? user.username : "user not found";
};

console.log(getUsername(1));
console.log(getUsername("sdsd"));
console.log(getUsername(3));
console.log(getUsername(6));
