import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-60 w-72">
        {/* Image component updated to crop and hide part of the image */}
        <Image
          alt="Empty"
          fill
          src="/empty.png"
          objectFit="cover" // This will cover the area of the div completely
          objectPosition="top" // This positions the image to the top, hiding the bottom part
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
