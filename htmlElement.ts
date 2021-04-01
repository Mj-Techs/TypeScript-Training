const titleElement: HTMLElement = document.getElementById("title");

if (titleElement) {
  titleElement.innerHTML = "I am Learning TypeScript";

  let count = 0;
  titleElement.onclick = () => {
    console.log("clicked-", ++count);
  };
}

interface IFormElement {
  value: string;
}
const getValue = (): void => {
  const inputElement: HTMLInputElement = document.getElementById(
    "input-name"
  ) as HTMLInputElement;
  if (inputElement) {
    console.log("value:", inputElement.value);
  }
};
