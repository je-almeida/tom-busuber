"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  items: FaqItem[];
  primaryColor: string;
  $bgColor?: string;
}

export default function Faq({ items, primaryColor, $bgColor }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: $bgColor || "#f9fafb",
        backgroundImage: "url(/img/bg-pattern.png)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Title */}
          <div className="lg:col-span-4 flex items-start">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Perguntas Frequentes{" "}
              <span style={{ color: primaryColor }}>(FAQ)</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
