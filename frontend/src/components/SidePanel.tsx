import React from 'react';

export default function SidePanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="panel"
      style={{
        margin: '0 16px 16px',
        position: 'sticky',
        top: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {children}
    </div>
  );
}
