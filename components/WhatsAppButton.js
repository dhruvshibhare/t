import React from 'react';

const phoneNumber = 'YOUR_PHONE_NUMBER'; // e.g. 919999999999
const message = encodeURIComponent('Hi, I want to get a website developed!');

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${91 + 9329990175}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.11 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.85-.58-5.42-1.58l-.39-.24-4.23 1.4 1.4-4.23-.24-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.74 4.06.66.23 1.18.37 1.58.47.66.17 1.26.15 1.73.09.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
      </svg>
    </a>
  );
}
