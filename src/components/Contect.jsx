import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contect() {
    const senUserdata = async(e) => {
        e.preventDefault();
        const { fname, lname, phone, email, message } = inputValue;
        if (fname == "") {
            toast.error("first name is require");
        } else if ((lname == "")) {
            toast.error("last name is require");
        } else if ((email == "")) {
            toast.error("email is require");
        } else if (!email.includes("@")) {
            toast.error("email is not valid");
        } else if ((phone == "")) {
            toast.error("phone number is require");
        }
        //connect with frontend
        
        else {
            const res =await fetch("http://localhost:4000/register",{
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify({
                    fname, lname, phone, email, message 
                })
            })
            const data = await res.json();
            console.log(data)
            if(data.status == 201){
            toast.success("your responce is sucessfully");
            setinputValue({
                ...inputValue,
                fname: "",
                lname: "",
                email: "",
                phone: "",
                message: "",
            })

            }
        }
    };

    const [inputValue, setinputValue] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });
    console.log(inputValue);

    const getValue = (e) => {
        const { name, value } = e.target;
        setinputValue(() => {
            return {
                ...inputValue,
                [name]: value,
            };
        });
    };
    return (
        <div className="border-none p-4 flex-col flex items-center justify-center shadow-md shadow-amber-600 rounded-lg">
            <h1 className="bg-amber-700 m-4 w-full rounded-lg p-3 flex justify-center text-white">
                <b>CONTACT ME :-</b>
            </h1>

            <div className="mb-3 w-full">
                <Form className="row mt-2 grid grid-cols-2 xl:grid-cols-4  gap-8">
                    <Form.Group
                        className="mb-3 col-lg-6 flex flex-col   text-amber-800 font-bold"
                        controlId="formBasicEmail"
                    >
                        <Form.Label> First Name:</Form.Label>
                        <Form.Control
                            onChange={getValue}
                            type="text"
                            name="fname"
                            value={inputValue.fname}
                            className="rounded-md p-2 shadow-md shadow-amber-600"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3 col-lg-6 flex flex-col  text-amber-800 font-bold"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            onChange={getValue}
                            type="text"
                            name="lname"
                            value={inputValue.lname}

                            className="rounded-md p-2 shadow-md shadow-amber-600"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3 col-lg-6 flex flex-col  text-amber-800 font-bold"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            onChange={getValue}
                            type="email"
                            name="email"
                            value={inputValue.email}

                            required
                            placeholder="example@gamil.com"
                            className="rounded-md p-2 shadow-md shadow-amber-600"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3 col-lg-6 flex flex-col  text-amber-800 font-bold"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Phone No.:</Form.Label>
                        <Form.Control
                            onChange={getValue}
                            type="text"
                            name="phone"
                            value={inputValue.phone}

                            className="rounded-md p-2 shadow-md shadow-amber-600"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3 col-lg-6 flex flex-col col-span-2 lg:col-span-4 text-amber-800 font-bold"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            onChange={getValue}
                            as="textarea"
                            rows={3}
                            name="message"
                            value={inputValue.message}

                            className="rounded-md p-2 shadow-md shadow-amber-600"
                        />
                    </Form.Group>

                   
                </Form>
            
            </div>
            <div className="col-12">
                        <Button
                            className="btn btn-primary text-amber-700 font-semibold rounded-md p-2 shadow-md shadow-amber-600 "
                            variant="primary"
                            type="submit"
                            onClick={senUserdata}
                        >
                            Submit
                        </Button>
                    </div>
                <ToastContainer />
        </div>
    );
}

export default Contect;
