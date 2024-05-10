import { Link } from 'react-router-dom';

export default function Daftar() {
  return (
    <div className='grid h-screen w-full'>
        <div className='bg-gradient-to-br from-blue-300 to-blue-800 flex flex-col justify-center'>
            <form className='max-w-[450px] w-full mx-auto rounded-lg bg-gradient-to-br from-blue-250 to-blue-800 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Daftar</h2>
                <div className='flex flex-col text-dark py-2'>
                    <label>NISN</label>
                    <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-dark 400 py-1'>
                    <label>Username</label>
                    <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-dark 400 py-1'>
                    <label>Email</label>
                    <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' type="email" />
                </div>
                <div className='flex flex-col text-dark 400 py-1'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-dark 400 py-1'>
                    <label>Kelas</label>
                    <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' type="password" />
                </div>
                <Link to="/Login">
                    <button className='w-full my-4 py-2 bg-blue-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Daftar</button>
                </Link>
            </form>
        </div>
    </div>
  )
}
