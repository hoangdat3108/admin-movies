import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import style from "./style.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
function LogIn() {
  // const [isActive, setActive] = useState("false");
  // const [isDisable, setDisable] = useState("true");
  // const handleToggle = () => {
  //   setActive(!isActive);
  //   setDisable(!isDisable);
  // };
  const history = useHistory()
  const goToFilms = () => {
    history.push("/films");
  };
  // const schema = yup.object({
  //   adminName: yup.string().required("*Trường này bắt buộc nhập"),
  //   password: yup.string().required("*Trường này bắt buộc nhập"),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     adminName: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     const loginUser = { ...values };
  //     signIn(loginUser);
  //   },
  //   validationSchema: schema,
  // });
  // const signIn = async (values) => {
  //   if(values.adminName==="hoangdat" && values.password==="3108") {
  //     goToFilms()
  //   }
  // }
  return (
    <div className={style.background}>
      <div className={style.container}>
        {/* <Button onClick={handleToggle} className={`${!isDisable ? "disable" : ""}`}>Start</Button> */}
        <form className={style.form} onSubmit={goToFilms}>
          <h2>Login</h2>
          <Input
            className={style.input}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            size="large"
            placeholder="Admin name"
          />
          {/* {formik.touched.adminName && formik.errors.adminName && (
          <p className={style.error}>{formik.errors.adminName}</p>
        )} */}
          <Input.Password
            className={style.input}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            placeholder="Password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          {/* {formik.touched.password && formik.errors.password && (
          <p className={style.error}>{formik.errors.password}</p>
        )} */}
          <Button htmlType="submit" type="danger" >Enter</Button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
