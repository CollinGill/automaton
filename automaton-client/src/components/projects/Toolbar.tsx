import { useState } from "react";

const Toolbar = () => {
  const [showStateModal, setShowStateModal] = useState(false);
  const [showTransititionModal, setShowTransitionModal] = useState(false);

  return (
    <div className="flex h-auto w-full bg-slate-800 text-gray-400 px-3 py-1">
      <button className="navbar-link" onClick={() => setShowStateModal(true)}>
        Add State
      </button>
      {showStateModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-2/4 bg-gray-800 outline-none focus:outline-none">
              {/** Header */}
              <div className="flex items-start justify-between p-5 border-indigo-500 border-b border-solid border-solid-200 rounded-t">
                <h3 className="text-3xl font-semibold">Add State</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowStateModal(false)}
                >
                  x
                </button>
              </div>
              {/** Body */}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Body text
                </p>
              </div>
              {/** Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-indigo-500 rounded-b">
                <button
                  className="text-red-500 bg-transparent font-bold uppercase px-6 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => setShowStateModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => setShowStateModal(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
      <button
        className="navbar-link"
        onClick={() => setShowTransitionModal(true)}
      >
        Add Transition
      </button>
      {showTransititionModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-2/4 bg-gray-800 outline-none focus:outline-none">
              {/** Header */}
              <div className="flex items-start justify-between p-5 border-indigo-500 border-b border-solid border-solid-200 rounded-t">
                <h3 className="text-3xl font-semibold">Add Transition</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowTransitionModal(false)}
                >
                  x
                </button>
              </div>
              {/** Body */}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Body text
                </p>
              </div>
              {/** Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-indigo-500 rounded-b">
                <button
                  className="text-red-500 bg-transparent font-bold uppercase px-6 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => setShowTransitionModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => setShowTransitionModal(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
      <div className="flex flex-grow" />
    </div>
  );
};

export default Toolbar;
