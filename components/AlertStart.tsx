import { useState } from "react";
import Modal from "react-modal";

function AlertStart() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 p-8 rounded-lg shadow-lg z-50"
    overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50"
    contentLabel="Mensagem de boas-vindas"
  >
    <div className="text-white">
      <h2 className="mb-4 text-xl font-bold">Bem-vindo ao Caianflix!</h2>
      <p className="mb-4">
        Este é um site criado com o propósito de aplicar e aprimorar os conhecimentos em tecnologias como TypeScript, Prisma, Tailwind CSS, React, Next.js, MongoDB, NextAuth, Vercel, bcrypt e axios. O Caianflix é uma adaptação inspirada no famoso serviço de streaming Netflix.
      </p>
      <p className="mb-4">
        O Caianflix foi desenvolvido por Caian Marcinkowski Ferreira. Para mais informações sobre o desenvolvedor ou para contribuir com o projeto, visite o <a href="https://portfolio-caian.vercel.app/" className="underline">portfolio de Caian Marcinkowski Ferreira</a>. O código-fonte do projeto está disponível em <a href="https://github.com/CaianMarcinkowski/caianflix" className="underline">GitHub</a>.
      </p>
      <p className="mb-4">
        Por favor, note que o conteúdo deste site possui direitos autorais de diversas fontes:
      </p>
      <ul className="list-disc mb-4">
        <li>© Copyright 2006, Blender Foundation / Netherlands Media Art Institute / <a href="http://www.elephantsdream.org" className="underline">www.elephantsdream.org</a></li>
        <li>© Copyright 2008, Blender Foundation / <a href="http://www.bigbuckbunny.org" className="underline">www.bigbuckbunny.org</a></li>
        <li>© Copyright Blender Foundation | <a href="http://durian.blender.org" className="underline"> durian.blender.org </a> | <a href="http://www.sintel.org" className="underline"> www.sintel.org </a></li>
      </ul>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={closeModal}
      >
        OK
      </button>
    </div>
  </Modal>
</div>

  );
}

export default AlertStart;
