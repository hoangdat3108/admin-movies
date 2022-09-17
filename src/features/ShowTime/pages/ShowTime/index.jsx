import { Button, DatePicker, Input, Menu, Switch } from "antd";
import React from "react";
import Navbar from "../../../../common/components/SideBar";
import style from "../ShowTime/style.module.css";

function ShowTime() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.content}>
          <h2>Thêm Lịch chiếu</h2>
          <div className={style.main}>
            <div className={style.left}>
              <h3>Hệ thống rạp:</h3>
              <h3>Cụm rạp:</h3>
              <h3>Ngày giờ chiếu:</h3>
              <h3>Giá vé:</h3>
              <h3>Chức năng:</h3>
            </div>
            <div className={style.right}>
              <Input />
              <Input />
              <DatePicker style={{marginLeft: 8, display:"block", width: 100}}/>
              <Input style={{ width: 100 }} />
              <Button type='primary'>Tạo lịch chiếu</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTime;