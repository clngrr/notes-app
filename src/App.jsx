import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { NoteEditor } from './components/NoteEditor'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNoteId, setSelectedNoteId] = useState(null)

  // Load notes from IndexedDB on mount
  useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = () => {
    // For now, use localStorage as a simple storage
    const stored = localStorage.getItem('notes')
    if (stored) {
      const parsed = JSON.parse(stored)
      setNotes(parsed)
      if (parsed.length > 0) {
        setSelectedNoteId(parsed[0].id)
      }
    }
  }

  const saveNotes = (updatedNotes) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
    setNotes(updatedNotes)
  }

  const handleNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: '',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    const updated = [newNote, ...notes]
    saveNotes(updated)
    setSelectedNoteId(newNote.id)
  }

  const handleSelectNote = (id) => {
    setSelectedNoteId(id)
  }

  const handleDeleteNote = (id) => {
    const updated = notes.filter((note) => note.id !== id)
    saveNotes(updated)
    if (selectedNoteId === id) {
      setSelectedNoteId(updated.length > 0 ? updated[0].id : null)
    }
  }

  const handleTitleChange = (title) => {
    const updated = notes.map((note) =>
      note.id === selectedNoteId
        ? { ...note, title, updatedAt: new Date().toISOString() }
        : note
    )
    saveNotes(updated)
  }

  const handleContentChange = (content) => {
    const updated = notes.map((note) =>
      note.id === selectedNoteId
        ? { ...note, content, updatedAt: new Date().toISOString() }
        : note
    )
    saveNotes(updated)
  }

  const currentNote = notes.find((note) => note.id === selectedNoteId)

  return (
    <div className="app">
      <Sidebar
        notes={notes}
        onNewNote={handleNewNote}
        onSelectNote={handleSelectNote}
        selectedNoteId={selectedNoteId}
        onDeleteNote={handleDeleteNote}
      />
      {currentNote ? (
        <NoteEditor
          noteTitle={currentNote.title}
          noteContent={currentNote.content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
      ) : (
        <div className="no-note">No notes yet. Create one!</div>
      )}
    </div>
  )
}

export default App
