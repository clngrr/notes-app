export const Sidebar = ({ onNewNote, notes, onSelectNote, selectedNoteId, onDeleteNote }) => {
  return (
    <div className="sidebar">
      <h1>Notes</h1>
      <button onClick={onNewNote} className="btn-new-note">
        + New Note
      </button>
      <div className="notes-list">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`note-item ${selectedNoteId === note.id ? 'active' : ''}`}
            onClick={() => onSelectNote(note.id)}
          >
            <div className="note-item-header">
              <h3>{note.title || 'Untitled'}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteNote(note.id);
                }}
                className="btn-delete"
              >
                ×
              </button>
            </div>
            <p className="note-item-time">
              {new Date(note.updatedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
