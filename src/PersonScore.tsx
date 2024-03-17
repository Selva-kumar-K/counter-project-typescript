import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export const PersonScore = () => {
  const [state, setState] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setState(person.name);
    });
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <div>
        <h3>
          {state}, {score}
        </h3>
        <button onClick={() => setScore(score + 1)}>Add</button>
        <button onClick={() => setScore(score - 1)}>Subtract</button>
        <button onClick={() => setScore(0)}>Reset</button>
      </div>
    </>
  );
};
