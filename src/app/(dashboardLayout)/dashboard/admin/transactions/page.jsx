"use client";

import React, { useEffect, useState } from "react";

import {
    CreditCard,
    CheckCircle,
    Clock,
    DollarSign
} from "lucide-react";


const Transactions = () => {


    const [payments, setPayments] = useState([]);




    useEffect(() => {


        fetch("http://localhost:3005/api/payments")
            .then(res => res.json())
            .then(data => {

                setPayments(data);

            })


    }, []);





    return (

        <div className="min-h-screen bg-slate-950 p-6 text-white">


            {/* Header */}

            <div className="mb-8 flex items-center gap-3">


                <CreditCard
                    size={38}
                    className="text-yellow-400"
                />


                <div>

                    <h1 className="text-3xl font-bold">
                        Transactions
                    </h1>

                    <p className="text-slate-400">
                        Payment history and premium upgrades
                    </p>

                </div>


            </div>






            {/* Summary */}


            <div className="
            mb-8
            grid
            gap-5
            md:grid-cols-3
            ">


                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                ">

                    <p className="text-slate-400 text-sm">
                        Total Payments
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {payments.length}
                    </h2>

                </div>





                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                ">

                    <p className="text-slate-400 text-sm">
                        Revenue
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-yellow-400">

                        $
                        {
                            payments
                                .reduce(
                                    (sum, item) =>
                                        sum + Number(item.amount || 0),
                                    0
                                )
                        }

                    </h2>

                </div>






                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                ">

                    <p className="text-slate-400 text-sm">
                        Premium Users
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">

                        {
                            payments.filter(
                                p => p.payment_status === "success"
                            ).length
                        }

                    </h2>

                </div>


            </div>








            {/* Table */}


            <div className="
            overflow-x-auto
            rounded-2xl
            border
            border-white/10
            bg-white/5
            ">


                <table className="w-full">


                    <thead className="border-b border-white/10">


                        <tr className="text-left text-sm text-slate-400">


                            <th className="p-4">
                                User
                            </th>


                            <th className="p-4">
                                Amount
                            </th>


                            <th className="p-4">
                                Status
                            </th>


                            <th className="p-4">
                                Date
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                        {
                            payments.map(payment => (


                                <tr
                                    key={payment._id}
                                    className="border-b border-white/5"
                                >


                                    <td className="p-4">


                                        <p className="font-semibold">

                                            {payment.user_email}

                                        </p>


                                        <p className="text-xs text-slate-500">

                                            {payment.transaction_id || "No ID"}

                                        </p>


                                    </td>






                                    <td className="p-4">


                                        <div className="flex items-center gap-1">


                                            <DollarSign size={15} />

                                            {payment.amount}


                                        </div>


                                    </td>







                                    <td className="p-4">


                                        {
                                            payment.payment_status === "paid"

                                                ?

                                                <span className="flex items-center gap-1 text-green-400">

                                                    <CheckCircle size={15} />

                                                    Paid

                                                </span>


                                                :

                                                <span className="flex items-center gap-1 text-yellow-400">

                                                    <Clock size={15} />

                                                    Pending

                                                </span>

                                        }


                                    </td>








                                    <td className="p-4 text-sm text-slate-400">


                                        {
                                            new Date(
                                                payment.paid_at
                                            ).toLocaleDateString()
                                        }


                                    </td>





                                </tr>


                            ))
                        }


                    </tbody>



                </table>


            </div>





        </div>

    );
};


export default Transactions;