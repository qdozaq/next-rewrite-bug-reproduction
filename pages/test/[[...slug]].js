export default function Page(props) {
  return (
    <>
      <h1>this is the test page</h1>
      {props.slug ? (
        <p>some props: {JSON.stringify(props)}</p>
      ) : (
        <p>root page</p>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: [] },
      },
      {
        params: { slug: ["a", "b"] },
      },
      {
        params: { slug: ["a"] },
      },
      {
        params: { slug: ["c"] },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log({ params });
  return {
    props: { slug: params.slug ?? null },
  };
}
