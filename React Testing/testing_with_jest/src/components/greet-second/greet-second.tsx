
export default function GreetSecond(props: any) {
  const text = true;
  const abc = () => {
    const b = 10;
    const c = 20;
    return c + b;
  }

  return (
    <>
      <div>
        {props.name ? "Hello " + props.name : "Hello"}
      </div>
      {text ?
        <div>
          THis is a true
        </div>
        : <div>
          THis is a false
        </div>
      }
      {
        abc()
      }
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="bio" >TextArea</label>
      <textarea name="bio" id="bio" />
    </>
  )
}
