import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {ExpenseModel} from "../../types/Expense";
import {v4 as uuidv4} from "uuid";

type AddExpenseModalProps = {
    show: boolean;
    onClose: () => void;
    onSave: (expense: ExpenseModel) => void;
};

const refreshExpenses = () => {
    window.location.reload();
}

export default function AddExpenseModal({show, onClose, onSave}: AddExpenseModalProps) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState<number>(0);
    const [data, setData] = useState("");
    const [categoria, setCategoria] = useState("");

    const resetForm = () => {
        setTitulo("");
        setDescricao("");
        setValor(0);
        setData("");
        setCategoria("");
    };

    const handleSubmit = () => {
        const newExpense: ExpenseModel = {
            id: uuidv4(),
            titulo,
            descricao,
            valor,
            data: Date.parse(data),
            categoria,
        };
        onSave(newExpense);
        resetForm();
        refreshExpenses()
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton={true}>
                <Modal.Title>Adicionar Despesa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            type="text"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control
                            type="text"
                            value={valor}
                            onChange={(e) => setValor(Number(e.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data</Form.Label>
                        <Form.Control
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="alimentação">Alimentação</option>
                            <option value="transporte">Transporte</option>
                            <option value="lazer">Lazer</option>
                            <option value="educação">Educação</option>
                            <option value="saúde">Saúde</option>
                            <option value="contas">Contas</option>
                            <option value="compras">Compras</option>
                            <option value="viagem">Viagem</option>
                            <option value="assinaturas">Assinaturas</option>
                            <option value="restante do orçamento">Restante do orçamento</option>
                            <option value="outros">Outros</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
