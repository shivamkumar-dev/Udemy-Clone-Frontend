import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <>
      <Menu mode="horizontal" selectedKeys={[current]}>
        <Item key="/" icon={<AppstoreOutlined />}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Item>
        <Item key="/login" icon={<LoginOutlined />}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Item>
        <Item key="/register" icon={<UserAddOutlined />}>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;
