const Sidebar = ({ points }) => {
  return (
    <div className="side-bar">
      <h2>Available locations</h2>
      <ul>
        {points.map(({ title }, i) => {
          return <li key={i}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
