      import React from 'react';
import './App.css';
import './index.css';
//import rahul from "./rahul.jpeg"
import'./tailwind.config.js';
const projects = [
{
id: 1,
title: 'Project One',
desc: 'A short description of project one. Tech stack: React, Node.js',
github: 'https://tanairahul.github.io/React-project/',
live: '#',
img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60'
},
{
id: 2,
title: 'Project Two',
desc: 'A short description of project two. Tech stack: React, Express',
github: 'https://tanairahul.github.io/project1/',
live: '#',
img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60'
},
{
id: 3,
title: 'Project Three',
desc: 'A short description of project three. Tech stack: HTML, CSS, JS',
github: 'https://tanairahul.github.io/project1/',
live: '#',
img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60'
}
];


 function Dashboard() {
return (
  
<div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
{/* NAV */}
<header className="max-w-6xl mx-auto p-6 flex items-center justify-between">

<h1 className="text-2xl font-bold">Rahul Tanwar</h1>
<nav className="space-x-4 hidden md:flex">
<a href="#about" className="hover:underline">About</a>
<a href="#projects" className="hover:underline">Projects</a>
<a href="#contact" className="hover:underline">Contact</a>
<a href="#footer" className="ml-4 inline-block px-4 py-2 border rounded-lg">Resume</a>
</nav>
<button className="md:hidden p-2 border rounded-lg">Menu</button>
</header>


{/* HERO */}
<section className="bg-white">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
<div>
<h2 className="text-4xl font-extrabold mb-4">Hi — I'm Rahul</h2>
<p className="mb-4">I build clean, responsive web apps with React. I'm a BCA student and a passionate frontend developer. Looking for internships and freelance work.</p>
<div className="flex gap-3">
<a href="#projects" className="px-5 py-2 bg-black text-white rounded-lg">See projects</a>
<a href="#contact" className="px-5 py-2 border rounded-lg">Let's talk</a>
</div>
<div className="mt-6 text-sm text-gray-600">Tech: React · JavaScript · HTML · CSS · Node</div>
</div>
<div className="flex justify-center">
{/* <img src={rahul} alt="profile" className="w-72 h-72 rounded-2xl object-cover shadow-lg" /> */}
    </div>
  </div>
</section>
{/* PROJECTS */}    
<section id="projects" className="max-w-6xl mx-auto p-6">
<h2 className="text-3xl font-bold mb-6">Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{projects.map((project) => (    
  <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.desc}</p>
      <div className="flex gap-3">  
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-200 rounded-lg text-sm">GitHub</a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-200 rounded-lg text-sm">Live Demo</a>
      </div>    
    </div>
  </div>
))} 
</div>
</section>

{/* CONTACT */}     
<section id="contact" className="bg-white">
<div className="max-w-6xl mx-auto p-6 text-center">
<h2 className="text-3xl font-bold mb-4">Get in touch</h2>
<p className="mb-6">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
<a href="mailto:rahul@example.com" className="inline-block px-4 py-2 border rounded-lg">Say Hello</a>
</div>

</section>
{/* FOOTER */}
<footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
© 2024 Rahul Tanwar. All rights reserved.   
</footer>
</div>
);
}
export default Dashboard;
