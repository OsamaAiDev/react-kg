const ErrorMessage = ({ foodItems }) => {
  // let emptyMessage = foodItems.length === 0 ? <h3>I am Hungry</h3> : null;
  // agr condition true ha tu h3 rhk do var ma
  let emptyMessage = foodItems.length === 0 && <h3>I am Hungry</h3>;
  return <>{emptyMessage}</>;
};

export default ErrorMessage;
