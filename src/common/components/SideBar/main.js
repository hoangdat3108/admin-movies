import React from "react";
import { AiFillSetting, AiFillCalendar,AiOutlineUserAdd } from 'react-icons/ai'
import {BsFilm} from 'react-icons/bs'

export const SideBarData = [
    {
        title: "List Film",
        path:'/films',
        icon: <BsFilm />,
    },
    {
        title: "Add new",
        path: '/films/addnew',
        icon: <BsFilm />,
    },
    {
        title: "Edit Film",
        path: '/films/edit',
        icon: <AiFillSetting />,
    },
    {
        title: "Users",
        path: '/users',
        icon: <AiOutlineUserAdd />,
    },
    {
        title: "Show Time",
        path: '/showtime',
        icon: <AiFillCalendar />,
    }
]