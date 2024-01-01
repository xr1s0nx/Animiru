import Image from "next/image";
import Logo from "@/assets/images/kandinsky-download-1703842652776 (1).png";

function Loading() {
  return (
    <div className="fixed left-0 bottom-0 w-full h-full flex items-center justify-center bg--default z-10">
      <Image src={Logo} alt="animiru" width={100} height={100} />
    </div>
  );
}

export default Loading;
