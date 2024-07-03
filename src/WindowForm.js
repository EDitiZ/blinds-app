import React from "react";
import "./WindowForm.css";

function WindowForm({ index, detail, handleDetailChange }) {
  const colors = [
    { value: "Kuqe", label: "E Kuqe" },
    { value: "Kaltër", label: "E Kaltër" },
    { value: "Gjelbër", label: "E Gjelbër" },
    { value: "Verdhë", label: "E Verdhë" },
    { value: "Zezë", label: "E Zezë" },
    { value: "Bardhë", label: "E Bardhë" },
    { value: "Gri", label: "Gri" },
    { value: "Kafe", label: "Kafe" },
  ];

  const materials = [
    { value: "Druri", label: "Druri" },
    { value: "Alumini", label: "Alumini" },
    { value: "Vinili", label: "Vinili" },
    { value: "Pëlhura", label: "Pëlhura" },
    { value: "Bambu", label: "Bambu" },
  ];

  return (
    <div className="window-form">
      <h3>Dritarja {index + 1}</h3>
      <label>
        Gjatësia:
        <input
          type="text"
          value={detail.length}
          onChange={(e) => handleDetailChange(index, "length", e.target.value)}
        />
      </label>
      <label>
        Lartësia:
        <input
          type="text"
          value={detail.height}
          onChange={(e) => handleDetailChange(index, "height", e.target.value)}
        />
      </label>
      <label>
        Materiali:
        <select
          value={detail.material}
          onChange={(e) =>
            handleDetailChange(index, "material", e.target.value)
          }
        >
          <option value="">Zgjidh Materialin</option>
          {materials.map(material => (
            <option key={material.value} value={material.value}>
              {material.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Ngjyra:
        <select
          value={detail.color}
          onChange={(e) => handleDetailChange(index, "color", e.target.value)}
        >
          <option value="">Zgjidh Ngjyrën</option>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default WindowForm;
