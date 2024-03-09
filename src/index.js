import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserOutlined, HomeOutlined, SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';

import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import ErrorPage from './routes/ErrorPage';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu } from 'antd';
import logo from './assets/logo.png'

const { Header, Footer, Sider } = Layout;

const names = ["Home", "Login", "Preferences", "About us"]
const routes = ["/", "/login", "/preferences", "/about"]
const items = [HomeOutlined, UserOutlined, SettingOutlined, InfoCircleOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `${names[index]}`,
    href: `${routes[index]}`,
  }),
);

function AppLayout() {
  return (
      <>
        <Header style={{fontFamily: "N27 Regular", backgroundColor:'#090082', position:'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={logo} alt="Logo Hololyze" style={{height:30}}></img>;
        </Header>
        <Layout style={{fontFamily: "N27 Regular", backgroundColor: '#f8f8f8'}} >
          <Sider style={{backgroundColor: 'white'}}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu style={{fontFamily: "N27 Regular"}} theme='light' mode="inline" defaultSelectedKeys={['4']} items={items} />
          </Sider>
          <Outlet />
        </Layout>
        <Footer style={{backgroundColor:'#090082', color:'#ffffff', textAlign: 'center', position: 'sticky'}}>
            Created by Eduardo & Óscar ©{new Date().getFullYear()}
        </Footer>
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
