"use client"

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarberShopInfoProps {
    barbershop: Barbershop;
}

const BarberShopInfo = ({ barbershop }: BarberShopInfoProps) => {

    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    }

    return (
        <>
            <div className="h-[250px] w-full relative">
                <Button onClick={handleBackClick} variant={"outline"} size={"icon"} className="z-50 absolute top-4 left-4">
                    <ChevronLeftIcon />
                </Button>

                <Button variant={"outline"} size={"icon"} className="z-50 absolute top-4 right-4">
                    <MenuIcon />
                </Button>

                <Image
                    src={barbershop.imageUrl}
                    fill
                    alt={barbershop.name}
                    style={{
                        objectFit: "cover",
                    }}
                    className="opacity-85"
                />
            </div>

            <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="text-primary" size={18} />
                    <p className="text-sm">5,0 (899 avaliações)</p>
                </div>
            </div>
        </>
    );
}

export default BarberShopInfo;