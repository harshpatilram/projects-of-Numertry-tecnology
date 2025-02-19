import React, { useEffect, useState } from 'react';
import { Sun, Moon, Plus, Trash2, Edit, Save, X } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Notes state
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 6;
  const totalPages = Math.ceil(notes.length / notesPerPage);
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  // Theme effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Notes persistence effect
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString()
    };

    setNotes([newNote, ...notes]);
    setTitle('');
    setContent('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const saveEdit = (id: string) => {
    setNotes(notes.map(note => 
      note.id === id 
        ? { ...note, title, content, date: new Date().toLocaleDateString() }
        : note
    ));
    setEditingId(null);
    setTitle('');
    setContent('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Notes App</h1>

        {/* Note Form */}
        <form onSubmit={addNote} className="max-w-2xl mx-auto mb-8">
          <div className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note Title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note Content"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Note
            </button>
          </div>
        </form>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentNotes.map(note => (
            <div
              key={note.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
            >
              {editingId === note.id ? (
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => saveEdit(note.id)}
                      className="p-2 text-green-600 hover:text-green-700 dark:text-green-400"
                      aria-label="Save"
                    >
                      <Save className="w-5 h-5" />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="p-2 text-red-600 hover:text-red-700 dark:text-red-400"
                      aria-label="Cancel"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{note.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditing(note)}
                        className="p-2 text-blue-600 hover:text-blue-700 dark:text-blue-400"
                        aria-label="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="p-2 text-red-600 hover:text-red-700 dark:text-red-400"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-wrap">{note.content}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{note.date}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;