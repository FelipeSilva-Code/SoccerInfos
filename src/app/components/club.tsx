

interface teamInfos {
    foto: string
    nome: string,
    fundacao: number
}

export default function TeamInfos(props : teamInfos){
    return(
        <div className="mt-16 items-center flex flex-col">
            <img width={100} height={100} src={props.foto} alt="foto-club"/>
            <h4>Nome: {props.nome}</h4>
            <h4>Fundação: {props.fundacao}</h4>
        </div>
    )
}