import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {}

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

function NetworkingExample(props: Props) {
  const formik = useFormik({
    initialValues: {
      name: "default",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      const url = "https://63528f9fa9f3f34c37416bc5.mockapi.io/api/v1/users";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
    console.log(e.target);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.errors.name ?? null}</p>
        </div>
        <input type="submit" />
      </form>
    </>
  );
}

export default NetworkingExample;
