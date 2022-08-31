import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Teacher.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useParams } from "react-router-dom";
import { Button,Modal,Input } from 'react-bootstrap';


export const Reports = () => {
  
};

export const ReportsOne = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
   const [changed, setChanged] = useState(false);
        let history = useHistory();
        const { id } = useParams(); 
const [teacher, setTeacher] = useState({
  first_name: "",
  last_name: "",
  phone: "",
  email:"",
  gender:"",
  state:"",


});
const {first_name, last_name, phone,email,gender,state} = teacher;
const onInputChange = e => {
  setTeacher({ ...teacher, [e.target.name]: e.target.value });
};
const handleSumbit =(e)=> {
  e.preventDefault();
  // history.push("/");
  axios.post("http://localhost:3001/api/teacher/create-teacher",teacher)
  alert('Data Inserted');
}
useEffect(() => {
  getAllTeachers();
  
  
}, []);
const onSubmit = async (id) => {
  console.log(id);
  await axios.delete(`http://localhost:3001/api/teacher/delete-teacher/${id}`);
 // history.push("/");
};

const getAllTeachers = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/teacher/get-all-teachers"
  );
  if (response.status === 200) {
    setData(response.data.data);

  }
}



return (

     <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
        <div class="row ">
         
         <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
              
              </form>
            </div>    
            </div>  
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Teacher Details</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Teacher
            </Button>
           </div>
         </div>  
          <div class="row">
              <div class="table-responsive " >
               <table class="table table-striped table-hover table-bordered">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Name </th>
                          <th>last Name</th>
                          <th>phone</th>
                          <th>Email </th>
                          <th>Gender </th>
                          <th>State </th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                     
         {data.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope=" row">{index+1}</th>
               <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.state}</td>
                          <td>
                             <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                              <a href="EditTeacher"  class="AddEdit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                              <a onClick={onSubmit} href=" onSubmit" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                               
                          </td>
                      </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>   
      </div>  

      {/* <!--- Model Box ---> */}
      <div className="model_box">
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Record</Modal.Title>
      </Modal.Header>
          <Modal.Body>
          <form>
              <div class="form-group">
                  <input type="text" class="form-control"     name="first_name"   value={first_name}  onChange={e => onInputChange(e)} placeholder="Enter Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="last_name"   value={last_name} onChange={e => onInputChange(e)} placeholder="Enter Last Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="phone"   value={phone} onChange={e => onInputChange(e)} placeholder="Enter Phone"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="email"  onChange={e => onInputChange(e)} value={email} placeholder="Enter Email"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="gender"  onChange={e => onInputChange(e)} value={gender}  placeholder="Enter Gender"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="state" onChange={e => onInputChange(e)} value={state} placeholder=" Enter State"/>
              </div>
              
                <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
              </form>
          </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>

     {/* Model Box Finsihs */}
     </div>  
    </div>    
    <nav aria-label="Page navigation example">
      
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>  
      
);
  
};

