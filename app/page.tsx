import {createClient} from"libsql-client"

export default function Home() {
  const db = createClient({
    url: "https://some-url.turso.io",
    authToken: "some-token"
  })
  
  return (
   <div>Nothing here of relevance</div>
  );
}
