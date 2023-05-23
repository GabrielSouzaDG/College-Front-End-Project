import React, { useState } from 'react';
import './index.css';

const ListaDeCompras = () => {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState('');

  const adicionarItem = () => {
    if (item.trim() === '') {
      alert('Se não vai comprar nada nem abre o app!!!');
      return;
    }

    const itemExistente = lista.find((elemento) => elemento.nome === item);

    if (itemExistente) {
      const novaLista = lista.map((elemento) => {
        if (elemento.nome === item) {
          return { ...elemento, quantidade: elemento.quantidade + 1 };
        }
        return elemento;
      });
      setLista(novaLista);
    } else {
      setLista([...lista, { nome: item, quantidade: 1 }]);
    }
    setItem('');
  };

  const removerItem = (nome) => {
    const novaLista = lista.filter((elemento) => elemento.nome !== nome);
    setLista(novaLista);
  };

  const removerTodosItens = () => {
    setLista([]);
  };

  const enterParaEnviar = (e) => {
    if (e.key === 'Enter') {
      adicionarItem();
    }
  };

  return (
    <div className="lista-de-compras">
      <h2>Lista de Compras</h2>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={enterParaEnviar}
          placeholder="Digite um item"
        />
        <button onClick={adicionarItem}>Adicionar Compra</button>
      </div>
      <ul>
        {lista.map((elemento, index) => (
          <li key={index}>
            {elemento.nome} - {elemento.quantidade}
            <button onClick={() => removerItem(elemento.nome)}>Cancelar esta compra</button>
          </li>
        ))}
      </ul>
      {lista.length > 0 && (
        <div className="botao-remover-todos">
          <button onClick={removerTodosItens}>Cancelar todas as compras</button>
        </div>
      )}
    </div>
  );
};

export default ListaDeCompras;
