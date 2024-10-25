import PropTypes from 'prop-types'

const Selected = ({selectedElement,deleteClickHandler,isActive,                     activeBtnClickHandler}) => {
    // console.log(data,selectedElement)
  return (
    <div className='my-6 p-4'>
        <h3 className='text-3xl font-bold text-primary'>Selected Players : ({selectedElement.length} / 6)</h3>
        <div>
            {selectedElement.map(element=><div key={element.id} className='flex items-center justify-between w-full gap-5 p-3 my-3 border-2'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='h-10 w-10 rounded-full' src={element.image} alt={element.name} />
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-2xl font-bold text-primary'>{element.name}</h3>
                        <p className='font-medium text-secondary'>{element.type}</p>
                    </div>
                </div>
                <div>
                    <button 
                    onClick={()=>deleteClickHandler(element.id)}
                    className='btn px-4'>
                        <i className="fa-solid fa-trash text-2xl font-bold text-red-500"></i></button>
                </div>
            </div>)}
        </div>
        <button
           onClick={()=>activeBtnClickHandler('Available')}
            className= {isActive ==='Available'? 'btn rounded-r-none  px-5 bg-highlight my-6' : 'btn rounded-r-none  px-5 my-6 bg-highlight'}
            >Add More Players</button>
    </div>
  )
}

Selected.propTypes = {
    selectedElement :PropTypes.array.isRequired,
    deleteClickHandler :PropTypes.func.isRequired,
    activeBtnClickHandler :PropTypes.func.isRequired,
    isActive :PropTypes.string.isRequired,
}

export default Selected
