'use client';


// components/ChapterGrid.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Chapters.css';

const chapters = [
  { id: 1, title: 'Chapter 01', subtitle: 'Introduction' },
  { id: 2, title: 'Chapter 02', subtitle: 'Literary Insights' },
  { id: 3, title: 'Chapter 03', subtitle: 'Character Development' },
  { id: 4, title: 'Chapter 04', subtitle: 'Plot Twists' },
  { id: 5, title: 'Chapter 05', subtitle: 'World Building' },
  { id: 6, title: 'Chapter 06', subtitle: 'Conflict Resolution' },
  { id: 7, title: 'Chapter 07', subtitle: 'Literary Jatra' },
  { id: 8, title: 'Chapter 08', subtitle: 'Climax' },
  { id: 9, title: 'Chapter 09', subtitle: 'Conclusion' },
];

const ChapterGrid = () => {
    const [visibleChapters, setVisibleChapters] = useState([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleChapters((prevVisible) => [...prevVisible, entry.target.id]);
            } else {
              setVisibleChapters((prevVisible) => prevVisible.filter(id => id !== entry.target.id));
            }
          });
        },
        { threshold: 0.2 } // Adjust to trigger at 20% visibility
      );
  
      const elements = document.querySelectorAll('.chapter-box');
      elements.forEach((el) => observer.observe(el));
  
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, []);
  
    return (
        <div id='chapters' className='chapters-container'>
            <div className='title'>
                <span>CHAPTERS</span>
                <h2>Quick Summary of The Book Chapters</h2>
                <img className='divider' src='divider.svg'/>
            </div>
            <div className='grid'>
                  {chapters.map((chapter, index) => (
                    <motion.div
                      key={chapter.id}
                      id={`chapter-${chapter.id}`}
                      className={`chapter-box chapterBox`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        visibleChapters.includes(`chapter-${chapter.id}`)
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 50 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -10, 
                        transition: { duration: 0.01 }
                      }}
                    >
                      <h3>{chapter.title}</h3>
                      <h2>{chapter.subtitle}</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.</p>
                    </motion.div>
                  ))}
            </div>
        </div>
    );
};

export default ChapterGrid;
