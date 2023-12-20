import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CrossIcon, QuestionMarkCircleIcon } from "./images";
import { CaretDown } from "@/app/Assets/TopbarSvg/TopbarSvg";

export default function RequestCallBack({
  handleRequestModal,
  requestCallModal,
}) {
  const cancelButtonRef = useRef(null);
  console.log(cancelButtonRef);

  return (
    <Transition.Root show={requestCallModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleRequestModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                <form className="w-[550px] bg-white pb-20" action="">
                  <p className="py-8 text-center text-4xl font-bold text-[#1f3f53]">
                    Talk to Our Career Expert
                  </p>
                  <div className="mx-auto flex w-[82%] flex-col gap-y-4">
                    <div className="">
                      <label htmlFor="FirstName font-semibold">Name</label>
                      <input
                        type="text"
                        name="FirstName"
                        className="w-full px-2 focus:outline-none border border-black"
                        id="FirstName"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="Mobile Number">Mobile Number</label>
                      <input
                        type="text"
                        name="Mobile Number"
                        className="w-full px-2 border focus:outline-none border-black"
                        id="Mobile Number"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="Highest Qualification">
                        Highest Qualification
                      </label>
                      <div className="flex items-center justify-between border border-black px-2">
                        <div>

                        <input
                          type="text"
                          name="Highest Qualification"
                          className="w-full focus:outline-none "
                          id="Highest Qualification"
                        />
                        </div>
                        <CaretDown />
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="Degree">Degree</label>
                      <div className="flex items-center justify-between border border-black px-2">
                        <input
                          type="text"
                          name="Degree"
                          className="w-full  focus:outline-none"
                          id="Degree"
                        />
                        <CaretDown />
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="Year of Graduation">
                        Year of Graduation
                      </label>
                      <div className="flex items-center justify-between border border-black px-2">
                        <input
                          type="text"
                          name="Year of Graduation"
                          className="w-full focus:outline-none"
                          id="Year of Graduation"
                        />
                        <CaretDown />
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="Native State">Native State</label>
                      <div className="border flex items-center justify-between px-2 border-black">
                        <input
                          type="text"
                          name="Native State"
                          className="w-full focus:outline-none"
                          id="Native State"
                        />
                        <CaretDown/>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mt-4 flex gap-y-2 flex-col w-[82%]">
                    <p className="font-bold">Receive Updates</p>
                    <div className="flex gap-x-[10px]">
                      <input type="checkbox" name="Permission For Whatsapp Notifications" id="Permission For Whatsapp Notifications" />
                      <label htmlFor="Permission For Whatsapp Notifications">
                        I want to receive updates directly on Whatsapp
                      </label>
                    </div>
                    <div className="flex gap-x-[10px]">
                      <input type="checkbox" name="Permission For Whatsapp Notifications" id="Permission For Whatsapp Notifications" />
                      <label htmlFor="Permission For Whatsapp Notifications">
                        I hereby agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span> of 10000 Coders
                      </label>
                    </div>
                  </div>
                  <button className="mx-auto bg-[#ff8541] block px-5 mt-8 font-bold text-white py-3 rounded-[16px]">Submit</button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
