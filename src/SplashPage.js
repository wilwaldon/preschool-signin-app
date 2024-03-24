import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  // Mock data for articles
  const articles = [
    { id: 1, title: 'Update 1', snippet: 'This is a snippet of update 1.', thumbnail: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Update 2', snippet: 'This is a snippet of update 2.', thumbnail: 'https://images.unsplash.com/photo-1567405258710-35a7015252c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, title: 'Update 3', snippet: 'This is a snippet of update 3.', thumbnail: 'https://plus.unsplash.com/premium_photo-1681842143575-03bf1be4c11c?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, title: 'Update 4', snippet: 'This is a snippet of update 4.', thumbnail: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, title: 'Update 5', snippet: 'This is a snippet of update 5.', thumbnail: 'https://images.unsplash.com/photo-1574704530833-d47190a0d92f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, title: 'Update 6', snippet: 'This is a snippet of update 6.', thumbnail: 'https://plus.unsplash.com/premium_photo-1661591565256-41ac6b36b1df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <div className="relative bg-black text-black vh-60">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hero bg-cover bg-center flex-1 flex items-center justify-center min-h-[60vh]" style={{ backgroundImage: 'url(./hero.jpg)' }}>
          <div className="relative bg-cover bg-center h-96 items-center justify-center h-full bg-white border-l-8 border-indigo-500 p-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to KidLogger</h1>
            <p className="mb-8">Safeguarding your child's day, every day.</p>
            <Link to="/register" className="bg-transparent border border-indigo-500 hover:bg-white hover:text-blue-700 text-black font-bold py-2 px-4 rounded">
              Register
            </Link>
            <Link to="/learn-more" className="bg-transparent border hover:bg-white hover:text-blue-700 text-black font-bold py-2 px-4 rounded ml-5 border-indigo-500">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      {/* highlights */}
      <section id="highlights">
      <div className="content p-0 bg-gray-50 flex-1 text-white text-xl font-bold">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        <div className="p-8 bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 float-left mr-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>

          Online Ed</div>
        <div className="p-8 bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 float-left mr-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>

          Awards</div>
        <div className="p-8 bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 float-left mr-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
          Programs</div>
        <div className="bg-indigo-600 p-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 float-left mr-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

          Learn More</div>
        </div>
      </div>
      </section>

      {/* Latest Updates Area */}
      <div className="content p-4 bg-gray-50 flex-1">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article.id} className="flex flex-col md:flex-row md:max-w-md overflow-hidden mb-8">
              <div className="md:flex-shrink-0">
                <img src={article.thumbnail} alt="Article Thumbnail" className="h-48 w-full object-cover md:h-full md:w-48" />
              </div>
              <div className="pl-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="mt-2">{article.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
