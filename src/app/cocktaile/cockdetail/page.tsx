/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ub04cyzXR0U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-[60px] px-4 border-b lg:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Package2Icon className="h-6 w-6" />
          <span className="">Sake Party</span>
        </Link>
      </header>
      <main className="flex-1 p-4 grid items-center justify-center gap-4 md:p-6">
        <Link className="absolute top-20 left-6" href="/wine">
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
        <div className="w-full py-12 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    カクテル
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">Sake</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <h3 className="inline-block text-xl font-semibold">
                      カクテルの情報１
                    </h3>
                    <p className="inline-block ml-2">+2</p>
                  </div>
                  <div>
                    <h3 className="inline-block text-xl font-semibold">酸度</h3>
                    <p className="inline-block ml-2">1.8</p>
                  </div>
                  <div>
                    <h3 className="inline-block text-xl font-semibold">
                      カクテルの情報２
                    </h3>
                    <p className="inline-block ml-2">No.12</p>
                  </div>
                  <div>
                    <h3 className="inline-block text-xl font-semibold">
                      アルコール度数
                    </h3>
                    <p className="inline-block ml-2">16%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center border"
                  height="300"
                  src="https://sakeapp.s3.ap-northeast-1.amazonaws.com/cocktail/cocktail.jpeg"
                  width="300"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                    Description
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    カクテルの説明
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ArrowLeftIcon({ width = "24", height = "24", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest} // 他のすべての受け入れられるプロパティをここに展開
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ChevronRightIcon({ width = "24", height = "24", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest} // 他のすべての受け入れられるプロパティをここに展開
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Package2Icon({ width = "24", height = "24", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest} // 他のすべての受け入れられるプロパティをここに展開
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
