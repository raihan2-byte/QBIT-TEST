import React from "react";

const ContactUs = () => {
  return (
    <div className="my-6 lg:w-3/4 lg:m-auto">
      <div className="font-bold text-3xl text-center">Contact Us</div>
      <div class="border-2 border-black my-2"></div>
      <div className="text-justify lg:text-center">
        For any inquiries or business opportunities, please don’t hesitate to
        contact us by filling in the form below.
      </div>
      <div>
        <form>
          <div className="my-6 text-left">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              for="your-name"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full my-3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="yourname"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="my-6 text-left">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              for="email-adress"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full my-3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email-adress"
              type="text"
              placeholder="you@company.com"
            />
          </div>
          <div className="my-6 text-left">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full my-3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone-number"
              type="text"
              placeholder="+628xxxx"
            />
          </div>
          <div className="my-6 text-left">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              for="messages"
            >
              Messages
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full my-3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="messages"
              type="text"
              placeholder="Tell us what do you need from us"
            />
          </div>
          <button className="w-full bg-black text-white p-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
