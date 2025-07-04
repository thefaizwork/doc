"use client"


import React from 'react';




export default function Login() {



    return (

        <div className="min-h-screen flex bg-black text-white ">


            <div className="flex-1 px-8 lg:px-12 py-8  flex flex-col md:mr-25 overflow-x-hidden">

                <header className="flex items-center justify-between mb-12">
                    <div className="text-purple-600 font-bold text-xl">DevCon</div>
                    <nav className="space-x-8">
                        <a href="#" className="hover:text-purple-500 text-lg">Home</a>
                        <a href="#" className="hover:text-purple-500 text-lg">Join</a>
                    </nav>
                </header>


                <div className="max-w-lg space-y-4 pt-6 md:pt-12 lg:ml-24">
                    <p className="uppercase text-sm font-semibold text-gray-400">Start for free</p>
                    <h1 className="text-5xl font-bold">
                        Create your account<span className="text-purple-600">.</span>
                    </h1>

                    {/* <div className="pr-4">
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={0.5}
                        enableHover={true}
                    >
                        Create new account.
                    </FuzzyText>
                    </div> */}

                    <p className="text-gray-400">
                        Already a member?{' '}
                        <a href="/login" className="text-purple-600 hover:underline">
                            Log In
                        </a>
                    </p>

                    <form className="space-y-8">

                        <div className="flex flex-col sm:flex-row gap-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full sm:w-1/2 bg-[#1E1E1E] px-6 py-4 rounded-2xl placeholder-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full sm:w-1/2 bg-[#1E1E1E] px-6 py-4 rounded-2xl placeholder-gray-500"
                            />
                        </div>


                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#1E1E1E] px-6 py-4 rounded-2xl placeholder-gray-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-[#1E1E1E] px-6 py-4 rounded-2xl placeholder-gray-500"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full bg-[#1E1E1E] px-6 py-4 rounded-2xl placeholder-gray-500"
                        />


                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="flex-1 bg-gray-700 text-white py-3 rounded-2xl hover:bg-gray-600"
                            >
                                Change Method
                            </button>
                            <button
                                type="submit"
                                className="flex-1 bg-purple-600 text-white py-3 rounded-2xl hover:bg-purple-500"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            {/* <div className="hidden md:fixed right-0 top-0 h-screen w-12 lg:w-16 md:flex items-center justify-center bg-[#070707] px-2 lg:px-4 z-50">
                <div className="transform -rotate-90 whitespace-nowrap text-gray-900 tracking-wider text-[60px] font-bold">
                    Create new account<span className="text-purple-600">.</span>
                </div>
            </div> */}

            <div className="hidden md:flex fixed right-0 top-0 h-screen w-12 lg:w-16 bg-[#070707] z-50">
                <div className="absolute md:left-[42%] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] whitespace-nowrap text-gray-900 tracking-wider text-[60px] font-bold">
                    Create new account<span className="text-purple-600">.</span>
                </div>
            </div>




        </div>







    );
}