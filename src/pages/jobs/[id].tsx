import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

type ServerSideProps = {
  message: string;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  req,
}) => {
  return {
    props: {
      message: `server message: [${Date.now()} - ${req.method}]`,
    },
  };
};
const JobPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ message }) => {
  return (
    <div>
      <div>aqui estamos</div>
      <hr />
      <pre>{JSON.stringify(message)}</pre>
    </div>
  );
};

export default JobPage;
