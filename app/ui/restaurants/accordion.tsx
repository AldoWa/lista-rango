'use client'

import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
export function Accordion({ title, children }: Readonly<AccordionProps>) {
  const [isOpen, setIsOpen] = useState(false);

  function openAccordion() {
    setIsOpen(opened => !opened)
  }

  return (
    <div>
      <h2 id="accordion-flush-heading-1" className="px-2.5">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-b-neutral-950 gap-3"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
          onClick={openAccordion}
        >
          <span className="text-slate-950 ml-3">{ title }</span>
          <svg
            className={`transition ease-in-out w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-90'} shrink-0 text-slate-950 mr-3`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>

      <div id="accordion-flush-body-1" className={isOpen ? 'block' : 'hidden'} aria-labelledby="accordion-flush-heading-1">
        <div className="mt-6">
          { children }
        </div>
      </div>
    </div>
  );
}
