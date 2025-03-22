import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
        <div>
            <h1>default</h1>
        </div>
        <Outlet />
    </div>
  )
}

export default DefaultLayout;