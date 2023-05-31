import Movie from "./Movie"
function Movies(props){
    let moviesHTML = props.movies.map(function(element){
       return <Movie title = {element.original_title} />
    })
    console.log(props.movies)
    return <div>{moviesHTML}</div>
}
export default Movies