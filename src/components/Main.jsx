import { useState } from "react";

export default function Main() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  //array da cui prendere i dati

  const languages = [
    {
      id: 1,
      title: "JavaScript",
      text: "Linguaggio dinamico per sviluppo web, lato client e server.",
    },
    {
      id: 2,
      title: "Python",
      text: "Versatile, leggibile e usato per data science, web e automazione.",
    },
    {
      id: 3,
      title: "Java",
      text: "Orientato agli oggetti, molto usato per applicazioni aziendali e Android.",
    },
    {
      id: 4,
      title: "C++",
      text: "Potente e veloce, usato in giochi, embedded e software di sistema.",
    },
    {
      id: 5,
      title: "Go",
      text: "Creato da Google, eccelle in performance e semplicità per backend.",
    },
    {
      id: 6,
      title: "Ruby",
      text: "Semplice e intuitivo, noto per lo sviluppo web con Ruby on Rails.",
    },
  ];

  return (
    <>
      {languages.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={handleClick}>
              {open ? "open" : "close"}
              {item.title}
            </button>
            {open && (
              <div>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
