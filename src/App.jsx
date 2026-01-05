// src/App.jsx
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>My Team Portfolio</h1>
      
      {/* Try sending your own data via Props */}
      <ProfileCard
        name="Student Name"
        role="Student @ CEDT"
        bio="Short description about yourself"
      />

      {/* Try reusing with different data */}
      <ProfileCard
        name="John Doe"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  );
}
export default App;