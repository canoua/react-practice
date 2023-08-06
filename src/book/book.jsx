function Book(props) {
  if(!props.name) {
    return null;
  }

  return(
    <div>
      {/* Это не теги, а встроенные реакт-компоненты */}
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
  )

  // or
  // return props.name ? (
  //   <div>
  //     <h2>{props.name}</h2>
  //     <p>{props.year}</p>
  //     <p>{props.price}</p>
  //     <p>{props.children}</p>
  //   </div>
  // ) : null;
}

export default Book;