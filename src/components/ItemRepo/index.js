import { ItemContainer } from "./styles";

const ItemRepo = ({repo, onClick}) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">Ver Repositório</a>
      <br />
      <a href="#" rel="noreferrer" target="_blank" className="remover" onClick={onClick} >Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;