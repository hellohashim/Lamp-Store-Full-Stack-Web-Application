import React from 'react';
import styles from './main.module.css';
import LampCard from './LampCard';
import banner from '../../assets/lamp-cover-pic.jpg';
import { allLamps } from './LampsData';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Main({ searchTerm, onSearch }) {
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlQuery = params.get('search');
    
    // If URL has a search but our state is empty (user hit back), update state
    if (urlQuery && urlQuery !== searchTerm) {
      onSearch(urlQuery);
    } else if (!urlQuery && searchTerm) {
      // If URL is empty but we have a search (user hit back to home), clear search
      onSearch("");
    }
  }, [location.search]);

  const flatLamps = Object.values(allLamps).flat();

  // If there is a search term, filter all lamps. Otherwise, stay null.
  const searchResults = searchTerm 
    ? flatLamps.filter(lamp => lamp.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : null;

  return (
    <main className={styles.mainContainer}>
      {/* Hide banner if searching */}
      {!searchTerm && (
        <div className={styles.hero}>
          <img src={banner} alt="Banner" className={styles.banner} />
        </div>
      )}

      {searchTerm ? (
        <section className={styles.rowSection}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Results for "{searchTerm}"</h2>
            <button onClick={() => window.location.reload()} style={{border:'none', background:'none', color:'#007185', cursor:'pointer'}}>Clear Search</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {searchResults.map(lamp => (
              <LampCard key={lamp.id} {...lamp} />
            ))}
            {searchResults.length === 0 && <p>No lamps found.</p>}
          </div>
        </section>
      ) : (
        /* Normal View: Shows categories */
        Object.entries(allLamps).map(([key, items]) => (
          <section key={key} id={key} className={styles.rowSection}>
            <div className={styles.header}>
              <h2 className={styles.heading}>
                {key === 'himalayan' ? 'Himalayan Lamps' : `${key.charAt(0).toUpperCase() + key.slice(1)} Lamps`}
              </h2>
            </div>
            <div className={styles.slider}>
              {items.map(lamp => (
                <LampCard key={lamp.id} {...lamp} />
              ))}
            </div>
          </section>
        ))
      )}
    </main>
  );
}

export default Main;