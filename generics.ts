interface ISimpleGenric<T, AT> {
  value: T;
  data: AT;
  json?: AT;
  isAvailable?: boolean;
  id?: number;
}

const simpleValue: ISimpleGenric<string, number> = {
  value: "asad",
  data: 123,
};

const anotherValue: ISimpleGenric<string, { value: string; id: number }> = {
  value: "asadd",
  data: { id: 12, value: "ssbaj" },
  json: { id: 14, value: "kshidh" },
};
