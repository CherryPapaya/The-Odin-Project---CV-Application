import InputField from "../InputField";

export default function ListPage({ config, onChange, person, formData }) {
  const list = formData[config.name] ?? person[config.name] ?? [];

  function handleAdd() {
    onChange(config.name, {}, list.length);
  }

  return (
    <div className="form-section">
      {list.map((item, i) => (
        <div key={i} className={`${config.name}-wrapper-${i}`}>
          {config.fields.map(field => (
            <InputField
              key={field.attribute}
              label={field.label}
              type={field.type}
              value={item?.[field.attribute] ?? ""}
              name={config.name}
              index={i}
              attribute={field.attribute}
              onChange={onChange}
            />
          ))}
        </div>
      ))}

      <button type="button" onClick={handleAdd}>
        Add {config.name}
      </button>
    </div>
  );
}