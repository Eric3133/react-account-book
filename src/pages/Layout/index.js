import { Outlet } from 'react-router-dom';
import { Button } from 'antd-mobile';
const Layout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <h1>Layout</h1>
      <Button color= 'primary'>test global</Button>
      <div className= "purple-theme">
        <Button color= 'primary'>test global</Button>
      </div>
    </div>
  );
}
export default Layout;
