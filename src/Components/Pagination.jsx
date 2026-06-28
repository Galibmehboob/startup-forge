"use client";

import {
    Pagination,
} from "@heroui/react";

import { useRouter, useSearchParams } from "next/navigation";


const CustomPagination = ({ totalPages }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;


    const changePage = (page) => {

        const params = new URLSearchParams(searchParams.toString());

        params.set("page", page);

        router.push(`/opportunities?${params.toString()}`);
    };


    return (

        <Pagination className="justify-center">

            <Pagination.Content>

                <Pagination.Item>

                    <Pagination.Previous
                        isDisabled={currentPage === 1}
                        onPress={() =>
                            changePage(currentPage - 1)
                        }
                    >
                        <Pagination.PreviousIcon />
                        <span>Previous</span>
                    </Pagination.Previous>

                </Pagination.Item>



                {
                    Array.from(
                        { length: totalPages },
                        (_, i) => i + 1
                    )
                        .map((p) => (

                            <Pagination.Item key={p}>

                                <Pagination.Link
                                    isActive={p === currentPage}
                                    onPress={() => changePage(p)}
                                >
                                    {p}
                                </Pagination.Link>

                            </Pagination.Item>

                        ))
                }



                <Pagination.Item>

                    <Pagination.Next
                        isDisabled={currentPage === totalPages}
                        onPress={() =>
                            changePage(currentPage + 1)
                        }
                    >

                        <span>Next</span>
                        <Pagination.NextIcon />

                    </Pagination.Next>

                </Pagination.Item>


            </Pagination.Content>

        </Pagination>

    );
};


export default CustomPagination;