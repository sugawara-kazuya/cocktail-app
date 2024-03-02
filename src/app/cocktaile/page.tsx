/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F5dnRMH7CbM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-[60px] px-4 border-b lg:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">Sake Party</span>
        </Link>
      </header>
      <main className="flex-1 p-4 grid items-center justify-center gap-4 md:p-6">
        <div className="space-y-4 w-full max-w-lg">
          <Link className="absolute top-20 left-6" href="/">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter">
            本日のカクテルメニュー
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <Link
              className="flex items-center p-4 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow transition-colors hover:bg-gray-100 hover:text-gray-100 dark:border-gray-800 dark:border-gray-800 white:bg-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-800"
              href="/cocktaile/cockdetail"
            >
              <img
                alt="Sake"
                className="aspect-square rounded-lg object-cover"
                height="100"
                src="https://sakeapp.s3.ap-northeast-1.amazonaws.com/cocktail/cocktail.jpeg"
                width="100"
              />
              <div className="min-w-0 flex-1 ">
                <h2 className="font-semibold w-screen px-4">カクテル 1</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 w-screen px-4">
                  カクテルの説明
                </p>
              </div>
              <ChevronRightIcon className="h-4 w-4 ml-auto opacity-50" />
            </Link>
            <Link
              className="flex items-center p-4 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow transition-colors hover:bg-gray-100 hover:text-gray-100 dark:border-gray-800 dark:border-gray-800 white:bg-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-800"
              href="/cocktaile/cockdetail"
            >
              <img
                alt="Sake"
                className="aspect-square rounded-lg object-cover"
                height="100"
                src="https://sakeapp.s3.ap-northeast-1.amazonaws.com/cocktail/cocktail.jpeg"
                width="100"
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold w-1/2 px-4">カクテル 2</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 px-4">
                  カクテルの説明
                </p>
              </div>
              <ChevronRightIcon className="h-4 w-4 ml-auto opacity-50" />
            </Link>
            <Link
              className="flex items-center p-4 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow transition-colors hover:bg-gray-100 hover:text-gray-100 dark:border-gray-800 dark:border-gray-800 white:bg-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-800"
              href="/cocktaile/cockdetail"
            >
              <img
                alt="Sake"
                className="aspect-square rounded-lg object-cover"
                height="100"
                src="https://sakeapp.s3.ap-northeast-1.amazonaws.com/cocktail/cocktail.jpeg"
                width="100"
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold flex-grow px-4">カクテル 3</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow px-4">
                  カクテルの説明
                </p>
              </div>
              <ChevronRightIcon className="h-4 w-4 ml-auto opacity-50" />
            </Link>
            <Link
              className="flex items-center p-4 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow transition-colors hover:bg-gray-100 hover:text-gray-100 dark:border-gray-800 dark:border-gray-800 white:bg-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-800"
              href="/cocktaile/cockdetail"
            >
              <img
                alt="Sake"
                className="aspect-square rounded-lg object-cover"
                height="100"
                src="https://sakeapp.s3.ap-northeast-1.amazonaws.com/cocktail/cocktail.jpeg"
                width="100"
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold flex-grow px-4">カクテル 4</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow px-4">
                  カクテルの説明
                </p>
              </div>
              <ChevronRightIcon className="h-4 w-4 ml-auto opacity-50" />
            </Link>
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
