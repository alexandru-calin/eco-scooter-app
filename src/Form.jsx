const Form = ({ handleLocationAdd, handleToggleForm }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const { lat, lng, text, scooters } = e.target;
        const newLocation = {
          lat: Number(lat.value),
          lng: Number(lng.value),
          title: text.value,
          scooters: Number(scooters.value),
        };

        handleLocationAdd(JSON.stringify(newLocation));
        handleToggleForm();
      }}
    >
      <label htmlFor="text">Name</label>
      <input type="text" id="text" name="text" />
      <label htmlFor="lat">Lat</label>
      <input type="number" id="lat" name="lat" />
      <label htmlFor="lng">Lng</label>
      <input type="number" id="lng" name="lng" />
      <label htmlFor="text">Scooters</label>
      <input type="number" id="scooters" name="scooters" />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
