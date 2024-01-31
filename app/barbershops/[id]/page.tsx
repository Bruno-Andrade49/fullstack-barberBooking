import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import BarberShopInfo from "./_components/barber-shop-info"

interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}

const BarberDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {

    if (!params.id) {

        // TODO: redirect to 
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })

    if (!barbershop) {
        // TODO: redirect to 
        return null
    }

    return (
        <BarberShopInfo barbershop={barbershop} />
    )
}

export default BarberDetailsPage;