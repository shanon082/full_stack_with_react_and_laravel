import { Link } from "react-router-dom";

const Register = () => {
  const Submit = (ev) => {
    ev.preventDefault();
  }
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gradient-to-br from-blue-900 to-black">
      <div className="p-5 flex flex-col w-200 rounded-md bg-white">
        <h1 className="text-4xl text-center text-black mb-4">Create an account</h1>
        <form onSubmit={Submit} className="flex flex-col">
          <label htmlFor="username" className="text-black text-2xl mb-2">UserName:</label>
          <input type="text" placeholder="Enter UserName" required name="username" className="border-blue-600 mb-3 rounded-md px-2 py-2 outline-none border-2" />
          <label htmlFor="Password" className="text-black text-2xl mb-2">password:</label>
          <input type="password" name="password" required placeholder="Enter Password" className="border-blue-600 mb-3 rounded-md px-2 py-2 outline-none border-2"/>
          <button className="border-2 border-blue-600 mb-2 rounded-md py-2 text-2xl bg-blue-700 text-white">Register</button>
        </form>
        <p className="text-end mt-2 text-pretty">Already have account? <Link to='/login' className="text-blue-800 text-ellipsis">login</Link></p>
      </div>
    </div>
  )
}

export default Register;