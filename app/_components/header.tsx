"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import { MenuIcon } from "lucide-react";

const Header = () => {

    return (
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/img/Logo.png" alt='FSW Barber' height={22} width={120} />
                <Sheet>
                    <SheetTrigger>
                        <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                            <MenuIcon size={16} />
                        </Button>

                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>


            </CardContent>
        </Card>
    );
}

export default Header;