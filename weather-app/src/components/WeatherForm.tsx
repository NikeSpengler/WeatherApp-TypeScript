import React, { useCallback } from "react";

const WeatherForm: React.FC<{ onSubmit: (city: string) => void }> = ({ onSubmit }) => {
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState("");

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value);
    },
    []
  );

  const onSubmitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!city) {
        setError("Please enter a city");
      } else {
        onSubmit(city);
      }
    },
    [city, onSubmit]
  );

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={city} onChange={onChange} />
      {error && <p>Error: {error}</p>}
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;