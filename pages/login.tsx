import React, { FunctionComponent } from "react";

const Login: FunctionComponent = () => {
  
  // Login
  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Authenticate user here
  };

  return (
	<html lang="en">
	<head>
		<meta charset="utf-8"></meta>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
		<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		<link href="https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css" rel="stylesheet"></link>
	</head>
	<body class="h-screen overflow-hidden flex items-center justify-center" styles="background: #edf2f7;">
	<div styles="height: 500px">
		<div class="fixed pin flex items-center">
			<div class="fixed pin bg-black opacity-75 z-10"></div>

			<div class="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
				<div class="shadow-lg bg-white rounded-lg p-8">
					<div class="flex justify-end mb-6">
						<button>
							<span class="mr-2">Close</span>
							<span>
								<i class="fa fa-times"></i>
							</span>
						</button>
					</div>

					<h1 class="text-center text-2xl text-green-dark">Login</h1>

					<form class="pt-6 pb-2 my-2">
						<div class="mb-4">
							<label class="block text-sm font-bold mb-2" for="email">
								Email Address
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Email Address"></input>
						</div>
						<div class="mb-6">
							<label class="block text-sm font-bold mb-2" for="password">
								Password
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password"></input>
						</div>
						<div class="block md:flex items-center justify-between">
							<div>
								<button class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded border-b-4 border-green-darkest" type="button">
									Sign In
								</button>
							</div>

							<div class="mt-4 md:mt-0">
								<a href="#" class="text-green no-underline">Forget Password?</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	</body>
	</html>
  );
};

export default Login;
