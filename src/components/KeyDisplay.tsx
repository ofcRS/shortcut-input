import React from 'react';

interface KeyDisplayProps {
  shortcut: string;
}

const styles = {
  container: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  placeholder: {
    color: '#666',
    fontSize: '36px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 8px',
  },
  keyContainer: {
    padding: '4px 8px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '36px',
    minWidth: '20px',
    textAlign: 'center' as const,
    color: '#333',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: 'bold',
    
  },
  separator: {
    color: '#666',
    fontSize: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 8px',
  },
};

const KeyDisplay: React.FC<KeyDisplayProps> = ({ shortcut }) => {
  if (!shortcut || shortcut === 'Press Shortcut') {
    return (
      <div style={styles.container}>
        <div style={styles.placeholder}>{shortcut}</div>
      </div>
    );
  }

  const keys = shortcut.split('+');
  
  return (
    <div style={styles.container}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          <div style={styles.keyContainer}>
            {key}
          </div>
          {index < keys.length - 1 && (
            <div style={styles.separator}>+</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default KeyDisplay; 