import { FC } from "react";

export const Vision: FC<{}> = () => {
  return (
    <div id="vision" className="bg-gray-50 flex flex-col items-center justify-center min-h-50vh">
      <h1 className="text-3xl text-red-2 font-semibold text-center mb-7">Our Vision</h1>
      <div className="flex justify-center items-center gap-x-5">
        {/* <img src="https://via.placeholder.com/350" /> */}
        <div className="md:w-[700px] w-full px-2 md:px-0">
          <p className="text-gray-700 text-lg text-center">
            Bananas isn’t just for individual developers and small businesses. With enterprise-grade
            capabilities, you can run your apps at blazing speeds, and in conjunction with workloads on other
            clouds and on-premise systems, with data transfer remaining private.
          </p>
        </div>
      </div>
    </div>
  );
};
