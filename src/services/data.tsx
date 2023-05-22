
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

interface dataProps {
  
}

const Data: FC<dataProps> = ({}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => 
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
          (res) => res.json()
        ),
  });

  console.log(data);
  
  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;

  return (
    <div>
      {/* <h1>Data</h1>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}

export default Data

