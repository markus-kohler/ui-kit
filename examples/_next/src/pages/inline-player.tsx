import { Player } from '@livepeer/react';

const Page = () => {
  return (
    <>
      <Player autoPlay muted src={source} loop />
    </>
  );
};

export default Page;

const source =