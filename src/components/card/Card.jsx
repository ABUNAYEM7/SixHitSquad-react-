import PropTypes from 'prop-types'

const Card = ({data,chosenClickHandler}) => {
  return (
    <div className='my-6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center z-0'>
      {data.map(element=> 
      <div key={element.id} className="card card-compact max-w-80  shadow-xl">
  <figure className='z-0'>
    <img
    className='h-[250px] w-full  object-center object-fill'
      src={element.image}
      alt={element.name} />
  </figure>
  <div className="card-body">
    <div className='flex items-center gap-2'>
        <img className='w-10 h-10 rounded-full' src={element.image} alt={element.name} />
        <h3 className='text-lg font-semibold text-primary'>{element.name}</h3>
    </div>
    <div className='flex items-center justify-between border-b-2 py-2'>
        <h3 className='text-secondary'><i className="fa-solid fa-flag"></i> {element.country}</h3>
        <h3 className='p-3 border-2 rounded-xl'>{element.player_category}</h3>
    </div>
    <h3 className='text-lg font-medium'>Rating</h3>
    <div className='flex items-center justify-between gap-3'>
        <h3 className='text-lg font-medium text-primary'>{element.hand}</h3>
        <h3 className='text-secondary font-medium'>{element.type}</h3>
    </div>
    <div className='flex items-center justify-between gap-3'>
        <h3 className='text-lg font-medium text-primary'>Price : ${element.price}</h3>
        <button onClick={()=>chosenClickHandler(element,element.price)} className='btn hover:bg-highlight'>Chose Player</button>
    </div>
  </div>
</div>)}
    </div>
  )
}

Card.propTypes = {
    data : PropTypes.array.isRequired,
    chosenClickHandler:PropTypes.func.isRequired,

}

export default Card
