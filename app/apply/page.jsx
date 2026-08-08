"use client"
import { useState } from "react"
import { questions } from "./faq"
import FAQ from "../components/FAQ"
import Link from "next/link"
import NavBar from "../components/NavBar2"

export default function Apply() {

  // APPLICATION State
  const appsOpen = true

  // 1. Unified State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    year: "",
    major: "",
    interests: [],
    skills: {
      git: 3,
      html: 3,
      css: 3,
      javascript: 3,
      react: 3,
    },
    reason: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => {
      const activeInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest) // Remove if already there
        : [...prev.interests, interest];            // Add if not there
      return { ...prev, interests: activeInterests };
    });
  };

  const handleSkillChange = (skill, rating) => {
    setFormData(prev => ({
      ...prev,
      skills: { ...prev.skills, [skill]: rating }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Application:", formData);
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 font-sans overflow-hidden ">
      
      <div className="h-fit md:h-screen bg-[#ECB0B9] p-3 md:p-8 text-white flex flex-col justify-center items-center text-center ">
        <NavBar/>
        {/* <div className="font-bold md:left-5 md:fixed md:top-5">
          <Link href="/">Return to Home</Link>
        </div> */}
        <h1 className="font-bold text-7xl mb-2">APPLY</h1>
        <p className="text-xl md:mb-5">The WiCS: Wired Dev Project</p>
        
        <div className="hidden md:block w-full max-w-md">
          <h2 className="font-bold text-3xl mb-6 border-b border-white/30 pb-2">FAQ</h2>
          <ul className=" items-center flex flex-col gap-4 text-left">
            {questions.map((item) => (
              <FAQ key={item.question} question={item.question} answer={item.answer}/>
            ))}
          </ul>
        </div>
      </div>

      {/* Form */}

      { appsOpen && <div className="h-full bg-white p-8 md:p-16 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg mx-auto">
          
          <section>
            <h2 className="font-bold text-xl mb-1">Personal Information</h2>
            <div className="h-px bg-gray-200 mb-6" />
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">First Name</label>
                <input 
                  className="border-2 border-gray-100 rounded-lg p-2 focus:border-[#ECB0B9] outline-none transition-all"
                  type="text" name="firstName" value={formData.firstName} onChange={handleChange} required 
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">Last Name</label>
                <input 
                  className="border-2 border-gray-100 rounded-lg p-2 focus:border-[#ECB0B9] outline-none transition-all"
                  type="text" name="lastName" value={formData.lastName} onChange={handleChange} required 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <input 
                className="border-2 border-gray-100 rounded-lg p-2 focus:border-[#ECB0B9] outline-none transition-all"
                type="email" name="email" value={formData.email} onChange={handleChange} required 
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label className="text-sm font-semibold text-gray-600">Major</label>
              <input 
                className="border-2 border-gray-100 rounded-lg p-2 focus:border-[#ECB0B9] outline-none transition-all"
                type="text" name="major" value={formData.major} onChange={handleChange} placeholder="e.g. Computer Science" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Year</label>
              <div className="flex flex-wrap gap-4">
                {['Freshman', 'Sophomore', 'Junior', 'Senior'].map((year) => (
                  <label key={year} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" name="year" value={year} 
                      checked={formData.year === year} onChange={handleChange}
                      className="accent-[#ECB0B9]"
                    />
                    <span className="text-sm">{year}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-1">Interests</h2>
            <p className="text-xs text-gray-500 mb-4">Select all that apply</p>
            <div className="h-px bg-gray-200 mb-4" />
            
            <div className="grid grid-cols-2 gap-3">
              {['Frontend', 'Backend', 'UI/UX Design', 'DevOps', 'Project Management', 'Not sure yet'].map((item) => (
                <label key={item} className={`
                  flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all
                  ${formData.interests?.includes(item) 
                    ? 'border-[#ECB0B9] bg-[#ecb0b910] text-[#ECB0B9]' 
                    : 'border-gray-100 text-gray-500'}
                `}>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={formData.interests?.includes(item)}
                    onChange={() => handleInterestChange(item)}
                  />
                  <span className="text-sm font-semibold">{item}</span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-1">Skill Proficiency</h2>
            <p className="text-xs text-gray-500 mb-4">1 = Novice, 5 = Expert</p>
            <div className="h-px bg-gray-200 mb-6" />
            
            <div className="flex flex-col gap-6">
              {Object.keys(formData.skills).map((skill) => (
                <div key={skill} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-700">{skill}</label>
                    <span className="text-[#ECB0B9] font-bold">{formData.skills[skill]}</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleSkillChange(skill, num)}
                        className={`flex-1 h-8 rounded-md transition-all ${
                          formData.skills[skill] >= num 
                            ? 'bg-[#ECB0B9] shadow-inner' 
                            : 'bg-gray-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-1">Tell us About Yourself</h2>
            <div className="h-px bg-gray-200 mb-6" />
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">Why do you want to join the Dev Project?</label>
              <textarea 
                rows="4"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border-2 border-gray-100 rounded-lg p-2 focus:border-[#ECB0B9] outline-none transition-all resize-none"
                placeholder="Share your goals and what you hope to learn..."
              />
            </div>
          </section>

          <button 
            type="submit" 
            className="cursor-pointer bg-[#ECB0B9] hover:bg-[#d99ba4] transition-colors font-bold py-3 px-6 rounded-full text-white shadow-[0_5px_5px_rgba(0,0,0,0.50)] mt-4"
          >
            SUBMIT 
          </button>
        </form>
      </div>}

      {!appsOpen && 
      <div className="h-full flex flex-col bg-white p-8 md:p-16 overflow-y-auto justify-center items-center">
        <p className="font-bold">APPLICATIONS ARE NOW CLOSED.</p>
        <p>Applications will open at the beginning of each semester.</p>
        <p>Please follow us on Instagram @wicsatuic to be notified when they open again.</p>
        </div>}
      
    </div>
  )
}