"use client";

import React, { useEffect, useState } from "react";

import {
    Users,
    Rocket,
    CreditCard,
    BriefcaseBusiness
} from "lucide-react";


const AdminPage = () => {


    const [users, setUsers] = useState([]);
    const [startups, setStartups] = useState([]);
    const [payments, setPayments] = useState([]);
    const [opportunities, setOpportunities] = useState([]);




    useEffect(() => {


        fetch("http://localhost:3005/api/admin/users")
            .then(res => res.json())
            .then(data => setUsers(data));



        fetch("http://localhost:3005/api/admin/startups")
            .then(res => res.json())
            .then(data => setStartups(data));



        fetch("http://localhost:3005/api/payments")
            .then(res => res.json())
            .then(data => setPayments(data));



        fetch("http://localhost:3005/api/opportunities")
            .then(res => res.json())
            .then(data => {


                if (data.opportunities) {
                    setOpportunities(data.opportunities)
                }
                else {
                    setOpportunities(data)
                }


            });



    }, []);







    const cards = [

        {
            title: "Total Users",
            value: users.length,
            icon: Users
        },


        {
            title: "Startups",
            value: startups.length,
            icon: Rocket
        },


        {
            title: "Opportunities",
            value: opportunities.length,
            icon: BriefcaseBusiness
        },


        {
            title: "Revenue",
            value:
                "$" + payments
                    .reduce(
                        (sum, item) =>
                            sum + Number(item.amount || 0),
                        0
                    ),

            icon: CreditCard
        }

    ];





    return (

        <div className="
        min-h-screen
        bg-slate-950
        p-6
        text-white
        ">


            <h1 className="
            text-3xl
            font-bold
            mb-8
            ">
                Admin Dashboard
            </h1>





            <div className="
            grid
            gap-5
            md:grid-cols-4
            ">


                {
                    cards.map(card => {


                        const Icon = card.icon;


                        return (

                            <div
                                key={card.title}
                                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                "
                            >


                                <Icon
                                    size={35}
                                    className="text-blue-400 mb-4"
                                />


                                <p className="text-slate-400">

                                    {card.title}

                                </p>


                                <h2 className="
                    mt-2
                    text-3xl
                    font-bold
                    ">

                                    {card.value}

                                </h2>



                            </div>

                        )


                    })
                }


            </div>





        </div>

    );
};


export default AdminPage;