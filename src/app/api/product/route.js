import { NextResponse } from "next/server";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
} from "react-icons/md";

export async function GET() {
    return NextResponse.json({
        products: [
            {
                title: 'Pages',
                list: [
                    {
                        title: "Dashboard",
                        path: "/dashboard",
                        icon: <MdDashboard />
                    },
                    {
                        title: "Users",
                        path: "/dashboard/users",
                        icon: <MdSupervisedUserCircle />
                    },
                    {
                        title: "Products",
                        path: "/dashboard/products",
                        icon: <MdShoppingBag />
                    },
                ],
            },
            {
                title: 'Analytics',
                list: [
                    {
                        title: "Dashboard",
                        path: "/dashboard",
                        icon: <MdDashboard />
                    },
                    {
                        title: "Users",
                        path: "/dashboard/users",
                        icon: <MdSupervisedUserCircle />
                    },
                    {
                        title: "Products",
                        path: "/dashboard/products",
                        icon: <MdShoppingBag />
                    },
                ]
            },
        ]
})
}