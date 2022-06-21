import React from "react";
import todo from "../../Asset/img/todo.jpg";

const Projects = () => {
    return (
        <div className="container mx-auto mt-14" id="projects">
            <h2 className="text-center text-4xl pb-5 mt-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
                <div className="card card-compact w-full bg-base-100/10 shadow-xl">
                    <figure>
                        <img
                            className="h-60"
                            src="https://user-images.githubusercontent.com/96826691/170514461-f36c29f2-0c53-4901-a68c-96d16a9b8848.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Manufacturer website</h2>
                        <p className="font-bold">
                            Order booking, payment,shipping and dashboard
                            features
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Technology Used:</span>{" "}
                            React.js, Node.js, Express.js, MongoDB, Firebase,
                            REST API, JWT, React Query, Axios, Tailwind CSS,
                            DaisyUI
                        </p>

                        <div className="card-actions justify-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://master-precision-tech.web.app/"
                                className="btn btn-secondary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100/10 shadow-xl">
                    <figure>
                        <img
                            className="h-60"
                            src="https://user-images.githubusercontent.com/96826691/167287754-e4236b50-4149-4c27-994d-9dfc65c4afbb.jpeg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Inventory Management System
                        </h2>
                        <p className="font-bold">
                            Manage, deliver, restock. Manage inventory easily!
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Technology Used:</span>{" "}
                            React.js, Node.js, Express.js, MongoDB, Recharts,
                            Firebase, REST API, JWT, Tailwind CSS
                        </p>

                        <div className="card-actions justify-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://ps-wms.web.app/"
                                className="btn btn-secondary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100/10 shadow-xl">
                    <figure>
                        <img src={todo} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Simple To Do App</h2>
                        <p className="font-bold">
                            Create task, complete task, delete task. Simple!
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Technology Used:</span>{" "}
                            React.js, Express.js, MongoDB, Firebase, REST API,
                            JWT, Tailwind CSS
                        </p>
                        {/* <div className="p-3">
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
                        </div> */}
                        <div className="card-actions justify-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://up-keep-397c7.web.app/"
                                className="btn btn-secondary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
