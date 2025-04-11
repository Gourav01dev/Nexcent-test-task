import Image from "next/image";

interface CommonProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

const Common = ({
  imageSrc,
  title,
  description,
  buttonText,
  reverse = false,
}: CommonProps) => {
  return (
    <section className="py-4 px-12 bg-white">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 flex justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={147}
            height={109}
            className="w-full h-auto max-w-sm md:max-w-full"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Common;
