import logo from "../assets/logo.svg";
import folderIcon from "../assets/icon-folder.svg";
import documentIcon from "../assets/icon-document.svg";
import uploadIcon from "../assets/icon-upload.svg";

function StorageInfo() {
  return (
    <article className="1440p:mx-[16.25rem] mx-6 flex h-dvh flex-col items-center justify-center gap-4 sm:flex-row lg:mx-44 xl:mx-[11.5rem]">
      <div className="bg-1E2D69 dropShadow w-full rounded-[.625rem] rounded-tr-[6.25rem] py-10 pr-[6.77rem] pl-10 sm:max-w-[350px] sm:pr-[10.88rem]">
        <img src={logo} alt="Fylo Logo" />

        <div className="mt-8 flex gap-4">
          <img
            src={documentIcon}
            alt="Document Icon"
            className="bg-0C122C rounded-[.625rem] px-3 py-3.5"
          />
          <img
            src={folderIcon}
            alt="Folder Icon"
            className="bg-0C122C rounded-[.625rem] px-3 py-3.5"
          />
          <img
            src={uploadIcon}
            alt="Upload Icon"
            className="bg-0C122C rounded-[.625rem] px-3 py-3.5"
          />
        </div>
      </div>

      <div className="dropShadow bg-1E2D69 relative w-full px-8 pt-8 pb-[3.25rem] sm:max-w-[540px] lg:mt-7">
        <span className="text-0C122C dropShadow lg:translate-x- absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 rounded-[.625rem] bg-white px-6 py-4 text-xs leading-3.5 font-bold tracking-[1px] uppercase md:rounded-br-none lg:bottom-[9.5rem] lg:left-[65%] lg:-translate-y-0 xl:left-[79%]">
          <span className="text-[2.5rem] leading-10">185</span>{" "}
          <span className="opacity-50">GB Left</span>
          <div className="downArrow absolute right-0 bottom-0.5 hidden translate-y-full lg:block"></div>
        </span>

        <p className="text-sm leading-4 font-normal">
          You’ve used <span className="font-bold">815 GB</span> of your storage
        </p>
        <div className="mt-4 grid w-full grid-cols-2 grid-rows-2 gap-y-2.5">
          <div className="bg-0C122C relative col-span-2 h-5 w-full rounded-[.625rem]">
            <div className="linearGradient absolute top-1/2 left-0 h-3.5 w-[81.5%] -translate-y-1/2 rounded-[.625rem]">
              <div className="absolute top-1/2 right-0 mr-0.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white"></div>
            </div>
          </div>
          <p className="place-self-start">0 GB</p>
          <p className="place-self-end">1000 GB</p>
        </div>
      </div>
    </article>
  );
}

export default StorageInfo;

//

//

// 0 GB
// 1000 GB
