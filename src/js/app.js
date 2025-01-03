const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".fa-circle-xmark");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  const skillItems = document.querySelectorAll(".skill-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  skillItems.forEach((item) => {
    observer.observe(item);
  });
const contatoForm = document.getElementById("contatoForm");
const formMessage = document.getElementById("formMessage");

contatoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    formMessage.textContent = "Por favor, preencha todos os campos.";
    formMessage.style.color = "red";
  } else if (!validateEmail(email)) {
    formMessage.textContent = "Por favor, insira um email válido.";
    formMessage.style.color = "red";
  } else {
    // Captura dos dados do formulário
    const formData = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };
    fetch("https://short-rune-comb.glitch.me/api/contatos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        formMessage.textContent = "Formulário enviado com sucesso!";
        formMessage.style.color = "green";
        contatoForm.reset();
      })
      .catch((error) => {
        formMessage.textContent =
          "Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.";
        formMessage.style.color = "red";
        console.error("Erro:", error);
      });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
});