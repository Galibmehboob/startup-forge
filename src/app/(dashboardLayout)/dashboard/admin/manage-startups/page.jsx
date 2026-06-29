"use client";

import React, { useEffect, useState } from "react";

import {
    Rocket,
    CheckCircle,
    XCircle,
    Clock
} from "lucide-react";

import { Button } from "@heroui/react";


const ManageStartups = () => {


    const [startups, setStartups] = useState([]);



    useEffect(() => {


        fetch("http://localhost:3005/api/admin/startups")
            .then(res => res.json())
            .then(data => {

                setStartups(data);

            })


    }, []);





    const updateStatus = async (id, status) => {


        const res = await fetch(

            `http://localhost:3005/api/startups/status/${id}`,

            {

                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    status
                })

            });


        const data = await res.json();



        if (data.modifiedCount) {

            setStartups(prev =>

                prev.map(item =>

                    item._id === id
                        ?
                        {
                            ...item,
                            status
                        }
                        :
                        item

                )

            )

        }


    }







    return (

        <div className="min-h-screen bg-slate-950 p-6 text-white">


            {/* Header */}

            <div className="mb-8 flex items-center gap-3">


                <Rocket
                    size={36}
                    className="text-blue-400"
                />


                <div>

                    <h1 className="text-3xl font-bold">
                        Manage Startups
                    </h1>


                    <p className="text-slate-400">
                        Review and approve startups
                    </p>


                </div>


            </div>







            <div className="
            grid
            gap-5
            md:grid-cols-2
            ">


                {
                    startups.map(startup => (


                        <div
                            key={startup._id}
                            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                "
                        >



                            <div className="flex gap-4">


                                <img
                                    src={startup.logo}
                                    className="
                        h-16
                        w-16
                        rounded-xl
                        object-cover
                        "
                                />



                                <div>


                                    <h2 className="text-xl font-bold">

                                        {startup.startup_name}

                                    </h2>


                                    <p className="text-sm text-slate-400">

                                        {startup.industry}

                                    </p>


                                </div>


                            </div>






                            <p className="mt-4 text-sm text-slate-300">

                                {startup.description}

                            </p>





                            <div className="mt-5 flex items-center justify-between">


                                <span className="text-xs text-slate-400">

                                    Founder:
                                    {" "}
                                    {startup.founder_email}

                                </span>



                                {

                                    startup.status === "active"

                                        ?

                                        <span className="flex items-center gap-1 text-green-400">

                                            <CheckCircle size={15} />

                                            Approved

                                        </span>


                                        :

                                        startup.status === "rejected"

                                            ?

                                            <span className="flex items-center gap-1 text-red-400">

                                                <XCircle size={15} />

                                                Rejected

                                            </span>


                                            :

                                            <span className="flex items-center gap-1 text-yellow-400">

                                                <Clock size={15} />

                                                Pending

                                            </span>

                                }



                            </div>







                            {
                                startup.status === "pending" &&

                                <div className="mt-5 flex gap-3">


                                    <Button

                                        color="success"

                                        className="flex-1"

                                        onPress={() =>
                                            updateStatus(
                                                startup._id,
                                                "active"
                                            )
                                        }

                                    >

                                        Approve

                                    </Button>





                                    <Button

                                        color="danger"

                                        className="flex-1"

                                        onPress={() =>
                                            updateStatus(
                                                startup._id,
                                                "rejected"
                                            )
                                        }

                                    >

                                        Reject

                                    </Button>


                                </div>

                            }



                        </div>


                    ))
                }


            </div>






        </div>

    );
};


export default ManageStartups;