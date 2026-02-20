import React from 'react';

interface NoteEditorProps {
  noteTitle: string;
  noteContent: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  noteTitle,
  noteContent,
  onTitleChange,
  onContentChange,
}) => {
  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Note title"
        value={noteTitle}
        onChange={(e) => onTitleChange(e.target.value)}
        className="note-title-input"
      />
      <textarea
        placeholder="Write your note in Markdown..."
        value={noteContent}
        onChange={(e) => onContentChange(e.target.value)}
        className="note-content-input"
      />
    </div>
  );
};
