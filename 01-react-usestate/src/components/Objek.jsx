import { useState, useMemo } from "react";

const Objek = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "red",
  });

  // Daftar warna yang bisa dipilih
  const colors = ["red", "blue", "green", "yellow", "purple"];

  // Hitung warna berikutnya menggunakan useMemo untuk efisiensi
  const nextColor = useMemo(() => {
    const currentIndex = colors.indexOf(car.color);
    return colors[(currentIndex + 1) % colors.length];
  }, [car.color]);

  // Fungsi untuk mengupdate warna mobil
  const updateColor = () => {
    setCar((prevCar) => ({ ...prevCar, color: nextColor }));
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-xl font-bold">My {car.brand}</h1>

      <div
        className="w-24 h-24 rounded-md transition-all duration-300"
        style={{ backgroundColor: car.color }}
      ></div>

      <p className="text-lg">
        It is a <span className="font-semibold">{car.color}</span> {car.model} from {car.year}.
      </p>

      <button
        className="px-4 py-2 rounded-md text-white font-medium"
        style={{ backgroundColor: nextColor }}
        onClick={updateColor}
      >
        Change to {nextColor}
      </button>
    </div>
  );
};

export default Objek;
