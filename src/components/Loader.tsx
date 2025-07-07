import Image from "next/image";

export const Loader = function() {
  return (
    <div className="flex align-center gap-2">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>

      <div className="flex-shrink-0 mt-1">
        <Image src="/logo.svg" alt="AI" width={14} height={14} className="rounded-full" />
      </div>
      <div
        className="
          bg-gradient-to-r from-transparent via-black/60 to-transparent
          bg-[length:200%_100%]
          animate-[shimmer_1.5s_linear_infinite]
          bg-clip-text text-transparent font-medium
        "
      >
        Browsing the web
      </div>
    </div>
  )
}