import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";
import { problems } from "@/utils/problems";
import { LocalProblem } from "@/utils/types/problem";

type ProblemPageProps = {
  problem: LocalProblem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  return (
    <div>
      {/* <Topbar problemPage /> */}
      <Workspace problem={problem} />
    </div>
  );
};
export default ProblemPage;

// fetch the local data
//  -> SSG (Static Site Generation): the pages will be pre-generated on the server
// The only client-side fetching is the likes, difficulty, etc. The rest is pre-loaded.
//To use SSG in Next.js we have 2 functions: getStaticPaths & getStaticProps

// getStaticPaths => create the dynamic routes that should be pre-generated on the server.
export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps => fetch the data
export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid]; //This problem is JavaScript Object Notation (JSON)

  if (!problem) {
    return {
      notFound: true, //404
    };
  }
  problem.handlerFunction = problem.handlerFunction.toString(); //Since JSON does not inherently accommodate functions, we convert the code into a string
  return {
    props: {
      problem,
    },
  };
}
