import { useState } from 'react'
import ShortcutInput from './ShortcutInput'

type ModifierKey = 'Control' | 'Alt' | 'Shift' | 'Meta';

const modifiers: ModifierKey[] = ['Control', 'Shift', 'Alt', 'Meta'];
const initialModifiers: ModifierKey[] = ['Control', 'Shift', 'Alt'];

const App = () => {
  const [shortcut, setShortcut] = useState('');
  const [activeModifiers, setActiveModifiers] = useState<ModifierKey[]>(initialModifiers);

  const toggleModifier = (modifier: ModifierKey) => {
    setActiveModifiers(current => 
      current.includes(modifier)
        ? current.filter(m => m !== modifier)
        : [...current, modifier]
    );
  };

  const handleClear = () => {
    setShortcut('');
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '150px auto 0',
        width: '50%',
        gap: '20px',
      }}
    >
      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
      }}>
        {modifiers.map(modifier => (
          <label
            key={modifier}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: '20px',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            }}
          >
            <input
              type="checkbox"
              checked={activeModifiers.includes(modifier)}
              onChange={() => toggleModifier(modifier)}
              style={{ width: '16px', height: '16px' }}
            />
            {modifier}
          </label>
        ))}
      </div>
      {activeModifiers.length < modifiers.length && <p style={{
        fontSize: '16px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        color: '#666'
      }}>
        Note: Unselected modifier keys will be treated as regular keys in shortcuts. <br />
        For example: If 'Ctrl' is unselected, you can use 'Ctrl' by itself as a valid shortcut.
        </p>}
      <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        <ShortcutInput 
          value={shortcut} 
          modifiers={activeModifiers} 
          onChange={setShortcut}
          placeholder="Click to set shortcut"
        />
        <button
          onClick={handleClear}
          style={{
            padding: '12px 24px',
            backgroundColor: shortcut ? '#dc3545' : '#e9ecef',
            color: shortcut ? 'white' : '#6c757d',
            border: 'none',
            borderRadius: '4px',
            cursor: shortcut ? 'pointer' : 'default',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
            alignSelf: 'stretch'
          }}
          disabled={!shortcut}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default App 