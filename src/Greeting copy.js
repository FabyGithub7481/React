export function Greeting() {
    /* const married= true
    return <div>
      <h1>{married.toString()}</h1>
    </div> */
    function add(x, y) {
      return x + y;
    }
    return (
      <>
        <h1>{add(50, 52)}</h1>
      </>
    );
  }