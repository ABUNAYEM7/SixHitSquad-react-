import PropTypes from 'prop-types'
import Card from '../card/Card'
import Selected from '../selected/Selected'
import Newsletter from '../newsletter/Newsletter'


const Main = ({activeBtnClickHandler,
                isActive,
                data,
                chosenClickHandler,
                players,
                selectedId,
                selectedElement,
                deleteClickHandler
              }) => {
  return (
    <div className='my-6 p-4 '>
      <div className='flex items-center justify-between gap-4 '>
        <h3 className='text-3xl font-bold text-primary'>Available Players</h3>
        <div className='flex items-center gap-3 md:gap-0 flex-col md:flex-row '>
          <button
           onClick={()=>activeBtnClickHandler('Available')}
            className= {isActive ==='Available'? 'btn md:rounded-r-none  px-4 bg-highlight' : 'btn md:rounded-r-none  px-4'}
            >Available Players</button>
          <button
           onClick={()=>activeBtnClickHandler('Selected')}
            className={isActive ==='Selected'? 'btn md:rounded-r-none  px-8 bg-highlight' : 'btn md:rounded-l-none  px-8'}
            >Selected ({players}) </button>
        </div>
      </div>
      {/* main-container-content */}
      <div>
        {isActive === 'Available'? <div>
                                    <Card data ={data}
                                        chosenClickHandler ={chosenClickHandler}
                                    /> 
                                    <Newsletter/>
        </div>
                                  :
                                   <Selected players ={players}
                                             selectedId ={selectedId}
                                             selectedElement ={selectedElement}
                                             deleteClickHandler={deleteClickHandler}
                                             isActive={isActive}
                                             activeBtnClickHandler={activeBtnClickHandler}
                                  />}
      </div>
    </div>
  )
}

Main.propTypes = {
  activeBtnClickHandler : PropTypes.func.isRequired,
  isActive : PropTypes.string.isRequired,
  data : PropTypes.array.isRequired,
  chosenClickHandler : PropTypes.func.isRequired,
  players : PropTypes.number.isRequired,
  selectedId : PropTypes.array.isRequired,
  selectedElement : PropTypes.array.isRequired,
  deleteClickHandler : PropTypes.func.isRequired,

}

export default Main
