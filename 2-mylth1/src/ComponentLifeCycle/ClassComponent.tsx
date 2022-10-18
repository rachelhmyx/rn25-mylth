import React, { Component } from "react";

interface Props {
  text?: string;
}

interface State {
  showComponent: boolean;
  data: number;
}

class ClassComponent extends Component<Props, State> {
  DEFAULT_MAX_LENGHT: number;
  constructor(props: Props) {
    //Gọi hàm khởi tạo của thằng cha (extends component)
    super(props);

    //Khai báo thuộc tính của component:
    this.DEFAULT_MAX_LENGHT = 10;

    //Khởi tạo State:
    this.state = {
      showComponent: true,
      data: 0,
    };

    //Binđing events:
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  componentDidMount(): void {
    //Thường đc dùng để call API--> lấy dữ liệu về để update state.
    this.setState({ data: 1 });
  } //Muốn component re-render lại thì set lại state trong phần componentDidMount.

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {} // Sau khi re-render xong, thì sẽ chạy vào componentDidUpdate. Nhớ là ko dùng setState trong componentDidUpdate vì như thế sẽ tạo ra một vòng lặp vô hạn.

  componentWillUnmount(): void {
    //Chỉ chạy một lần trước khi component bị hủy bỏ
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  } //Khi muốn chạy function ở ngoài thì nhất định phải viết bindding event ở bên trong constructor.

  //Còn hiện tại nếu ko muốn sử dụng bindding function thì hãy dùng arrow function.

  render() {
    return (
      //lần render đầu tiên: showComponent = true, data: 0
      //lần render thứ 2 , nó sẽ chạy vào componentDidMount: showComponent = true , data:1
      <div>ClassComponent</div>
    );
  }
}

export default ClassComponent;
