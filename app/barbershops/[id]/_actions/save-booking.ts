import { db } from "../../../_lib/prisma";


interface SaveBookingParams {
    barbershopId: string,
    serviceId: string,
    userId: string,
    date: Date
}

export const saveBooking = async (params: SaveBookingParams) => {

    await db.booking.create({
        data: {
            serviceId: params.serviceId,
            userId: params.userId,
            barbershopId: params.barbershopId,
            date: params.date
        },
    })

    
} 