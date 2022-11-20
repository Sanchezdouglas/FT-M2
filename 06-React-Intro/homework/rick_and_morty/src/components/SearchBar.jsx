export default function SearchBar(props) {
   const [userInput, setUserInput] = useState("");

   handleChange = (e) => {
   
   }
   return (
      <div>
         <input type="search" value={userInput} onChange={handleChange} />
         <button onClick={() => props.onSearch(userInput)}>
            Agregar
         </button>
      </div>
   );
   
}


