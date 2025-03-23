import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/Contextprovider';

const DefaultLayout = () => {
  const {user, token} = useStateContext();
  if(!token){
    return <Navigate to='/login'/>
  }
  const onLogout = (ev) =>{
    ev.preventDefault();
  }
  return (
    <div>
        <div>
          <header>
            <div>
              Header
            </div>
            <div>
              {user.name}
              <a href="#" onClick={onLogout}>Logout</a>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
    </div>
  )
}

export default DefaultLayout;