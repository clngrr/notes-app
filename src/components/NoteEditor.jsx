export const NoteEditor = ({
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
