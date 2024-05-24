import { Outlet } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBillList } from '@/store/modules/billStore';
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList(),[dispatch]);
  })
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
