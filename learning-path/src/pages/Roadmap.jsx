


// import React, { useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// function Roadmap() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const roadmap = location.state?.roadmap || '';
//   const steps = roadmap.split('\n').filter(line => line.trim() !== '');
//   const roadmapRef = useRef();

//   const downloadPDF = () => {
//     const input = roadmapRef.current;
//     html2canvas(input).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//       pdf.save('roadmap.pdf');
//     });
//   };

//   const downloadPNG = () => {
//     const input = roadmapRef.current;
//     html2canvas(input).then(canvas => {
//       const link = document.createElement('a');
//       link.download = 'roadmap.png';
//       link.href = canvas.toDataURL('image/png');
//       link.click();
//     });
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container} ref={roadmapRef}>
//         <h1 style={styles.heading}>📍 Your Roadmap</h1>

//         {steps.length > 0 ? (
//           <table style={styles.table}>
//             <thead>
//               <tr style={styles.headerRow}>
//                 <th style={styles.stepCol}>#</th>
//                 <th style={styles.lineSeparator}></th>
//                 <th style={styles.descCol}>📝 Step Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {steps.map((step, index) => (
//                 <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                   <td style={styles.stepCol}><b>Step {index + 1}</b></td>
//                   <td style={styles.lineSeparator}></td>
//                   <td style={styles.descCol}>{step}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p style={styles.noData}>No roadmap available. Please go back and generate one.</p>
//         )}

//         <div style={styles.btnRow}>
//           <button style={styles.downloadBtn} onClick={downloadPDF}>📄 Download PDF</button>
//           <button style={styles.downloadBtn} onClick={downloadPNG}>🖼️ Download PNG</button>
//         </div>

//         <div style={{ textAlign: 'center', marginTop: '20px' }}>
//           <button
//             onClick={() => navigate('/')}
//             style={styles.generateBtn}
//           >
//             🔁 Generate New Roadmap
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // 💄 CSS-in-JS styles
// const styles = {
//   page: {
//     background: 'linear-gradient(to right, #f3e7e9, #e3eeff)',
//     minHeight: '100vh',
//     padding: '40px 20px',
//   },
//   container: {
//     background: 'white',
//     borderRadius: '16px',
//     padding: '30px',
//     maxWidth: '900px',
//     margin: '0 auto',
//     boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     color: '#6b21a8',
//     textAlign: 'center',
//     marginBottom: '25px',
//     fontWeight: 'bold',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'separate',
//     borderSpacing: '0 10px',
//   },
//   headerRow: {
//     backgroundColor: '#e9d5ff',
//     color: '#4c1d95',
//   },
//   stepCol: {
//     width: '100px',
//     padding: '10px',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     backgroundColor: '#ede9fe',
//     borderRadius: '8px 0 0 8px',
//   },
//   descCol: {
//     padding: '10px 15px',
//     backgroundColor: '#fef3c7',
//     borderRadius: '0 8px 8px 0',
//   },
//   lineSeparator: {
//     width: '2px',
//     backgroundColor: '#d9d9d9',
//   },
//   evenRow: {
//     backgroundColor: '#f3f4f6',
//   },
//   oddRow: {
//     backgroundColor: '#ffffff',
//   },
//   btnRow: {
//     marginTop: '30px',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     flexWrap: 'wrap',
//   },
//   downloadBtn: {
//     backgroundColor: '#8b5cf6',
//     color: 'white',
//     padding: '10px 20px',
//     borderRadius: '8px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
//   generateBtn: {
//     backgroundColor: '#10b981',
//     color: 'white',
//     padding: '12px 30px',
//     borderRadius: '8px',
//     fontSize: '16px',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   noData: {
//     textAlign: 'center',
//     color: '#6b7280',
//     fontSize: '18px',
//   },
// };

// export default Roadmap;



import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Roadmap() {
  const location = useLocation();
  const navigate = useNavigate();
  const roadmap = location.state?.roadmap || '';
  const steps = roadmap.split('\n').filter(line => line.trim() !== '');
  const roadmapRef = useRef();

  // Optional: PDF export if needed later
  const downloadPDF = () => {
    const input = roadmapRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('roadmap.pdf');
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container} ref={roadmapRef}>
        <h1 style={styles.heading}>📍 Your Roadmap</h1>

        {steps.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.stepCol}>#</th>
                <th style={styles.lineSeparator}></th>
                <th style={styles.descCol}>📝 Step Description</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td style={styles.stepCol}><b>Step {index + 1}</b></td>
                  <td style={styles.lineSeparator}></td>
                  <td style={styles.descCol}>{step}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.noData}>No roadmap available. Please go back and generate one.</p>
        )}

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={() => navigate('./components/GoalForm')}
            style={styles.generateBtn}
          >
            🔁 Generate New Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

// 💄 CSS-in-JS styles
const styles = {
  page: {
    background: 'linear-gradient(to right, #f3e7e9, #e3eeff)',
    minHeight: '100vh',
    padding: '40px 20px',
  },
  container: {
    background: 'white',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#6b21a8',
    textAlign: 'center',
    marginBottom: '25px',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
  },
  headerRow: {
    backgroundColor: '#e9d5ff',
    color: '#4c1d95',
  },
  stepCol: {
    width: '100px',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ede9fe',
    borderRadius: '8px 0 0 8px',
  },
  descCol: {
    padding: '10px 15px',
    backgroundColor: '#fef3c7',
    borderRadius: '0 8px 8px 0',
  },
  lineSeparator: {
    width: '2px',
    backgroundColor: '#d9d9d9',
  },
  evenRow: {
    backgroundColor: '#f3f4f6',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  generateBtn: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  noData: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '18px',
  },
};

export default Roadmap;

   
