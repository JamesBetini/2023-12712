const testimonials = [
    {
      name: "David B",
      photoUrl:
        "Man I.png",
      text: "Betini James attention to detail and passion for creating beautiful and functional user interfaces is truly remarkable.",
    },
    {
      name: "Jonathan M",
      photoUrl:
        "Man II.png",
      text: "I have had the pleasure of working with Betini James on several frontend development projects, and I have been consistently impressed with his skills and professionalism.  ",
    },
    {
      name: "Alexander S",
      photoUrl:
        "Woman I.png",
      text: "Betini James is a highly skilled frontend developer with a keen eye for detail and a passion for creating exceptional user experiences.",
    },
  ];
  
  const imgEl = document.querySelector("img");
  const textEl = document.querySelector(".text");
  const usernameEl = document.querySelector(".username");
  
  let idx = 0;
  
  updateTestimonial();
  
  function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 10000);
  }