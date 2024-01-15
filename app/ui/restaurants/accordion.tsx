'use client'

import React, { useState } from "react";
import ChevronDown from "@/public/chevron-down.svg";
import Image from "next/image";

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
    <div data-testid="accordion">
      <h2 id="accordion-flush-heading-1" className="px-2.5">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-b-neutral-950 gap-3"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
          onClick={openAccordion}
          data-testid="accordion-button"
        >
          <span className="text-slate-950 ml-3" data-testid="accordion-title">{ title }</span>
          <Image
            src={ChevronDown}
            alt="Open accordion"
            height={10}
            width={16}
            className={`transition ease-in-out w-3 h-3 ${isOpen ? 'rotate-0' : '-rotate-90'} shrink-0 text-slate-950 mr-3`}
          ></Image>
        </button>
      </h2>

      <div id="accordion-flush-body-1" className={isOpen ? 'block' : 'hidden'} aria-labelledby="accordion-flush-heading-1" data-testid="accordion-body">
        <div className="mt-6 grid grid-cols-2 gap-8">
          { children }
        </div>
      </div>
    </div>
  );
}
