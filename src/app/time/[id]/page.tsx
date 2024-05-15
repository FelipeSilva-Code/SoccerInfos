import TeamInfos from "@/app/components/club";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="bg-neutral-500 w-full px-10 py-3 flex justify-between items-center">
        <h1 className="text-2xl uppercase font-bold text-orange-400">Football Infos</h1>
        <Link href="sobre">Sobre</Link>
      </nav>

      <div className="flex w-full items-center justify-center mt-6">
        <input  className="rounded border-none w-96 pl-1 h-8" type="text" placeholder="Time"/>
        <button className="bg-orange-400 w-40 ml-2 h-8 rounded">Procurar</button>
      </div>

      {/* USAR O LUCIDE PARA OS ICONS */}
      
      <div  className="grid-rows-5 ">
        <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

        <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

          <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

        <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

        <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

        <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

        <TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>


<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

<TeamInfos 
          nome="Celtic"
          foto="https://cdn.sportmonks.com/images/soccer/teams/21/53.png"
          fundacao={1996}/>

      </div>
    </main>
  );
}


