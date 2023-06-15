import React from "react";
import { useForm } from "react-hook-form";


const EmployeeForm = () => {
    const { register, handleSubmit } = useForm();

    const createEmployee = async (data) => {
        console.log(data);

        try {
            const res = await fetch(
                "https://formz.in/api/task",
                {
                    mode: 'no-cors',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(data),
                }
            );

            if(res.status === 201){
                console.log(res);

            }
        } catch (error) {
            console.log(error);
            
        }

        

        
    };

    return (
        <div>
            <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
                <div className="space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="text-base font-medium text-gray-900 dark:text-gray-200"
                        >
                            {" "}
                            Name{" "}
                        </label>
                        <div className="mt-2.5">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="text"
                                placeholder="Enter You Full Name"
                                {...register("name")}
                            ></input>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="text-base font-medium text-gray-900 dark:text-gray-200"
                        >
                            {" "}
                            Email Id{" "}
                        </label>
                        <div className="mt-2.5">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="email"
                                placeholder="Enter Your Email"
                                {...register("email")}
                            ></input>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="text-base font-medium text-gray-900 dark:text-gray-200"
                        >
                            {" "}
                            Phone Number{" "}
                        </label>
                        <div className="mt-2.5">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="text"
                                placeholder="Enter 10 digit Phone Number"
                                {...register("phone")}
                            ></input>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="text-base font-medium text-gray-900 dark:text-gray-200"
                        >
                            {" "}
                            How can we help?{" "}
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="text"
                                placeholder="Tell us a little about your project..."
                                {...register("description")}
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <p className="text-base font-medium text-gray-900 dark:text-gray-200">Services</p>

                        <div className="mt-2.5 grid grid-cols-2 gap-y-2">
                            <div className="flex gap-x-2">
                                <input
                                    className=" rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                    type="checkbox"
                                    
                                    {...register("Website")}
                                ></input>
                                
                                <label
                                    htmlFor="Website"
                                    className="text-base text-gray-900 dark:text-gray-200">
                                    Website Design
                                </label>
                            </div>

                            <div className="flex gap-x-2">
                                <input
                                    className="rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                    type="checkbox"

                                    {...register("content")}
                                ></input>
                                <label
                                    htmlFor="content"
                                    className="text-base  text-gray-900 dark:text-gray-200">
                                    Content Creation
                                </label>    
                            </div>

                            <div className="flex gap-x-2">
                            <input
                                className="flex rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="checkbox"

                                {...register("design")}
                            ></input>
                            <label
                                htmlFor="design"
                                className="text-base  text-gray-900 dark:text-gray-200">
                                UX Design
                            </label>
                            </div>

                            <div className="flex gap-x-2">
                            <input
                                className="flex rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="checkbox"

                                {...register("consulting")}
                            ></input>
                            <label
                                htmlFor="consulting"
                                className="text-base  text-gray-900 dark:text-gray-200">
                                Strategy and Consulting
                            </label>
                            </div>

                            <div className="flex gap-x-2">
                            <input
                                className="flex  rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="checkbox"

                                {...register("research")}
                            ></input>
                            <label
                                htmlFor="research"
                                className="text-base  text-gray-900 dark:text-gray-200">
                                User Research
                            </label>
                            </div>

                            <div className="flex gap-x-2">
                            <input
                                className="flex rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="checkbox"

                                {...register("other")}
                            ></input>
                            <label
                                htmlFor="Other"
                                className="text-base text-gray-900 dark:text-gray-200">
                                Other
                            </label>
                            </div>

                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                        >
                            Send Message
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="ml-2 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
