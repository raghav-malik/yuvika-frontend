import React, { useState } from 'react';
import './GrievanceForm.css';
import { submitGrievance } from './api';

const moods = [
  { label: 'Angry 😡', value: 'angry' },
  { label: 'Sad 😢', value: 'sad' },
  { label: 'Annoyed 😒', value: 'annoyed' },
  { label: 'Disappointed 😔', value: 'disappointed' },
  { label: 'Other 🤔', value: 'other' },
];
const severities = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
];

function GrievanceForm({ onSubmit, setError }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mood, setMood] = useState(moods[0].value);
  const [severity, setSeverity] = useState(severities[0].value);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await submitGrievance({ title, description, mood, severity });
      if (data.success) {
        onSubmit();
      } else {
        setError(data.message || 'Submission failed');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div className="grievance-container">
      <h2>Submit a Grievance 📝</h2>
      <form onSubmit={handleSubmit} className="grievance-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="What's bothering you?"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <label>Mood:
          <select value={mood} onChange={e => setMood(e.target.value)}>
            {moods.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
        </label>
        <label>Severity:
          <select value={severity} onChange={e => setSeverity(e.target.value)}>
            {severities.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default GrievanceForm; 