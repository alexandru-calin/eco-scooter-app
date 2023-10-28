import { useMap } from "react-leaflet";

const Sidebar = ({ points }) => {
  const map = useMap();
  const handleClick = (e) => {
    const { key } = e.target.dataset;
    const { lat, lng } = points[key];
    map.flyToBounds([{ lat, lng }]);
  };

  return (
    <div className="side-bar">
      <h2>Available locations</h2>
      <ul>
        {points.map(({ title }, i) => {
          return (
            <li key={i} data-key={i} onClick={handleClick}>
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
