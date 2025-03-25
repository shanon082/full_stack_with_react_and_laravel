import { Link } from "react-router-dom";

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  
  const {setUser, setToken} = useStateContext();

  const Submit = (ev) =>{
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    axiosClient.post('/login', payload).then((data) => {
      setUser(data.user);
      setToken(data.token);
    }).catch((err) => {
      const {response} = err;
      if (response && response.status === 400) {
        alert('User already exists');
        console.log(response.data.error);
      }
    });
  }
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gradient-to-br from-blue-900 to-black">
      <div className="p-5 flex flex-col sm:w-full md:w-1/2 lg:w-1/3 rounded-md bg-white">
        <h1 className="text-4xl text-center text-black mb-4">Login</h1>
        <form onSubmit={Submit} className="flex flex-col">
          <label htmlFor="username" className="text-black text-2xl mb-2">Email:</label>
          <input ref={emailRef} type="text" placeholder="Enter UserName" required className="border-blue-600 mb-3 rounded-md px-2 py-2 outline-none border-2" />
          <label htmlFor="Password" className="text-black text-2xl mb-2">password:</label>
          <input ref={passwordRef} type="password" required placeholder="Enter Password" className="border-blue-600 mb-3 rounded-md px-2 py-2 outline-none border-2"/>
          <button className="border-2 border-blue-600 mb-2 rounded-md py-2 text-2xl bg-blue-700 text-white">Login</button>
        </form>
        <p className="text-end mt-2 text-pretty">Not Registered? <Link to='/register' className="text-blue-800 text-ellipsis">Register</Link></p>
      </div>
    </div>
  )
}

export default Login;