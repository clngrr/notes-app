import React from 'react';

interface SidebarProps {
  onNewNote: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNewNote }) => {
  return (
    <div className="sidebar">
      <h1>Notes</h1>
      <button onClick={onNewNote} className="btn-new-note">
        + New Note
      </button>
      <div className="notes-list">
        {/* Notes will appear here */}
      </div>
    </div>
  );
};
