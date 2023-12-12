export default function Home(props) {
  console.log(props);
  return (
    <div>
      <p>{props.params.id}</p>
    </div>
  );
}