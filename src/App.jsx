
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import ProfileImage from './assets/profile.jpg'

function App() {
  return (
    <>
      <ProfileCard
        name="John Doe"
        image={ProfileImage}
        description="Software developer with a passion for creating amazing user experiences"
      />
    </>
  );
}

export default App;
