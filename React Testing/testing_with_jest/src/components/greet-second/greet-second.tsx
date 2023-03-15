
export default function GreetSecond(props: any) {
  return (
    <div>
      {props.name ? "Hello " + props.name : "Hello"}
    </div>
  )
}
