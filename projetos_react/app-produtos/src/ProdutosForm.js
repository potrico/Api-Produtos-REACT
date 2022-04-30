import React, { useState } from 'react';

function ProdutosForm(props) {
    // Declare variáveis de state
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setProduto({ ...props.produto, [name]: value })
    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label>Nome</label>
                    <input class="form-control" type="text" name="nome"
                        value={props.produto.nome} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Estoque</label>
                    <input class="form-control" type="number" name="estoque"
                        value={props.produto.estoque} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Valor</label>
                    <input class="form-control" type="number" name="valor"
                        value={props.produto.valor} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <button type="button" onClick={props.salvar}
                        className="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" onClick={props.cancelar}
                        className="btn btn-primary btn-sm">Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default ProdutosForm;