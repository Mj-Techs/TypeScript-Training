enum Gender {
  male,
  female,
}

interface IProduct {
  name: string;
  rating: number;
  description?: string;
}

interface IStreet {
  firstLine: string;
  secondLine: string;
}

interface iAddress {
  street: IStreet;
  pincode?: number;
}

interface IOtherInfo {
  name: string;
  isQualified: boolean;
  graduatedOn: Date;
  address: iAddress;
}

interface IUserInfo {
  username: string;
  email: string;
  firstName: string;
  token: string;
  isLoggedIn: boolean;
  lastLoginTime: string;
  gender: Gender;
  otherInfo: IOtherInfo;
}

interface IApplicationState {
  categories: Array<string>;
  products: Array<IProduct>;
  userInfo: IUserInfo;
}
const applicationState: IApplicationState = {
  categories: ["Electronics", "Mobiles", ""],
  products: [
    {
      name: "name",
      rating: 5,
    },
  ],
  userInfo: {
    username: "ranjith",
    email: "ranjith@appknit.io",
    firstName: "Ranjith",
    token: "sakdjhaskdm",
    isLoggedIn: true,
    lastLoginTime: "Wed Oct 14 2020 06:45:45 GMT+0530 (India Standard Time)",
    gender: Gender.female,
    otherInfo: {
      name: "some name",
      isQualified: true,
      graduatedOn: new Date(),
      address: {
        street: {
          firstLine: "35",
          secondLine: "Some nagar",
        },
      },
    },
  },
};

const productState: Pick<IApplicationState, "categories" | "products"> = {
  // By the help of Pick we can choose selected attribute from Interface
  categories: ["laptop"],
  products: [{ name: "Lenovo", rating: 5, description: "Good one" }],
};

const userDetails: Pick<IUserInfo, "firstName" | "email"> = {
  firstName: "jdbsdb",
  email: "ej",
};

interface IDetailedProduct {
  price: number;
  sellerinfo: string;
}

//!extending
interface IDetailedProductInfo extends IProduct {
  price: number;
  sellerinfo: string;
}

const productInfo: IDetailedProductInfo | (IDetailedProduct & IProduct) = {
  name: "asas",
  rating: 5,
  description: "asad",
  price: 5,
  sellerinfo: "",
};
