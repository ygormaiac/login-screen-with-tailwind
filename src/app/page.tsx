export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-zinc-900 to-zinc-850 flex justify-center items-center">
      <section className="w-5/6 md:w-1/2 bg-zinc-950 rounded-3xl flex">
        <section id="form" className="basis-full lg:basis-5/12 flex flex-col text-white px-10 my-14">
          <h1 className="text-2xl text-white font-bold mb-10">
            Faça o seu login
            <span className="inline-block rounded-full ml-1 h-3 w-3 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70]"></span>
          </h1>
          <form className="flex flex-col gap-6 text-gray-400">
            <label className="group h-16">
              Email
              <div className="transition-opacity ease-in opacity-0 h-10 w-full group-focus-within:opacity-100 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-sm"></div>
              <div className="relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg">
                <input className="h-10 bg-zinc-800 rounded-lg p-2 outline-none appearance-none w-full" type="email" />
              </div>
            </label>
            <label className="group h-16">
              Senha
              <div className="transition-opacity ease-in opacity-0 h-10 w-full group-focus-within:opacity-100 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-sm"></div>
              <div className="relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg">
                <input className="h-10 bg-zinc-800 rounded-lg p-2 outline-none appearance-none w-full" type="password" />
              </div>
            </label>
            <a className="text-right text-xs underline">Esqueci minha senha</a>
            <button className="h-10 rounded-lg cursor-pointer bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] text-white font-bold" type="submit">Entrar</button>
            <a className="text-center text-xs underline">Ainda não tenho uma conta</a>
          </form>
        </section>
        <section id="picture" className="w-0 lg:w-7/12 bg-cover rounded-r-3xl bg-[url('/background-form.png')] shadow-[inset_400px_30px_400px_-100px_theme('colors.zinc.950')] opacity-70"></section>
      </section>
    </div>
  );
}
