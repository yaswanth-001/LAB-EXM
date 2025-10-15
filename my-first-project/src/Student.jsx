const Student = (props) => {
  return (
    <div>
      <h3>Student Details</h3>
      Student Id: {props.id} <br />
      Student Name: {props.name} <br />
      Student Age: {props.age}
    </div>                                                                                 
  );
};

export default Student;