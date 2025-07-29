


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { generateRoadmap } from '../services/gptService';

// function GoalForm() {
//   const [goal, setGoal] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [typingText, setTypingText] = useState('');
//   const navigate = useNavigate();

//   const fullText = 'Enter Your Career Goal 🎯';

//   useEffect(() => {
//     let index = 0;
//     const typeInterval = setInterval(() => {
//       setTypingText(fullText.substring(0, index + 1));
//       index++;
//       if (index === fullText.length) clearInterval(typeInterval);
//     }, 100);
//     return () => clearInterval(typeInterval);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!goal) return alert('Please enter a goal!');
//     try {
//       setLoading(true);
//       const roadmap = await generateRoadmap(goal);
//       navigate('/roadmap', { state: { roadmap } });
//     } catch (error) {
//       console.error('Error generating roadmap:', error.message);
//       alert('Failed to generate roadmap. Check console for details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.stars}></div>
//       <div style={styles.formBox}>
//         <h2 style={styles.heading}>{typingText}</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={goal}
//             onChange={(e) => setGoal(e.target.value)}
//             placeholder="e.g. Frontend Developer in 6 months"
//             style={styles.input}
//           />
//           <br /><br />
//           <button type="submit" disabled={loading} style={styles.button}>
//             {loading ? 'Generating...' : '🚀 Generate Roadmap'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     position: 'relative',
//     height: '100vh',
//     background: 'linear-gradient(to top, #a0eaff, #d4f1ff)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//     fontFamily: 'Arial, sans-serif',
//   },
//   formBox: {
//     background: 'white',
//     padding: '40px',
//     borderRadius: '15px',
//     boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
//     textAlign: 'center',
//     width: '400px',
//     maxWidth: '90%',
//     zIndex: 2,
//   },
//   heading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//     fontWeight: 'bold',
//   },
//   input: {
//     padding: '12px',
//     width: '100%',
//     fontSize: '16px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     padding: '12px 24px',
//     fontSize: '16px',
//     borderRadius: '8px',
//     border: 'none',
//     background: 'linear-gradient(to right, #00c6ff, #0072ff)',
//     color: 'white',
//     cursor: 'pointer',
//     transition: 'transform 0.2s ease',
//   },
//   stars: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: '100%',
//     width: '100%',
//     backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
//     backgroundSize: '20px 20px',
//     zIndex: 1,
//     opacity: 0.4,
//     animation: 'twinkle 5s infinite',
//   },
// };

// export default GoalForm;


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateRoadmap } from '../services/gptService';

function GoalForm() {
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState('');
  const navigate = useNavigate();

  const fullText = 'Enter Your Career Goal 🎯';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypingText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typeInterval);
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!goal) return alert('Please enter a goal!');
    try {
      setLoading(true);
      const roadmap = await generateRoadmap(goal);
      navigate('/roadmap', { state: { roadmap } });
    } catch (error) {
      console.error('Error generating roadmap:', error.message);
      alert('Failed to generate roadmap. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}></div>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>{typingText}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g. Frontend Developer in 6 months"
            style={styles.input}
          />
          <br /><br />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Generating...' : '🚀 Generate Roadmap'}
          </button>
        </form>
        <br />
        <button onClick={() => navigate('/')} style={styles.backButton}>
          ⬅️ Back to Home Page
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    background: 'linear-gradient(to top, #a0eaff, #d4f1ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  formBox: {
    background: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '400px',
    maxWidth: '90%',
    zIndex: 2,
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  input: {
    padding: '12px',
    width: '100%',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '15px',
    borderRadius: '8px',
    background: '#fff',
    border: '2px solid #0072ff',
    color: '#0072ff',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 0 0px rgba(0, 114, 255, 0.6)',
  },
  stars: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    zIndex: 1,
    opacity: 0.4,
    animation: 'twinkle 5s infinite',
  },
};

// Optional: Add twinkling animation with global styles in index.css or App.css:
// @keyframes twinkle {
//   0%, 100% { opacity: 0.3; }
//   50% { opacity: 0.5; }
// }

export default GoalForm;
