import Image from "next/image";

export default function LogoCloud() {
  const schools = [
    {
      name:"Altos del Saber",
      src:"/images/school1.png",
    },
    {
      name: "Reform",
      src: "/images/school2.png",
    },
    {
      name: "Turple",
      src: "/images/school3.png",
    },
    {
      name: "SavvyCal",
      src: "/images/school4.png",
    },
    {
      name: "Statamic",
      src: "/images/school5.png",
    },
  ];
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Con la confianza de las principales instituciones educativas de todo
          el mundo
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {schools.map((item, i) => {
            return (
              <Image
                key={i}
                alt={item.name}
                src={item.src}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
