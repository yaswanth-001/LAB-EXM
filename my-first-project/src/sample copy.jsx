const Sample = () => {
  const u=[
  {id:1,name:"Karthik",age:19},
  {id:2,name:"Monhan",age:20},
];
  return (
    <div>
      <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {u.map((u) => (
  <tr key={u.id}>
    <td>{u.id}</td>
    <td>{u.name}</td>
    <td>{u.age}</td>
  </tr>
))}
      </table>
    </div>
  )
}
export default Sample