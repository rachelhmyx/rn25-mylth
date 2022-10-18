import React from "react";
import { useState, useEffect } from "react";

interface Props {}

function ReactHook(props: Props) {
  //REACT HOOK: State trong functional component.

  //Khai báo State:
  const [numberState, setNumberState] = useState(0);
   //Cú pháp khai báo State:
  //nameState: tên của state
  //setNameState: function thay đổi giá trị của state
  //chữ "true" trong useState là giá trị khởi tạo ban đầu của State (default value)


  //useEffect: dùng để quản lí life cycle trong Functional Component (Life Cycle Hook). useEffect được chia ra thành ba loại:
  //1:func
  //2:dependences
  useEffect(() => {
    console.log('componentDidMount') //chạy một lần sau lần first render 

    return () => {
      //componentWillUnmount : 1 lần trước khi component bị hủy
      console.log('componentWillUnmount')
    }
  }, []);

  useEffect(() => {
    console.log('componentDidupdate') //chạy n lần sau khi thay đổi state.
  })

  useEffect(() => {
    console.log('componentDidupdate numberState') 

  },[numberState])//Loại useEffect này cũng đóng vai trò như component DidUpdate, nhưng chỉ chạy khi giá trị của State đc truyền vào có thay đổi.

 

  const handleOnClick = () => {
    if (numberState >= 10) {
    } else {
      setNumberState(numberState + 1);
    }
  };
  return (
    <>
      {numberState}
      <button onClick={handleOnClick} disabled = {numberState >= 10 ? true : false}>button</button>
    </>
  );
}

export default ReactHook;
