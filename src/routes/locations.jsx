import MapWrapper from "../MapWrapper";
import Navbar from "../Navbar";

const Locations = ({ center, points }) => {
  return (
    <>
      <Navbar />
      <main>
        <MapWrapper center={center} points={points} />
      </main>
    </>
  );
};

export default Locations;
