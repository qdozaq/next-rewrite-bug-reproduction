import { useRouter } from "next/dist/client/router";

export default function Page() {
  const router = useRouter();
  return <h1>This is the user page. User id: {router.query.id}</h1>;
}
