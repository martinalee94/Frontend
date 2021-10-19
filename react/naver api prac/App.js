import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function Input({searchWord, setSearchWord, searchResult, setSearchResult}){
  function changeHandler(event){
    event.preventDefault();
    setSearchWord(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();

    const CLIENT_ID = '';
    const CLIENT_SECRET = '';
    axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/shop',
          { params: { query: searchWord }, 
            headers: {'X-Naver-Client-Id': CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET}
          })
          .then((res)=>{
            console.log(res)
            setSearchResult(res.data.items)
          })
  }

  return(
    <>
      <form onSubmit={submitHandler}>
        <input value={searchWord} onChange={changeHandler}></input>
        <button type="submit">Search</button>
      </form>
      <Items searchResult={searchResult} />
    </>
  )
}

function Items({searchResult}){
  const lis = searchResult.map((item, index)=>{
    return(
      <li key={index}>
        <img src={item.image} alt="검색결과 해당 이미지" />
        <p dangerouslySetInnerHTML={{__html:item.title}}></p>
        <a href={item.link}>바로가기</a>
      </li>
    )
  })
  console.log('searchResult', searchResult)
  return(
    <ul>
      {lis}
    </ul>
  )
}

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  return (
    <div className="App">
      <h1><span style={{color:"rgb(29,200,0)"}}>Naver API </span>Test Page</h1>
      <Input searchWord={searchWord} setSearchWord={setSearchWord} searchResult={searchResult} setSearchResult={setSearchResult}/>
    </div>
  );
}

export default App;
