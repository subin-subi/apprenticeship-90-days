export function Card({ title, description, image, buttonLabel }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
