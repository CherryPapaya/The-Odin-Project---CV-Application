const person = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  experience: [{
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: [],
  }],
  education: [{}],
  skills: {
    soft: [""],
    hard: [""],
  },
}

export function getArrayProperties() {
  return Object.entries(person)
      .filter(([, value]) => Array.isArray(value))
      .map(([key]) => key);
}

export default person;