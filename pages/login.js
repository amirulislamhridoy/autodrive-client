import Navbar from "../components/Navbar";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from "../hook/useToken";
import { toast } from "react-toastify";
import Image from "next/image";

const Login = () => {
    const router = useRouter()
    const [toggle, setToggle] = useState(false)
    const [email, setEmail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token, setToken] = useToken(user || gUser)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

    const formSubmit = async e => {
        e.preventDefault()
        const password = e.target.password.value
        await signInWithEmailAndPassword(email, password)
    }
    const passwordResetEmail = async (e) => {
        e.preventDefault()
        const success = await sendPasswordResetEmail(
            email
        );
        if(success){
            toast.success('Send password reset eamil')
        }
    }
    if (token) {
        router.push('/')
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <Head><title>Login</title></Head>
            <Navbar>login</Navbar>

            <div className='mx-1 xl:mx-auto max-w-7xl flex justify-center lg:justify-between items-center mt-4 sm:mt-8 lg:mt-14 xl:mt-20 2xl:mt-32 mb-3'>
                <div className='mg:w-6/12 xl:w-5/12 p-4 md:p-7 md:pt-10 border rounded-lg'>
                    <Image width='188' height='42' className='mb-2 sm:mb-7' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-autodrive-dark.png' alt='autodrive logo'></Image>
                    <h2 className='text-2xl font-semibold mb-2.5'>Welcome in Login</h2>
                    <p className='text-sm text-[#aaaaaa]'>Start your website in seconds. Don&apos;t have an account? <Link className='text-[#2c63ec] font-semibold' href='/signup' alt=''>Sign up</Link></p>
                    <form onSubmit={formSubmit} className='mt-4 lg:mt-6'>
                        <div className='lg:flex justify-between'>
                            <div>
                                <label className='' htmlFor="email">Email</label>
                                <br />
                                <input id='email' className='lg:mt-2 px-3 py-2 border border-2 rounded-lg w-full' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='user@example.com' required></input>
                            </div>
                            <div className='mt-2 lg:mt-0'>
                                <label className='' htmlFor="password">Password</label>
                                <br />
                                <input id='password' name='password' className='lg:mt-2 px-3 py-2 border border-2 rounded-lg w-full' type='password' placeholder="******" required></input>
                            </div>
                        </div>
                        <div className='flex my-6 justify-center items-center gap-x-5'>
                            <hr className='w-full'></hr>
                            <span>or</span>
                            <hr className='w-full'></hr>
                        </div>
                        <button onClick={() => signInWithGoogle()} className='w-full border rounded-lg flex px-3 py-2 hover:bg-gray-100'><Image width='20'height='20' className='w-5' src='https://freesvg.org/img/1534129544.png' alt=''></Image><span className='flex-1'>Sign in with Google</span></button>
                        <button className='w-full border rounded-lg flex px-3 py-2 hover:bg-gray-100 mt-5'><Image width='20' height='20' className='w-5' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''></Image><span className='flex-1'>Sign in with Github</span></button>
                        <div className="flex justify-between my-6">
                            <div className=''>
                                <input id='check' onChange={(e) => setToggle(e.target.checked)} className='mr-2' type='checkbox'></input>
                                <label htmlFor='check'>Remember me</label>
                            </div>
                            <Link onClick={passwordResetEmail} className='text-[#2c63ec] font-semibold' href=''>Forgot password?</Link>
                        </div>
                        {(error || gError) && <p style={{ color: 'red' }}>{(error?.code || gError?.code)}</p>}
                        <button type='submit' disabled={!toggle} className={`w-full border rounded-lg py-2 ${toggle ? 'bg-[#2c63ec] text-white' : " text-gray-400"}`}>Login in to your account</button>
                    </form>
                </div>
                <div className='hidden lg:block'>
                    <Image width='0' height='0' className="w-full" src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg' alt=''></Image>
                </div>
            </div>
        </section>
    );
};

export default Login;
// test