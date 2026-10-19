// Inline SVG icon set. Each accepts normal SVG props.

export const Logo = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
    <path d="M12 3.2v6.4M12 14.4v6.4M3.2 12h6.4M14.4 12h6.4" />
  </svg>
);

export const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" {...props}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
);
export const IconCaret = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}><path d="M6 9l6 6 6-6" /></svg>
);
export const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21l8.8-8a5.2 5.2 0 0 0 0-7.4z" /></svg>
);
export const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" /></svg>
);
export const IconGauge = (props) => (
  <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IconFuel = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M3 22h12M4 9h10v13H4zM14 12h3a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V8l-3-3" /></svg>
);
export const IconGear = (props) => (
  <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>
);
export const IconStar = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20l1.2-6.5L2.5 8.9 9.1 8z" /></svg>
);
export const IconFilter = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M3 5h18M6 12h12M10 19h4" /></svg>
);
export const IconPin = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
);
export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const IconTruck = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M3 13l2-6h9l4 4h3v4M3 17h18" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
);

export const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.3-.28.8-.32 1.7C3.46 9 3.46 9.4 3.46 12s0 3 .07 4.1c.04.9.2 1.4.32 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.3.12.8.28 1.7.32 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.3.28-.8.32-1.7.07-1.2.07-1.5.07-4.1s0-3-.07-4.1c-.04-.9-.2-1.4-.32-1.7a2.9 2.9 0 0 0-.69-1.06 2.9 2.9 0 0 0-1.06-.69c-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06zm0 8.14A3.2 3.2 0 1 0 8.8 12 3.2 3.2 0 0 0 12 15.2zm6.3-8.34a1.15 1.15 0 1 1-1.15-1.15 1.15 1.15 0 0 1 1.15 1.15z" /></svg>
);
export const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
);
export const IconYouTube = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.76-1.77C19.26 5.1 12 5.1 12 5.1s-7.26 0-8.84.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.76 1.77c1.58.43 8.84.43 8.84.43s7.26 0 8.84-.43a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12zM9.75 15.02V8.98L15 12z" /></svg>
);
