import { db } from "@/app/_lib/prisma"
import BarberShopInfo from "./_components/barber-shop-info"
import ServiceItem from "./_components/service-item"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}

const BarberDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {

    const session = await getServerSession(authOptions);

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
                        <ServiceItem barbershop={barbershop} key={service.id} service={service} isAuthenticated={!!session?.user} />
                    ))
                }
            </div>
        </div>
    )
}

export default BarberDetailsPage;