export const ReportsTwo = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
   const [changed, setChanged] = useState(false);
        let history = useHistory();
        const { id } = useParams(); 
    const [student, setStudent] = useState({
      first_name: "",
      last_name: "",
      cour: "",
      level:"",
      type:"",
      cin:"",
      educational_year:"",
    
    
    });
    const {first_name, last_name, cour,level,type,cin,educational_year} =student;
    const onInputChange = e => {
      setStudent({ ...student, [e.target.name]: e.target.value });
    };
    const handleSumbit =(e)=> {
      e.preventDefault();
      // history.push("/");
      axios.post("http://localhost:3001/api/student/create-student",student)
      alert('Data Inserted');
    }
    useEffect(() => {
      getAllStudents();
    }, []);
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3001/api/student/update-student/${id}`, student);
      history.push("/");
    };
  
    const getAllStudents = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/student/get-all-students"
      );
      if (response.status === 200) {
        setData(response.data.data);
    
      }
      
       
    };
  
  
    return (
      
      <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
        <div class="row ">
         
         <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
              
              </form>
            </div>    
            </div>  
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Student Details</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Student
            </Button>
           </div>
         </div>  
          <div class="row">
              <div class="table-responsive " >
               <table class="table table-striped table-hover table-bordered">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Name </th>
                          <th>last Name</th>
                          <th>cour</th>
                          <th>Level </th>
                          <th>Type </th>
                          <th>Cin </th>
                          <th>educational Year </th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                     
                  {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope=" row">{index+1}</th>
                 <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.cour}</td>
                <td>{item.level}</td>
                <td>{item.type}</td>
                <td>{item.cin}</td>
                <td>{item.educational_year}</td>
                <td> 
                             <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                              <a onSubmit={e => onSubmit(e)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                              <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                               
                          </td>
                      </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>   
      </div>  

      {/* <!--- Model Box ---> */}
      <div className="model_box">
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Record</Modal.Title>
      </Modal.Header>
          <Modal.Body>
          <form>
          <div class="form-group">
                  <input type="text" class="form-control"     name="first_name"   value={first_name}  onChange={e => onInputChange(e)} placeholder="Enter Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="last_name"   value={last_name} onChange={e => onInputChange(e)} placeholder="Enter Last Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="cour"   value={cour} onChange={e => onInputChange(e)} placeholder="Enter Cour"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="level"  onChange={e => onInputChange(e)} value={level} placeholder="Enter Level"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="type"  onChange={e => onInputChange(e)} value={type}  placeholder="Enter Type"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="cin" onChange={e => onInputChange(e)} value={cin} placeholder=" Enter Cin"/>
              </div>
              <div class="form-group mt-3">
                  <input type="date" class="form-control"     name="educational_year" onChange={e => onInputChange(e)} value={educational_year} placeholder=" Enter Educational Year"/>
              </div>
              
              
                <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
              </form>
          </Modal.Body>

          <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>


     {/* Model Box Finsihs */}
     </div>  
    </div>    
    </div>  
);
};

export const ReportsThree = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
   const [changed, setChanged] = useState(false);
        let history = useHistory();

    const [cours, setCours] = useState({
      name: "",
      type: "",
      prof: "",
      students:"",
      level:"",
      date:"",

    
    
    });
    const {name, type, prof,students,level,date} =cours;
    const onInputChange = e => {
      setCours({ ...cours, [e.target.name]: e.target.value });
    };
    const handleSumbit =(e)=> {
      e.preventDefault();
      // history.push("/");
      axios.post("http://localhost:3001/api/cours/create-cour",cours)
      alert('Data Inserted');
    }
  useEffect(() => {
    getAllCourses();
  }, []);
 

  const getAllCourses = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/cours/get-all-courses"
    );
    if (response.status === 200) {
      setData(response.data.data);
  
    }
    
  };


  return (
    
    <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
        <div class="row ">
         
         <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
              
              </form>
            </div>    
            </div>  
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Cour Details</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Cour
            </Button>
           </div>
         </div>  
          <div class="row">
              <div class="table-responsive " >
               <table class="table table-striped table-hover table-bordered">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Name </th>
                          <th>Type</th>
                          <th>Professor</th>
                          <th>Students </th>
                          <th>Level </th>
                          <th>Date </th>
                          
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope=" row">{index+1}</th>
                 <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.prof}</td>
                <td>{item.students}</td>
                <td>{item.level}</td>
                <td>{item.date}</td>
               
                <td> 
                             <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                              <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                              <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                               
                          </td>
                      </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>   
      </div>  

      {/* <!--- Model Box ---> */}
      <div className="model_box">
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Record</Modal.Title>
      </Modal.Header>
          <Modal.Body>
          <form>
          <div class="form-group">
                  <input type="text" class="form-control"     name="name"   value={name}  onChange={e => onInputChange(e)} placeholder="Enter Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="type"   value={type} onChange={e => onInputChange(e)} placeholder="Enter Type"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="prof"   value={prof} onChange={e => onInputChange(e)} placeholder="Enter Professeur"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="students"  onChange={e => onInputChange(e)} value={students} placeholder="Enter Students"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="level"  onChange={e => onInputChange(e)} value={level}  placeholder="Enter Level"/>
              </div>
              <div class="form-group mt-3">
                  <input type="date" class="form-control"     name="date" onChange={e => onInputChange(e)} value={date} placeholder=" Enter Date"/>
              </div>
              
              
              
                <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
              </form>
          </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>

     {/* Model Box Finsihs */}
     </div>  
    </div>    
    </div>  
);
                }
    export const ReportsFour = () => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [data, setData] = useState([]);
       const [changed, setChanged] = useState(false);
            let history = useHistory();
            const { id } = useParams(); 
        const [niveau, setNiveau] = useState({
          nom: "",
        });
        const {nom } =niveau;
        const onInputChange = e => {
          setNiveau({ ...niveau, [e.target.name]: e.target.value });
        };
        const handleSumbit =(e)=> {
          e.preventDefault();
          // history.push("/");
          axios.post("http://localhost:3001/api/niveau/create-niveau",niveau)
          alert('Data Inserted');
        }
        const onSubmit = async e => {
          e.preventDefault();
          await axios.put(`http://localhost:3001/api/niveau/update-niveau/${id}`, niveau);
          history.push("/");
        };
  useEffect(() => {
    getAllNiveaux();
  }, []);


  const getAllNiveaux = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/niveau/get-all-niveaux"
    );
    if (response.status === 200) {
      setData(response.data.data);
  
    }
    
  };


  return (
    
    <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
        <div class="row ">
         
         <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
              
              </form>
            </div>    
            </div>  
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Niveau Details</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Niveau
            </Button>
           </div>
         </div>  
          <div class="row">
              <div class="table-responsive " >
               <table class="table table-striped table-hover table-bordered">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Name </th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope=" row">{index+1}</th>
                 <td>{item.nom}</td>
              
                
                
                <td> 
                             <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                              <a onSubmit={e => onSubmit(e)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                              <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                               
                          </td>
                      </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>   
      </div>  

      {/* <!--- Model Box ---> */}
      <div className="model_box">
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Record</Modal.Title>
      </Modal.Header>
          <Modal.Body>
          <form>
              <div class="form-group">
                  <input type="text" class="form-control"     name="nom"  onChange={e => onInputChange(e)} value={nom} placeholder="Enter Name"/>
              </div>
             
              
                <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
              </form>
          </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>

     {/* Model Box Finsihs */}
     </div>  
    </div>    
    </div>  
);
                
};
export const ReportsFive= () => {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
   const [changed, setChanged] = useState(false);
        let history = useHistory();
        const { id } = useParams(); 
    const [classe, setClasse] = useState({
      capacité: "",
      num_class:"",
    });
    const {capacité,num_class } =classe;
    const onInputChange = e => {
      setClasse({ ...classe, [e.target.name]: e.target.value });
    };
    const handleSumbit =(e)=> {
      e.preventDefault();
      // history.push("/");
      axios.post("http://localhost:3001/api/classe/createClasse",classe)
      alert('Data Inserted');
    }
  useEffect(() => {
    getAllClasses();
    
    
  }, []);
  
  
  const getAllClasses = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/classe/get-all-classes"
    );
    if (response.status === 200) {
      setData(response.data.data);
  
    }

  }
  const onSubmit = async e => {
  e.preventDefault();
  await axios.put(`http://localhost:3001/api/classe/update-classe/${id}`, classe);
  history.push("/");
};
  
  return (
  
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Teacher Details</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Teacher
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Capacite </th>
                            <th>Numero Classe</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
         
                    {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope=" row">{index+1}</th>
                 <td>{item.capacité}</td>
                <td>{item.num_class}</td>
                            <td>
                               <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a onSubmit={e => onSubmit(e)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                 
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>   
        </div>  
  
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control"     name="capacité"  onChange={e => onInputChange(e)} value={capacité} placeholder="Enter Capacite"/>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control"     name="num_class"  onChange={e => onInputChange(e)} value={num_class} placeholder="Enter numero de classe"/>
                </div>
               
                  <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
                </form>
            </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
    
  };
  export const ReportsSix= () => {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
     const [changed, setChanged] = useState(false);
          let history = useHistory();
          const { id } = useParams(); 
      const [resultat, setResultat] = useState({
        type: "",
        matiere:"",
        note:""
      });
      const {type,matiere,note } =resultat;
      const onInputChange = e => {
        setResultat({ ...resultat, [e.target.name]: e.target.value });
      };
      const handleSumbit =(e)=> {
        e.preventDefault();
        // history.push("/");
        axios.post("http://localhost:3001/api/resultat/create-resultat",resultat)
        alert('Data Inserted');
      }
    useEffect(() => {
      getAllResultats();
      
      
    }, []);
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3001/api/resultat/update-resultat/${id}`, resultat);
      history.push("/");
    };
    
    const getAllResultats = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/resultat/get-all-resultats"
      );
      if (response.status === 200) {
        setData(response.data.data);
    
      }
    }
    
     
    
    return (
    
         <div class="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
            <div class="row ">
             
             <div class="col-sm-3 mt-5 mb-4 text-gred">
                <div className="search">
                  <form class="form-inline">
                   <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                  
                  </form>
                </div>    
                </div>  
                <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Resultat Details</b></h2></div>
                <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                <Button variant="primary" onClick={handleShow}>
                  Add New Resultat
                </Button>
               </div>
             </div>  
              <div class="row">
                  <div class="table-responsive " >
                   <table class="table table-striped table-hover table-bordered">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Type </th>
                              <th>Matiere</th>
                              <th>Note</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                         
                      {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope=" row">{index+1}</th>
                 <td>{item.type}</td>
                <td>{item.matiere}</td>
                <td>{item.note}</td>
                
                              <td>
                                 <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                  <a  onSubmit={e => onSubmit(e)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                  <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                   
                              </td>
                          </tr>
                          )
                      })}
                      </tbody>
                  </table>
              </div>   
          </div>  
    
          {/* <!--- Model Box ---> */}
          <div className="model_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Record</Modal.Title>
          </Modal.Header>
              <Modal.Body>
              <form>
                  <div class="form-group">
                  <input type="text" class="form-control"     name="type"  onChange={e => onInputChange(e)} value={type} placeholder="Enter Type"/>
                  </div>
                  <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="matiere"  onChange={e => onInputChange(e)} value={matiere} placeholder="Enter Matiere"/>
                  </div>
                  <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="note"  onChange={e => onInputChange(e)} value={note} placeholder="Enter Note"/>
                  </div>
                
                    <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
                  </form>
              </Modal.Body>
    
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
    
         {/* Model Box Finsihs */}
         </div>  
        </div>    
        </div>  
    );
   
    };
    export const ReportsSeven= () => {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [data, setData] = useState([]);
       const [changed, setChanged] = useState(false);
            let history = useHistory();
            const { id } = useParams(); 
        const [donation, setDonation] = useState({
          first_name: "",
          last_name:"",
          date:"",
          cin:"",
          price:""
        });
        const {first_name,last_name,date,cin,price} =donation;
        const onInputChange = e => {
          setDonation({ ...donation, [e.target.name]: e.target.value });
        };
        const handleSumbit =(e)=> {
          e.preventDefault();
          // history.push("/");
          axios.post("http://localhost:3001/api/donation/add-new-donation",donation)
          alert('Data Inserted');
        }
      useEffect(() => {
        getAllDonation();
        
        
      }, []);
     
      const getAllDonation = async () => {
        const response = await axios.get(
          "http://localhost:3001/api/donation/get-all-donation"
        );
        if (response.status === 200) {
          setData(response.data.data);
      
        }
      }
      
       
      
      return (
      
           <div class="container ">
              <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
              <div class="row ">
               
               <div class="col-sm-3 mt-5 mb-4 text-gred">
                  <div className="search">
                    <form class="form-inline">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                    
                    </form>
                  </div>    
                  </div>  
                  <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Resultat Details</b></h2></div>
                  <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                  <Button variant="primary" onClick={handleShow}>
                    Add New Resultat
                  </Button>
                 </div>
               </div>  
                <div class="row">
                    <div class="table-responsive " >
                     <table class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name </th>
                                <th>Last Name</th>
                                <th>Date</th>
                                <th>Cin</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope=" row">{index+1}</th>
                   <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.date}</td>
                  <td>{item.cin}</td>
                  <td>{item.price}</td>
                                <td>
                                   <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a  class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                     
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>   
            </div>  
      
            {/* <!--- Model Box ---> */}
            <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <form>
                    <div class="form-group">
                    <input type="text" class="form-control"     name="first_name"  onChange={e => onInputChange(e)} value={first_name} placeholder="Enter Type"/>
                    </div>
                    <div class="form-group mt-3">
                    <input type="text" class="form-control"     name="last_name"  onChange={e => onInputChange(e)} value={last_name} placeholder="Enter Matiere"/>
                    </div>
                    <div class="form-group mt-3">
                    <input type="text" class="form-control"     name="date"  onChange={e => onInputChange(e)} value={date} placeholder="Enter Note"/>
                    </div>
                    <div class="form-group mt-3">
                    <input type="text" class="form-control"     name="cin"  onChange={e => onInputChange(e)} value={cin} placeholder="Enter Note"/>
                    </div>
                    <div class="form-group mt-3">
                    <input type="text" class="form-control"     name="price"  onChange={e => onInputChange(e)} value={price} placeholder="Enter Note"/>
                    </div>
                  
                      <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
                    </form>
                </Modal.Body>
      
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
      
           {/* Model Box Finsihs */}
           </div>  
          </div>    
          </div>  
      );
     
      };


      export const ReportsHeight= () => {
  
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [data, setData] = useState([]);
         const [changed, setChanged] = useState(false);
              let history = useHistory();
              const { id } = useParams(); 
          const [caisse, setCaisse] = useState({
            name: "",
            montant:"",
         
          });
          const {name,montant } =caisse;
          const onInputChange = e => {
            setCaisse({ ...caisse, [e.target.name]: e.target.value });
          };
          const handleSumbit =(e)=> {
            e.preventDefault();
            // history.push("/");
            axios.post("http://localhost:3001/api/caisse/create-caisse",caisse)
           
          }
        useEffect(() => {
          getAllCaisse();
          
          
        }, []);
        
        const getAllCaisse = async () => {
          const response = await axios.get(
            "http://localhost:3001/api/resultat/get-all-Caisses"
          );
          if (response.status === 200) {
            setData(response.data.data);
        
          }
        }
        
         
        
        return (
        
             <div class="container ">
                <div className="crud shadow-lg p-8 mb-10 mt-5 bg-body rounded"> 
                <div class="row ">
                 
                 <div class="col-sm-3 mt-5 mb-4 text-gred">
                    <div className="search">
                      <form class="form-inline">
                       <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                      
                      </form>
                    </div>    
                    </div>  
                    <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Resultat Details</b></h2></div>
                    <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                    <Button variant="primary" onClick={handleShow}>
                      Add New Resultat
                    </Button>
                   </div>
                 </div>  
                  <div class="row">
                      <div class="table-responsive " >
                       <table class="table table-striped table-hover table-bordered">
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Name </th>
                                  <th>Montant</th>
                                  
                                  <th>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                             
                          {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope=" row">{index+1}</th>
                     <td>{item.name}</td>
                    <td>{item.montant}</td>
                 
                                  <td>
                                     <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                      <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                      <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                       
                                  </td>
                              </tr>
                              )
                          })}
                          </tbody>
                      </table>
                  </div>   
              </div>  
        
              {/* <!--- Model Box ---> */}
              <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                  <form>
                      <div class="form-group">
                      <input type="text" class="form-control"     name="name"  onChange={e => onInputChange(e)} value={name} placeholder="Enter Type"/>
                      </div>
                      <div class="form-group mt-3">
                      <input type="text" class="form-control"     name="montant"  onChange={e => onInputChange(e)} value={montant} placeholder="Enter Matiere"/>
                      </div>
                     
                        <button type="submit" class="btn btn-success mt-4" onClick={handleSumbit}>Add Record</button>
                      </form>
                  </Modal.Body>
        
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
        
             {/* Model Box Finsihs */}
             </div>  
            </div>    
            </div>  
        );
       
        };