const PopUp = () => {
  return (
    <div className='pop-up'>
      <h4 className='pop-up__title'>you are editing :</h4>
      <input type='text' className='pop-up__input' />
      <div className='pop-up__buttons'>
        <button className='pop-up__buttons__ok'>ok</button>
        <button className='pop-up__buttons__no'>no</button>
      </div>
    </div>
  );
};
export default PopUp;
