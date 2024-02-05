import { db } from "@/app/_lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters"
import GoogleProvder from "next-auth/providers/google"

const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(db) as Adapter,
    providers: [GoogleProvder({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
    ],
    callbacks: {
        async session({ session, user }) {
            session.user = { ...session.user, id: user.id } as {
                id: string;
                name: string;
                email: string;
            };

            return session;
        }
    }
};

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }