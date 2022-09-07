export function TaskCard ()
{
//sin archivo CSS
const cardStyle={background: '#000000', color: '#fff',
padding: '10px', border: '1px solid #fff'}
 const titleStyle={background: '#000000', color: '#fff', padding: '10px', border: '1px solid #fff'}

    return <div style={cardStyle}>
        <h1 style={titleStyle}>Mi primer Tarea</h1>
        <p>Tarea realizada</p>
    </div>
}