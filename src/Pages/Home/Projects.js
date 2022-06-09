import React from "react";

const Projects = () => {
    return (
        <div className="container mx-auto mt-14">
            <h2 className="text-center text-4xl pb-5">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
                <div class="card card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://api.lorem.space/image/shoes?w=400&h=225"
                            alt="Shoes"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Manufacturer website</h2>
                        <p className="font-bold">
                            Order booking, payment,shipping and dashboard
                            features
                        </p>
                        <div className="p-3">
                            <ul className="list-disc">
                                <li className="mb-3">
                                    Different functionalities based on user
                                    authorization level such as user & admin.{" "}
                                </li>
                                <li className="mb-3">
                                    Product booking, payment & shipment feature
                                    with dynamic product information
                                </li>
                                <li className="mb-3">
                                    3-layers of authentication and authorization
                                    securities (JWT authentication, server-side
                                    verification, and database verification)
                                </li>
                            </ul>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://api.lorem.space/image/shoes?w=400&h=225"
                            alt="Shoes"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Manufacturer website</h2>
                        <p className="font-bold">
                            Order booking, payment,shipping and dashboard
                            features
                        </p>
                        <div className="p-3">
                            <ul className="list-disc">
                                <li className="mb-3">
                                    Different functionalities based on user
                                    authorization level such as user & admin.{" "}
                                </li>
                                <li className="mb-3">
                                    Product booking, payment & shipment feature
                                    with dynamic product information
                                </li>
                                <li className="mb-3">
                                    3-layers of authentication and authorization
                                    securities (JWT authentication, server-side
                                    verification, and database verification)
                                </li>
                            </ul>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://api.lorem.space/image/shoes?w=400&h=225"
                            alt="Shoes"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Manufacturer website</h2>
                        <p className="font-bold">
                            Order booking, payment,shipping and dashboard
                            features
                        </p>
                        <div className="p-3">
                            <ul className="list-disc">
                                <li className="mb-3">
                                    Different functionalities based on user
                                    authorization level such as user & admin.{" "}
                                </li>
                                <li className="mb-3">
                                    Product booking, payment & shipment feature
                                    with dynamic product information
                                </li>
                                <li className="mb-3">
                                    3-layers of authentication and authorization
                                    securities (JWT authentication, server-side
                                    verification, and database verification)
                                </li>
                            </ul>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
