import { Button, Table } from "antd";
import React from "react";
import Navbar from "../../../../common/components/SideBar";
import style from "../Films/style.module.css";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
function Films() {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const dataSource = [
    // {
    //     maPhim: 1234,
    //     hinhAnh: "",
    //     tenPhim:"abc",
    //     moTa:""

    // },
    // {
    //     maPhim: 2234,
    //     hinhAnh: "",
    //     tenPhim:"bbc",
    //     moTa:""

    // }
  ];
  
  const columns  = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      sorter: true,
      reder: (maPhim) => `${maPhim.first} ${maPhim.last}`,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      sorter: true,
      reder: (tenPhim) => `${tenPhim.first} ${tenPhim.last}`,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Hành Động",
      dataIndex: "hanhDong",
      key: "hanhDong",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <h2>Quản lý phim</h2>
            <Button type="primary" className={style.add}>
              Thêm Phim
            </Button>
            <Search placeholder="input search text" enterButton />
          </div>
          <div className={style.main}>
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Films;
