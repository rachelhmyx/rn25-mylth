import React, { useState } from "react";

interface Props {}

function SimpleForm(props: Props) {
  //Khởi tạo State: Dùng State để quản lí Form:
  const [text, setText] = useState("1a");

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Sử dụng lệnh trên để khi thực hiện event onSubmit thì trang sẽ ko bị load lại.
    console.log("Submit");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
    //Để lấy giá trị trong các kiểu input lưu giá trị vào thuộc tính value thì dùng onChange/event.target.value.
  };
   //event ở đây đóng  vai trò như một param, và trong TypeScript yêu cầu phải định dạng kiểu cho param đó. TRong dấu ngoặc có thể truyền đc nhiều param.
  const handleOnChange2 = (event: any) => {
    console.log(event.target.checked);
    //Để lấy giá trị trong các kiểu input lưu giá trị vào thuộc tính checked (checkbox, radio) thì dùng onChange/event.target.checked.
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        {/* Giá trị nhập vào sẽ lưu vào thuộc tính Value */}
        <input type="text" onChange={handleOnChange} value={text || "abc"} />
        <input type="text" onChange={handleOnChange} value={text} onBlur={()=>console.log(1)}/>
        {/* Sự kiện onBlur sẽ chạy khi out focus khỏi ô input */}


        <input type="password" />
        <input type="email" />

        {/* Giá trị nhập vào sẽ lưu vào thuộc tính Checked */}
        <input type="checkbox" onChange={handleOnChange2} checked={true} />
        <input type="checkbox" onChange={handleOnChange2} />
        <input type="checkbox" onChange={handleOnChange2} />

        <input type="radio" onChange={handleOnChange2} />
        <input type="radio" onChange={handleOnChange2} />

        <input type="submit" />
        {/* Khi nhấn submit thông tin thì trang sẽ đc load lại và việc load lại trang sẽ gọi là event onSubmit */}
      </form>
    </>
  );
}

export default SimpleForm;
