const submitForm = (): any => {
    console.log('form was submitted');
}


export default function TodoForm() {
    
    function search(event: React.FormEvent) {
        event.preventDefault(); // Prevents the default form submission
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
      }
    
      return (
        <form onSubmit={search}>
          <input name="query" />
          <button type="submit">Search</button>
        </form>
      );
}


