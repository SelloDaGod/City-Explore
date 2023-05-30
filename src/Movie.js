function Movie(props){
    let moviesHTML = props.movies.map(function(element){
        <h1>{"hello"}</h1>
    })
    console.log(props.movies)
    return <div>{moviesHTML}</div>
}
export default Movie