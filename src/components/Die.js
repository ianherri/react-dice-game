function Die(props) {
  const style = {
    backgroundColor: props.selected ? '#ffd7a3' : '#f08080',
    outline: props.selected ? '2px solid green' : '',
  }
  return (
    <div style={style} onClick={() => props.toggle(props.id)} className='Die'>
      <div>this is a single die: {props.val}</div>
    </div>
  )
}

export default Die
