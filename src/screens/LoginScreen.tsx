import React from 'react';
import Logo from '../components/Logo';
import Input from '../components/Input';
import loginBackgroundImage from '../assets/img/bg-login-screen.jpg';
import Button from '../components/Button';

function LoginScreen() {
  return (
    <article className="flex h-screen flex-col md:flex-row">
      <section className="flex flex-col md:h-full md:justify-center w-full md:w-2/6 p-5 lg:p-12 bg-white">
        <header>
          <Logo />
          <div className="mt-10 lg:mt-16">
            <h1 className="text-xl lg:text-2xl font-medium">
              The place where your running performance matters. Isn&apos;t that great? 🔥
            </h1>
            <span className="block mt-2 text-sm text-gray-400">Welcome Back. Please login to your account.</span>
          </div>
        </header>

        <form className="mt-6 md:mt-10">
          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="example@example.com"
            requiredField
            autoFillOff
          />
          <Input type="password" name="password" label="Password" placeholder="******" requiredField />

          <div className="mt-10">
            <Button type="primary" optionalClass="mr-3">
              Login
            </Button>
            <Button type="secondary">Sign Up</Button>
          </div>
        </form>
      </section>

      <aside className="bg-white p-5 md:p-0 w-full md:w-4/6 relative">
        <figure className="w-full h-full">
          <img
            src={loginBackgroundImage}
            className="rounded-md md:rounded-none object-cover w-full h-full"
            alt="Get started with spcrun."
          />
          <figcaption className="absolute bottom-8 right-8 md:bottom-4 md:right-4 text-xs text-gray-300">
            Unsplash @davidmarcu
          </figcaption>
        </figure>
      </aside>
    </article>
  );
}

export default LoginScreen;
