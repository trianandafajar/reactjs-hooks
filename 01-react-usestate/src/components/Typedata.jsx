import { useState } from "react";

const Typedata = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "red",
  });

  // Fungsi untuk mengubah data mobil
  const updateCar = (brand, model, year, color) => {
    setCar({ brand, model, year, color });
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-xl font-bold">By {car.brand}</h1>
      <p className="text-lg">
        It is a <span className="font-semibold">{car.color}</span> {car.model} from {car.year}
      </p>

      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium"
          onClick={() => updateCar("Ford", "Mustang", 2020, "blue")}
        >
          Show Ford
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md font-medium"
          onClick={() => updateCar("BMW", "X5", 2022, "red")}
        >
          Show BMW
        </button>
      </div>
    </div>
  );
};

export default Typedata;
