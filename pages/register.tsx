import React, { FunctionComponent, useState } from "react";

const Login: FunctionComponent = () => {
  const [state, setstate] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleRegister = () => {
    // Authenticate user here
    console.log('Data ', state);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>, stateKey: string) => {
    setstate({...state, [stateKey]: e.target.value});
  };

  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Register
              </h1>
              <p className="text-gray-400 dark:text-gray-400">
                We will send you an email for verification purpose.
              </p>
            </div>
            <div className="m-7">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e, 'name')}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@xxx.com"
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e, 'email')}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+91 98XXXXXXXX"
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e, 'phone')}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Register
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
