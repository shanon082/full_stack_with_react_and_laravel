import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/Contextprovider';

const GuestLayout = () => {
  const {token} = useStateContext();
  if(token){
    return <Navigate to={'/'}/>
  }
  return (
    <div>
        <div>
            
        </div>
        <Outlet />
    </div>
  )
}

export default GuestLayout;