import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        item: [
            {
                title: 'Pages',
                list: [
                    {
                        title: "Dashboard",
                        path: "/dashboard",
                       
                    },
                    {
                        title: "Users",
                        path: "/dashboard/users",
                       
                    },
                    {
                        title: "Products",
                        path: "/dashboard/products",
                     
                    },
                ],
            },
            {
                title: 'Analytics',
                list: [
                    {
                        title: "Dashboard",
                        path: "/dashboard",
                        
                    },
                    {
                        title: "Users",
                        path: "/dashboard/users",
                       
                    },
                    {
                        title: "Products",
                        path: "/dashboard/products",
                       
                    },
                ]
            },
        ]
})
}