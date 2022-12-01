
function Lista( {dados} ){
    return (
        <ul>
            { dados.map( (x) => {return <li key={x.id}>{x.descricao}</li>} ) }
        </ul>
    )
}
export default Lista

/*
   Método map gera vetor novo a partir do que o disparou convertendo as células. No caso, converte objetos JSON em tags LI. Map é uma forma de repetição: para cada célula do vetor original, gera célula corresponde no vetor criado.

   Vetor original
   [{id:1,descricao:"Prego"},{id:2,descricao:"Parafuso"},{id:3,descricao:"Porca"}]

   Vetor gerado pelo MAP
   [<li key=1>Prego</li>,<li key=2>Parafuso</li>,<li key=3>Porca</li>]
*/