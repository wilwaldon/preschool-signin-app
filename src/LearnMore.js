// src/LearnMore.js

import React from 'react';
import events from './eventsData'; // Adjust the import path according to your file structure


const LearnMore = ({ onNavigate }) => {
  return (
    <div className="p-4">

      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Learn More About Us</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Secure your child's preschool experience with our site's easy, safe login for mindful parenting and peace of mind.</p>
            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mockup"></img>
        </div>                
    </div>
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full dark:hidden" src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dashboard image"></img>
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create memories that bring us together.</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">We help you connect with people who share your interests. Connect with your friends and family as well as discovering new ones.</p>
          </div>
      </div>
    </section>
    </div>
    
  );
};

export default LearnMore;


