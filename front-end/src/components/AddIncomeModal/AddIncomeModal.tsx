import {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {v4 as uuidv4} from "uuid";
import {IncomeModel} from "../../types/IncomeModel";

type AddExpenseModalProps = {
    show: boolean;
    onClose: () => void;
    onSave: (expense: IncomeModel) => void;
};

export default function AddIncomeModal({show, onClose, onSave}: AddExpenseModalProps) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState<number>(0);
    const [data, setData] = useState("");

    const resetForm = () => {
        setDescricao("");
        setValor(0);
        setData("");
    };

    const handleSubmit = () => {
        const newIncome: IncomeModel = {
            id: uuidv4(),
            descricao,
            valor,
            data: new Date(data),
        };

        onSave(newIncome);
        resetForm();
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
                            type="number"
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
