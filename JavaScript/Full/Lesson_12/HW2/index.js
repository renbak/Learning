const cleanTransactionsList = (transaction) => {
  let clearData = [];
  const simbol = '$';
  let text = transaction.map((el) => {
    if (!isNaN(el)) {
      clearData.push(simbol + parseFloat(el).toFixed(2));
    }
  });
  return clearData;
};

console.log(cleanTransactionsList([' 1.9', '16.455', 17, '1 dollar']));
