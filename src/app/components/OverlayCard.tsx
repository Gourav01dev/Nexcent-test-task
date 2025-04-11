import Image from "next/image";

type OverlayCardProps = {
  image: string;
  imageAlt: string;
  description: string;
  link: string;
};

export default function OverlayCard({
  image,
  imageAlt,
  description,
  link,
}: OverlayCardProps) {
  return (
    <div className="relative bg-gray-50 rounded-xl shadow-md">
      <Image
        src={image}
        alt={imageAlt}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 bg-white rounded-lg shadow-lg w-11/12 px-6 py-3 z-10">
        <p className="text-gray-600 font-semibold text-sm mb-2">{description}</p>
        <a href={link} className="text-green-600 text-sm font-semibold hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
}
