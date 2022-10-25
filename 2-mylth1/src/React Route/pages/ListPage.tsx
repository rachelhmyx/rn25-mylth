import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function ListPage() {
  const navi = useNavigate();
  const [stateListUser, setStateListUser] = useState<Array<IUser>>([]);

  useEffect(() => {
    getListUserApi();
  }, []);

  const gotoDetail = (id: string) => {
    console.log(id);
    navi("detail/" + id);
  };

  const handleDelete = (id: string) => {
    console.log("delete", id);
    const url =
      "https://63528f9fa9f3f34c37416bc5.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("delete success", json);

        getListUserApi();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getListUserApi = () => {
    const url = "https://63528f9fa9f3f34c37416bc5.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setStateListUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <table className="table table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {stateListUser?.map((user: IUser) => (
          <tr key={`item-user-${user.id}`}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => gotoDetail(user.id)}
              >
                Detail
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListPage;
