import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Academicform() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [idCard, setIdCard] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [image, setImage] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="w-full min-h-screen flex bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 justify-center items=center">
     
      <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 flex flex-col p-6 md:p-20 justify-between">
        <h3 className="text-xl text-black font-semibold">BIT WEB APP</h3>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="flex flex-col w-full mb-5">
            <h3 className="text-3xl font-semibold mb-4">Academic Form</h3>
            <p className="text-base mb-2">Enter Your  details.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                required
              title="Please enter a valid email address"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Your username"
                value={username}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="relative">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-4 top-4 text-gray-600 hover:text-red-900 hover:text-black-1500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"} Password
                </button>
              </div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                value={fullName}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setFullName(e.target.value)}
              />
              <label>Roll Number</label>
              <input
                type="text"
                placeholder="Enter Your Roll Number"
                value={rollNumber}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setRollNumber(e.target.value)}
              />
              <label className="block text-l mb-2">Upload ID-Card Image</label>
              <input
                type="file"
                accept="image/*"
                value={idCard}
                onChange={(e) => setIdCard(e.target.files[0])}
              />
              <div className="h-5"></div>
              <label>Branch</label>
              <input
                type="text"
                placeholder="Enter Your Branch"
                value={branch}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setBranch(e.target.value)}
              />
              <label>Section</label>
              <input
                type="text"
                placeholder="Enter Your Section"
                value={section}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setSection(e.target.value)}
              />
              <label>Upload Your Image</label>
              <input
                type="file"
                accept="image/*"
                value={image}
                onChange={(e) => setImage(e.target.files[0])}
              />
                            <div className="h-5"></div>

              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                value={mobileNumber}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <label>Semester</label>
              <input
                type="text"
                placeholder="Enter Your Semester Number"
                value={semester}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setSemester(e.target.value)}
              />
              <label>CGPA</label>
              <input
                type="text"
                placeholder="Enter Your CGPA"
                value={cgpa}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                onChange={(e) => setCgpa(e.target.value)}
              />
            </div>
            <div className="h-8"></div>
            <div className="w-full flex items-center justify-between">
            
              
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                className="bg-black text-white w-full rounded-md p-4 text-center flex items-center justify-center my-2 hover:bg-black/90"
               
              >
                Submit
              </button>
            </div>
          </form>
          <div className="w-full items-center justify-center flex">
            <p className="text-sm font-normal text-black">
           
              <span className="font-semibold underline underline-offset cursor-pointer text-blue-600">
                <Link to="/db">Go back to Dashboard</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
