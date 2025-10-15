const Sample = () => {
  const us=[
  {id:1,name:"yaswanth",age:19},
  {id:2,name:"ajju bhai",age:24},
];
  return (
    <div>
      <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {us.map((us) => (
  <tr key={us.id}>
    <td>{us.id}</td>
    <td>{us.name}</td>
    <td>{us.age}</td>
  </tr>
))}
      </table>
    </div>
  )
}
export default Sample