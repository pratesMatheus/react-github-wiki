import { useState } from 'react';
import GithubIcon from '../assets/github-icon.png';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

const App = () => {
  
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id) {
      //validação para caso o repositório já tenha sido encontrado, ele não retoranará mais de uma vez, retornará o mesmo, apenas uma única vez. Isso é ótimo em sistema de pesquisas
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      } 
    }
    alert('O repositório já foi encontrado');
  }

  /* const handleRemoveRepo = (id) => { 
    //alert('função acionada com sucesso!');
    setCurrentRepo.filter((repo) => repo.id != id); 
  } */
  return (
    <Container>
      <img src={GithubIcon} alt="Logo do GitHub" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} /* onClick={handleRemoveRepo} *//>)}
    </Container>
  );
}

export default App;
