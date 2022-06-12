import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    // const {
    //     register,
    //     reset,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    //     emailjs
    //         .sendForm(
    //             "service_kc7gjau",
    //             "template_7o3n7ik",
    //             data,
    //             "gW_Vzf_ijlvdoX4un"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    // };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_kc7gjau",
                "template_7o3n7ik",
                form.current,
                "gW_Vzf_ijlvdoX4un"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-center text-4xl pb-5 mt-12">Contact Me</h2>
            <div className="max-w-[500px] mx-auto px-2">
                <div className="p-5 bg-white rounded-md border border-gray-700">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-5">
                            <label>Name</label>
                            <div>
                                <input
                                    className="w-3/4 border rounded p-1 border-gray-400 focus:border-green-400 text-black placeholder-gray-400 outline-none"
                                    border
                                    type="text"
                                    name="user_name"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label>Email</label>
                            <div>
                                <input
                                    className="w-3/4  border rounded p-1 border-gray-400 focus:border-green-400 text-black placeholder-gray-400 outline-none"
                                    type="email"
                                    name="user_email"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Message</label>
                            <div>
                                <textarea
                                    className="w-3/4 py-2 border rounded p-1 border-gray-400 focus:border-green-400 text-black placeholder-gray-400 outline-none"
                                    name="message"
                                />
                            </div>
                        </div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Send"
                        />
                    </form>
                    {/* <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <input
                                className="py-2 border-b-2 border-gray-400 focus:border-green-400 text-black placeholder-gray-400 outline-none"
                                placeholder="Enter your name"
                                id="name"
                                autoComplete="off"
                                {...register("name")}
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                className="w-3/4 py-2 border-b-2 border-gray-400 focus:border-green-400 text-black placeholder-gray-400 outline-none"
                                type="email"
                                id="email"
                                placeholder="Enter  your email"
                                autoComplete="off"
                                {...register("email")}
                            />
                        </div>

                        <div className="mb-5">
                            <textarea
                                className="w-full  border-b-2 border-gray-400 focus:border-green-400 text-black placeholder-gray-400 outline-none"
                                type="text"
                                placeholder="Enter your message"
                                autoComplete="off"
                            />
                        </div>

                        <input
                            className="w-full btn btn-primary hover:text-primary px-5 py-2 rounded-md transition-all "
                            type="submit"
                            value="Send"
                        />
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
