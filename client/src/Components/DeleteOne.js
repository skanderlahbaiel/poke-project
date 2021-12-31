


function DeleteAllPokemons() {

    useEffect(() => {
        axios.get("http://localhost:7500/pokemons").then((response) => {
         // setListOfPokemons(response.data);
        });
      }, []);
      const deletePokemon = () => {
        axios
          .delete("http://localhost:7500/pokemons/:number" )
          .then((response) => {
        //    setListOfPokemons([...ListOfPokemons, name, number, types, imageUrl]);
        //     setLoading(false);
          });
      };
    
    
      return(
    
        <button onClick={deletePokemon}>Delete All</button>
    
            )
    }
    export default DeleteAllPokemons;
    
    
    