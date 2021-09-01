import React from "react";

const RowBuilder = () => {
  const [label, setLabel] = React.useState("");
  const [name, setName] = React.useState("");
  const [required, setRequest] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("label:", label);
    console.log("name:", name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="label">Label</label>
        <input
          id="label"
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="required">
          <input
            name="required"
            type="checkbox"
            value={required}
            onChange={(e) => setRequest(e.target.value)}
          />
          Required
        </label>
      </div>
      <div>
        <button>Remove field</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RowBuilder;
