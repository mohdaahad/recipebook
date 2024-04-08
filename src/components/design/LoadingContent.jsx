import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingContent({ message }) {
  return (
    <div className="pt-8 flex items-center gap-4">
      <div className="animate-spin text-2xl">
        <AiOutlineLoading3Quarters />
      </div>
      <h1 className="text-xl">{message} ...</h1>
    </div>
  );
}

export default LoadingContent;
