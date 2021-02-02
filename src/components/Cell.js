import { useAutomataDispatch } from '../automata-context'

const Component = ({id, isSelected}) => {
  const dispatch = useAutomataDispatch()

  const handleSelected = (evt) => {
    dispatch({
      type: isSelected ? 'off' : 'on',
      idx: Number(evt.target.id.replace('c-',''))
    })
  }

  return (
    <div id={id} title={id} className={`cell ${isSelected ? 'selected' : ''}`} onClick={handleSelected}></div>
  )
}

export default Component;
