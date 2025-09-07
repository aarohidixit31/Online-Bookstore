import React from "react";
import { FaBookOpen, FaRegSmileBeam, FaRocket } from "react-icons/fa";

const team = [
  {
    name: "Amit Sharma",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Visionary, entrepreneur, and lifelong book-lover. Amit started the bookstore to share his passion for reading with the world."
  },
  {
    name: "Priya Nair",
    role: "Chief Curator",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Priya selects the best new arrivals and timeless classics. Ask her for a recommendation—she loves a good book chat!"
  },
  {
    name: "Ravi Gupta",
    role: "Tech Lead",
    img: "https://randomuser.me/api/portraits/men/59.jpg",
    bio: "Ravi ensures our online experience is fast, secure, and delightful. He geeks out over both code and comics!"
  },
];

const AboutUs = () => (
  <div className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 min-h-screen pb-16">
    <div className="max-w-3xl mx-auto py-12 px-6 animate-fade-in">
      <h1 className="text-4xl font-bold mb-2 text-primary animate-slide-down tracking-tight">About Us</h1>
      <div className="flex items-center gap-2 mb-6">
        <FaBookOpen className="text-accent text-2xl animate-spin" />
        <span className="text-lg text-gray-500">Turning pages, changing lives since 2025</span>
      </div>
      <p className="mb-10 text-gray-700 text-lg animate-fade-in delay-75 leading-relaxed">
        Welcome to the Online Bookstore! We're passionate about connecting readers to their next great adventure.
        Whether you're searching for the latest bestseller, a rare classic, or the perfect gift, we deliver an unbeatable selection, thoughtful recommendations, and friendly service.
      </p>
      
      <div className="bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-xl p-6 shadow-md mb-10 animate-fade-in-up flex flex-col gap-2">
        <h2 className="text-2xl text-primary font-semibold mb-2 flex items-center gap-2">
          <FaRocket className="text-accent" /> Our Story
        </h2>
        <p className="text-gray-600">
          Born from a shared love for books, our founders created Online Bookstore to empower readers all over India and beyond.
          Every book found is a new friend made; every customer, part of our literary family.
          We believe a good book and a friendly smile can spark possibilities everywhere.
        </p>
      </div>
      
      <div className="mb-12 animate-fade-in delay-150">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-3 ring-4 ring-accent group-hover:ring-primary group-hover:scale-105 transition"
              />
              <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
              <span className="text-accent text-sm mb-1">{member.role}</span>
              <p className="text-gray-600 text-sm mb-1">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-green-50 my-8 p-6 rounded-xl animate-fade-in-up shadow-sm">
        <h2 className="text-xl font-semibold text-green-700 mb-1 flex items-center gap-2">
          <FaRegSmileBeam className="text-accent" /> What Makes Us Unique?
        </h2>
        <ul className="list-disc ml-8 text-gray-700 space-y-1 marker:text-accent/70">
          <li>Handpicked collections for every age and interest</li>
          <li>Fast, free delivery on orders over ₹1000</li>
          <li>Friendly support with human touch and easy returns</li>
          <li>Exciting seasonal discounts and online book events</li>
          <li>Active in the literary community—follow us for reviews, events, and more!</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-semibold mb-2 text-primary animate-slide-up">Contact</h2>
      <p className="text-gray-600 mb-1">
        Have questions, feedback, or just want to say hi? We’d love to hear from you!
      </p>
      <a
        href="mailto:support@onlinebookstore.com"
        className="text-accent underline hover:text-primary font-medium transition-colors"
      >
        support@onlinebookstore.com
      </a>
      <div className="flex justify-center mt-8">
        <p className="text-sm text-gray-400 text-center italic px-4 py-2 border-l-4 border-accent bg-white rounded shadow-inner">
          Thank you for being part of our story. Keep reading. 📚
        </p>
      </div>

      {/* Tailwind custom keyframes for fade-in and slide */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease both;
          }
          .animate-slide-down {
            animation: slideDown 1s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-slide-up {
            animation: slideUp 1s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          @keyframes fadeInUp {
            from {opacity: 0; transform: translateY(30px);}
            to {opacity: 1; transform: translateY(0);}
          }
          @keyframes slideDown {
            from { transform: translateY(-32px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(32px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  </div>
);

export default AboutUs;
