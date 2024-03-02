/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4SZfZS9P6Wu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center h-[60px] px-4 border-b lg:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Package2Icon className="h-6 w-6" />
          <span className="">Sake Party</span>
        </Link>
      </header>
      <main>
        <div className="grid md:grid-cols-2 items-center justify-center gap-12 max-w-3xl mx-auto px-20 mt-32">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">飲み会</h1>
            <p className="text-gray-500 dark:text-gray-400">
              あなたの家で楽しむための飲み会アプリ。ワイン、日本酒、カクテルのオプションがあります。
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">🍷</div>
              <div>
                <h2 className="font-semibold">ワイン</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  あなたの好みのワインを見つけましょう。
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Link href={"/wine"}>
                <Button variant="outline">ワインの選択</Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">🍶</div>
              <div>
                <h2 className="font-semibold">日本酒</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  あなたの好みの日本酒を見つけましょう。
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Link href={"/nihonsake"}>
                <Button variant="outline">日本酒の選択</Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">🍹</div>
              <div>
                <h2 className="font-semibold">カクテル</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  あなたの好みのカクテルを見つけましょう。
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Link href={"/cocktaile"}>
                <Button variant="outline">カクテルの選択</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
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
