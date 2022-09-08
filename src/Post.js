// es lo mismo que una function
export const Post = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error))
      }}
    >
      Traer Datos
    </button>
  );
};
