import React, { useState } from 'react';

const DropdownList = ({ data, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block text-left w-full my-4 ${className}`}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex w-full justify-between items-center rounded-full bg-white px-4 py-3 text-md font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-50 transition"
        >
          {data.title}
          <svg
            className={`ml-2 h-5 w-5 transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 w-full rounded-3xl bg-white shadow-lg ring-1 ring-black/5 p-4">
          <div
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownList;
