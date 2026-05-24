import Image from "next/image";
import { Photo } from "../types/Photo";

type Props = {
    photo: Photo;
    onClick?: () => void;
}

export const Photo_Item = ({ photo, onClick }: Props) => {
    return (
        <div
            className="w-full h-full flex justify-center items-center cursor-alias hover:opacity-80 transition-opacity"
            onClick={onClick}
        >
            <Image
                src={photo.url}
                alt={`Foto ${photo.id}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover mb-4"
                onClick={onClick}
            />
        </div>
    );
}