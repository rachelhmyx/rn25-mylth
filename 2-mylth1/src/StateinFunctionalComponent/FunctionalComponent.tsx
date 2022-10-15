import React from 'react'
import { useState } from 'react'

interface Props  {}


function ReactHook(props: Props) {
    //REACT HOOK: State trong functional component.
  const [nameState, setNameState] = useState(0);
  const handleOnClick = () => {
    setNameState(nameState + 1);
  }

  //Cú pháp khai báo State:
  //nameState: tên của state
  //setNameState: function thay đổi giá trị của state
  //chữ "true" trong useState là giá trị khởi tạo ban đầu của State.
  return (
    <>
    {nameState}
    <button onClick = {handleOnClick}>button</button>

    </>
  )
}

export default ReactHook