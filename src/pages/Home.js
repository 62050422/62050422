import React, { useEffect, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inData, setInData] = useState([]);
  const [inDataFilter, setInDataFilter] = useState([]);

  const onInputChang = (event) => {
    setSearchTerm(event.target.value);

    const filterList = inData.filter((list) => {
      return (
        list.firstName.includes(event.target.value) ||
        list.age.toString().includes(event.target.value)
      );
    });

    setInDataFilter(filterList);
  };

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    setInData(data);
    setInDataFilter(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        onChange={onInputChang}
        value={searchTerm}
        className="search-table"
      />
      <table className="main-table">
        <thead>
          <tr>
            <td>ชื่อ</td>
            <td>นามสกุล</td>
            <td>เพศ</td>
            <td>อายุ</td>
            <td>BMI</td>
            <td>Email</td>
            <td>เบอร์โทร</td>
            <td>ที่อยู่</td>
            <td>วันเกิด</td>
          </tr>
        </thead>
        <tbody>
          {inDataFilter.map((item) => {
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.weight}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.birthDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
