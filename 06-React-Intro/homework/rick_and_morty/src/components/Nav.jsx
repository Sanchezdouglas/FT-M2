import SearchBa from "./SearchBar.jsx";

export default function Nav(props) { 
    return <div>Barra de navegacion
        <SearchBa onSearch={props.onSearch} />
    </div>;
}

