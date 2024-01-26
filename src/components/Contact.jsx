import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            Contac Me
          </p>
          <p className="py-6">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7f4d080d-0a7b-4e9b-9412-e054b2473781"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="my-4 p-2 bg-transparent border-2 rounded-md
          text-white focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md
          text-white focus:outline-none "
            />
            <textarea
              name="message"
              rows="10"
              className="my-4 p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none "
            />
            <button
              placeholder="Enter your message"
              className="text-whie border-2 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer 
            px-6 py-3 rounded-lg
           "
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
