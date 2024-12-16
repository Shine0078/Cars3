export default function CarCard({ car }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-xl">{car.model}</h3>
          <p className="text-gray-600">Price: {car.price}</p>
          <a href={`/cars/${car.id}`} className="text-blue-500 mt-2 block">View Details</a>
        </div>
      </div>
    );
  }
  