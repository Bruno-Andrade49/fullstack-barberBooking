import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import BarberShopInfo from "./_components/barber-shop-info"
import ServiceItem from "./_components/service-item"

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
        },
        include: {
            services: true
        }
    })

    if (!barbershop) {
        // TODO: redirect to 
        return null
    }

    return (
        <div>

            <BarberShopInfo barbershop={barbershop} />

            <div className="px-5 flex flex-col gap-4 py-6">
                {
                    barbershop.services.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                    ))
                }
            </div>
        </div>
    )
}

export default BarberDetailsPage;