import React from "react";

//Định nghĩa kiểu cho thuộc tính:
interface User {
  userName: string;
  password: string;
  gender: string;
  children: boolean;
  country: string;
}

const defaultUserData: User = {
  userName: "mylth1",
  password: "Myntv@12011998",
  gender: "female",
  children: false,
  country: "Vietnam",
};

function MultipleInputField() {
  //Khởi tạo State: state inputs có data type là User và giá trị ban đầu là defaultUserData.
  const [inputs, setInputs] = React.useState(defaultUserData);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs, //clone lại state inputs
      userName: event.target.value, //change thuộc tính userName thành giá trị mà chúng ta sẽ nhập vào ở ô input.
    });
  };

  return (
    <>
      <form>
        <div className="user_name">
          <label htmlFor="user_name">User Name</label>

          <input
            type="text"
            placeholder="Enter Username"
            name="userName"
            value={inputs.userName}
            onChange={handleOnChange}
          />
        </div>

        <div className="password">
          <label htmlFor="pass_word">Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>

        <label htmlFor="children_status">Do you have children ?</label>
        <label htmlFor="children_status">
          <input type="radio" />
          True
        </label>
        <label htmlFor="children_status">
          <input type="radio" />
          False
        </label>

        <label htmlFor="countries">Country:</label>
        <select className="country" name="country_list">
          <option value="volvo">Vietnam</option>
          <option value="saab">Japan</option>
          <option value="opel">America</option>
          <option value="audi">German</option>
        </select>
      </form>
    </>
  );
}

export default MultipleInputField;
