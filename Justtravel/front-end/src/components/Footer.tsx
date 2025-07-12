import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-200 py-6 px-4 text-center shadow-xl w-full border-t-2 border-blue-300 mt-6">
      <div className="space-y-2">
        <p>
          <a
            href="https://github.com/Jcmoreiraa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-800 hover:underline"
          >
            @Jcmoreiraa
          </a>
        </p>
        <p className="text-gray-800 font-semibold">🚀 I love Ruby on Rails</p>
        <p className="text-gray-700 font-medium">🎓 TITAN UFBA</p>
      </div>
    </footer>
  );
}
