import React, { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    
    if (!newBook.title || !newBook.author) {
      alert('Please fill in all fields.');
      return;
    }

   
    setBooks([...books, newBook]);

   
    setNewBook({
      title: '',
      author: '',
     
    });

   
    alert('New book added!');

  };
  

  return (
    <div>
      <h1>Add a new book</h1>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
      </div>
     

      <button onClick={handleAddBook}>Add Book</button>

      <h2>All Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{`${book.title} by ${book.author}`}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;

// import React, { useState } from 'react';

// const CountryList = ({ countries }) => (
//   <ul>
//     {countries.map((country, index) => (
//       <li key={index}>{country}</li>
//     ))}
//   </ul>
// );

// const SearchCountries = ({ allCountries }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCountries, setFilteredCountries] = useState(allCountries);

//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     // Lọc danh sách quốc gia dựa trên từ khóa tìm kiếm
//     const filtered = allCountries.filter((country) =>
//       country.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredCountries(filtered);
//   };

//   return (
//     <div>
//       <h2>Search Countries</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <CountryList countries={filteredCountries} />
//     </div>
//   );
// };

// const App = () => {
//   const countries = [
//     'Vietnam',
//     'United States',
//     'United Kingdom',
//     'Canada',
//     'Australia',
//     'Germany',
//     'France',
//     'Japan',
//     'China',
//     'India',
//   ];

//   return (
//     <div>
//       <h1>Country List</h1>
//       <SearchCountries allCountries={countries} />
//     </div>
//   );
// };

// export default App;

