// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Dynamic Learning Path Generator</h1>
//       <Link to="/goal-form">
//         <button style={{ padding: '10px 20px', marginTop: '20px' }}>
//           Create Your Roadmap
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default Home;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.hero}>
        {/* Left Column - Text */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.title}>🚀 Dynamic Learning Path Generator</h1>
          <p style={styles.subtitle}>
            Get a personalized roadmap based on your goals.<br />
            Learn smarter, not harder.
          </p>

          <Link to="/goal-form">
            <motion.button
              style={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Your Roadmap
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="Muslim graduation-bro.png"
            alt="Learning Illustration"
            style={styles.image}
          />
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to right, #e0f7fa, #e1f5fe)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  hero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
    gap: '40px',
    flexWrap: 'wrap',
  },
  left: {
    flex: 1,
    minWidth: '300px',
    textAlign: 'left',
    padding: '20px',
  },
  right: {
    flex: 1,
    minWidth: '300px',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#0d3b66',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '18px',
    color: '#26547c',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  button: {
    padding: '14px 28px',
    fontSize: '16px',
    backgroundColor: '#3f72af',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
    transition: '0.3s ease',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '12px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
  },
};

export default Home;
