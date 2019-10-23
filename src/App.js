import React from 'react';
import './App.css';

import Pagination from "./components/Pagination"

function App() {

  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <Pagination
        count={5347}
        page={page}
        itemsPerPage={100}
        onChangePage={handleChangePage}
      />
    </div>
  );
}

export default App;
