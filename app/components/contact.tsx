"use client";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { GoogleMap } from "./google-map";

const fbPageId = "276166685864117";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto md:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full p-4 md:w-1/2">
            <GoogleMap />
          </div>
          <div className="w-full p-4 md:w-1/2">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="mb-20 w-full text-center text-4xl font-semibold text-slate-800 md:text-start">
                <span>Got any Inquiries?</span>
                <p className="text-orange-400">Message us</p>
              </div>
              <a
                type="tel"
                className="flex w-full items-center justify-center gap-3 border p-4 text-3xl text-emerald-500"
              >
                (+63)919-296-8188
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
