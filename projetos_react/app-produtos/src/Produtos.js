import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProdutosList from "./ProdutosList";
import ProdutosForm from "./ProdutosForm";
import ProdutoSrv from "./services/ProdutoSrv";
import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Toast } from 'primereact/toast';
import { confirmDialog } from 'primereact/confirmdialog';


function Produtos() {
    
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        ProdutoSrv.listar().then(response => {
            setProdutos(response.data);
            console.log("Usuários atualizados");
        }).catch(e => {
            console.log("Erro: " + e.message);
        });
    }

    // operação inserir
    const initialState = { id: null, nome: "", estoque: "", valor: "" };
    const [produto, setProduto] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();
    

    const inserir = () => {
        setProduto(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (produto._id == null) { // inclussão
            ProdutoSrv.incluir(produto).then(response => {
                setEditando(false);
                onClickAtualizar();
                toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
            })
                .catch(e => {
                    toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
                });
        } else { // alteração
            ProdutoSrv.alterar(produto).then(response => {
                setEditando(false);
                onClickAtualizar();
                toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
            })
                .catch(e => {
                    toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
                });
        }
    }

    const cancelar = () => {
        console.log('Cancelou ...');
        setEditando(false);
    }

    const editar = (id) => {
        setProduto(produtos.filter((produto) => produto._id == id)[0]);
        setEditando(true);
    };

    const excluir = (id) => {
        ProdutoSrv.excluir(id).then(response => {
            onClickAtualizar();
            toastRef.current.show({
                severity: 'success',
                summary: "Excluído", life: 2000
            });
        })
            .catch(e => {
                toastRef.current.show({
                    severity: 'error',
                    summary: e.message, life: 4000
                });
            });


    };

    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <ProdutosList
                    produtos={produtos}
                    onClickAtualizar={onClickAtualizar}
                    inserir={inserir}
                    editar={editar}
                    excluir={excluir}
                />
            </div>
        );
    } else {
        return (
            <div>
                <Toast ref={toastRef} />
                <ProdutosForm
                    produto={produto}
                    setProduto={setProduto}
                    salvar={salvar}
                    cancelar={cancelar}
                />
            </div>
        );
    }
}





export default Produtos;
