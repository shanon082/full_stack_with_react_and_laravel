import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div>
        <div>
            Guest
        </div>
        <Outlet />
    </div>
  )
}

export default GuestLayout;