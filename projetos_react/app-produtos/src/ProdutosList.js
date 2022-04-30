import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProdutosList(props) {
    return (
        <div>
            <h4>MANUTENÇÃO DE PRODUTOS</h4>

            <button onClick={props.onClickAtualizar}
                type="button" class="btn btn-primary btn-sm">Atualizar Lista</button>

            <button onClick={props.inserir}
                type="button" class="btn btn-primary btn-sm">Inserir</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Estoque</th>
                        <th>valor</th>
                    </tr>
                </thead>
                <tbody>
                    {props.produtos.length > 0 ? (
                        props.produtos.map((o, index) => (
                            <tr key={index}>
                                <td>{o._id}</td>
                                <td>{o.nome}</td>
                                <td>{o.estoque}</td>
                                <td>{o.valor}</td>
                                <td>
                                    <button onClick={() => props.editar(o._id)} 
                                    className="btn btn-primary btn-sm">Editar</button>
                                    
                                    <button onClick={() => props.excluir(o._id)}
                                    className="btn btn-danger btn-sm">Excluir</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>Nenhum produto encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProdutosList;
