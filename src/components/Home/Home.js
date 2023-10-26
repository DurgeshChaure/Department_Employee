import React,{useEffect} from 'react';
const Home = () => {

  useEffect(()=>{
    document.title = "Home";
  });
  return (
    <div>
    <div className='text-center' style={{backgroundColor:'#5f66c6'}}>
    
      <h1 className="display-3">Durgesh's First Website</h1>
      <p className="lead">This is react Website</p>
      <hr className="my-2" />
    </div>
    <div>
    <p className="lead"> 
       A simple Employee Management website is a straightforward and efficient tool that focuses on the fundamental CRUD (Create, Read, Update, Delete) operations for employee records. This web application enables users, typically HR administrators, to effortlessly manage employee data. They can create new employee records, read and access existing records, update information as needed, and delete records when necessary. By concentrating on these core operations, the website simplifies the process of maintaining an accurate and up-to-date employee database. It serves as a valuable asset for HR professionals, allowing them to streamline their daily tasks and ensure that employee information remains current and accessible
       .</p>
       </div>
  </div>
  );
};

export default Home;