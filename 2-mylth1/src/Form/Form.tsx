import React, { useState } from "react";

interface Props {}

function Form(props: Props) {
  const [text, setText] = useState(" ");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit");
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleOnChange} />
        <input type="password" />
        <input type="checkbox" />
        <input type="radio" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
