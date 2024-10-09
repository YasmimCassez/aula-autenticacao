import Card from 'react-bootstrap/Card';

function CardPessoa({ pessoa }) {

    const estiloParagrafo = {
        fontSize: '1rem',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        margin: 0
    };

    const estiloAlinhamento = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const estiloTextoOverflow = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginLeft: '8px',
    };

    const estiloCard = {
        width: '18rem',
        height: '45vh',
        margin: '1%',
        backgroundColor: 'var(--cardBg)'
    };

    return (
        <Card style={estiloCard}>
            <Card.Body key={pessoa.id}>
                <Card.Title>{pessoa.nome}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pessoa.sobrenome}</Card.Subtitle>
                <hr />
                <Card.Text style={estiloAlinhamento}>
                    <p style={estiloParagrafo}>CPF:</p> 
                    <span style={estiloTextoOverflow}>{pessoa.cpf}</span>
                </Card.Text>
                <Card.Text style={estiloAlinhamento}>
                    <p style={estiloParagrafo}>E-mail:</p> 
                    <span style={estiloTextoOverflow}>{pessoa.email}</span>
                </Card.Text>
                <Card.Text style={estiloAlinhamento}>
                    <p style={estiloParagrafo}>Cidade:</p> 
                    <span style={estiloTextoOverflow}>{pessoa.cidade}</span>
                </Card.Text>
                <Card.Text style={estiloAlinhamento}>
                    <p style={estiloParagrafo}>País:</p> 
                    <span style={estiloTextoOverflow}>{pessoa.pais}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardPessoa;
