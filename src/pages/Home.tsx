import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800 p-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <div className="text-lg font-bold">My App</div>
        </nav>
      </header>

      <main className="container mx-auto flex-grow p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-800 p-4 text-center text-white">
        © 2023 My App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
