import React from 'react';

export default function Home() {
  return (
    <main style={styles.main}>
      {/* 'Waferchip' in Familjen Grotesk italic */}
      <h1 style={styles.title}>Waferchip</h1>
    </main>
  );
}

// Simple inline styles for demonstration
const styles: { [key: string]: React.CSSProperties } = {
  main: {
    height: '100vh',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // #00E6FF to #00FF87, at 135 degrees
    background: 'linear-gradient(135deg, #00E6FF, #00FF87)',
  },
  title: {
    fontFamily: "'Familjen Grotesk', sans-serif",
    fontStyle: 'italic',
    fontSize: '3rem',
    color: '#000', // or whatever you prefer
  },
};
