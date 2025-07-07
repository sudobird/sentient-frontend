import React from "react";
import Image from "next/image";

export function CenteredLogo() {
  return (
    <div className="mb-8 mt-[-10vh] flex justify-center">
      <Image src="/logo.svg" alt="Logo" width={64} height={64} />
    </div>
  );
} 