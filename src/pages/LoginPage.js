import React from 'react';
import LoginImage from '../assets/images/login.png'

const LoginPage = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Left Panel */}
            <div className="w-1/2 flex items-center justify-center">
                <img src={LoginImage} alt="" className=''/>
            </div>

            {/* Right Panel */}
            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white rounded-lg w-full max-w-lg">
                    <div className="text-4xl font-semibold mb-10 text-blue-900">
                        Masuk ke halaman admin
                    </div>

                    <form className="space-y-5">
                        <div >
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="mt-1 block w-full bg-gray-100 px-5 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:border-primary transition duration-200"
                                placeholder="Masukkan email anda"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="mt-1 block w-full bg-gray-100 px-5 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:border-primary transition duration-200"
                                placeholder="Masukkan kata sandi anda"
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="RememberMe" className="mr-3" />
                            <label htmlFor="RememberMe" className="text-sm">
                                Ingat saya
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-semibold p-2 rounded-3xl hover:bg-blue-500 transition duration-300"
                        >
                            Masuk
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm">
                        Lupa email atau password? Hubungi{" "}
                        <a href="#" className="text-primary font-semibold">
                            super admin
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
