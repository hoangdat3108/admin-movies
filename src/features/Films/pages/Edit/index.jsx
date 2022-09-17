import { Button, DatePicker, Input, Menu, Switch } from "antd";
import React from "react";
import Navbar from "../../../../common/components/SideBar";
import style from "../Edit/style.module.css";

function Edit() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.content}>
          <h2>Sửa thông tin phim</h2>
          <div className={style.main}>
            <div className={style.left}>
              <h3>Tên phim:</h3>
              <h3>Trailer:</h3>
              <h3>Mô tả:</h3>
              <h3>Ngày khởi chiếu: </h3>
              <h3>Đang chiếu:</h3>
              <h3>Sắp chiếu:</h3>
              <h3>Hot:</h3>
              <h3>Số sao:</h3>
              <h3>Hình Ảnh:</h3>
              <h3>Tác vụ:</h3>
            </div>
            <div className={style.right}>
              <Input />
              <Input />
              <Input />
              <DatePicker style={{marginLeft: 8}}/>
              <Switch></Switch>
              <Switch></Switch>
              <Switch></Switch>
              <Input style={{ width: 100 }} />
              <Input />
              <Button type='primary'>Cập nhật</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
