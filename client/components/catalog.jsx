import React, { useState, useEffect } from 'react';

function Catalog() {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const id = setInterval(() => {
      if (index <= 6) {
        setIndex(index + 1);
      } else {
        setIndex(index - 7 + 1);
      }
    }, 2500);
    return () => {
      clearInterval(id);
    };
  }, [index]);

  return (
    <div className="catalog-item">
      <div className="catalog-slide fade-in">
        <img
          src={`./images/catalog${index}.jpeg`}
          className="d-block w-100 fade-in"
        />
      </div>
    </div>
  );
}

export default Catalog;
