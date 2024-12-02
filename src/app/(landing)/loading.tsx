export const runtime = "nodejs";

export default function Loading({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-28 px-4 md:px-8">
      <div className="font-poppins flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#251C1C] font-extrabold">
          {message ? message : "Loading ..."}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center justify-center gap-2 flex-wrap">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FF9696] rounded-full bouncing-element delay-0"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FF9696] rounded-full bouncing-element delay-1"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FF9696] rounded-full bouncing-element delay-2"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FF9696] rounded-full bouncing-element delay-3"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FF9696] rounded-full bouncing-element delay-4"></div>
        </div>
      </div>
    </div>
  );
}
